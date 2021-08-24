import { useFirebaseRooms } from "../../../firebase/hooks/useFirebaseRooms";
import { roomQuestion, roomType } from "../helpers/types/rooms";
import { useState, useCallback, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../../../firebase/components/FirebaseProvider";
import { questionAnswer } from '../helpers/types/questionAnswer';

export const useRoom = (roomId: string) => {
    const firebase = useContext(FirebaseContext);
    const history = useHistory();
    const [answers, setAnswers] = useState<questionAnswer[]>([]);
    const [questionsid, setQuestionsid] = useState("");
    const { getRoom, getQuestions, endQuestion, getQuestionsId } =
        useFirebaseRooms();
    const [questions, setQuestions] = useState<roomQuestion[]>([]);
    const [room, setRoom] = useState<roomType>();

    const currentQuestion = questions.find(
        (question) => !question.isEnded
    )?.question;

    const handleQuestionEnd = useCallback(
        (questionTitle: string) => {
            const editedQuestiosn = questions.map((question) => {
                if (question.question === questionTitle)
                    question.isEnded = true;
                return question;
            });

            endQuestion(roomId, editedQuestiosn);
            setQuestions(editedQuestiosn);
        },
        [endQuestion, roomId, questions]
    );

    useEffect(() => {
        if (!room?.title) {
            getRoom(roomId).then((room) => {
                setRoom(room as roomType);
            });
        }
    }, [getRoom, roomId, room?.title]);

    const endRoom = () => {
        firebase
            .firestore()
            .collection("Rooms")
            .doc(roomId)
            .set({ isEnded: true }, { merge: true })
            .then(() => {
                history.push("/");
            });
    };

    const unsubscribe = firebase
        .firestore()
        .collection("Answers")
        .where("questions", "==", questionsid)
        .onSnapshot((snapShot) => {
            snapShot.docChanges().forEach((change) => {
                setAnswers(
                    snapShot.docs
                        .map((answer) => answer.data())[0]
                        .users.filter(
                            (answer: questionAnswer) => answer.question === currentQuestion
                        ) ?? ([] as questionAnswer[])
                );
            });
        });

    useEffect(() => {
        if (!questions.length) {
            getQuestions(roomId).then(([questions]) => {
                const { questions: roomQuestions } = questions as any;
                setQuestions(roomQuestions as roomQuestion[]);
            });
        }
    }, [getQuestions, roomId, questions.length]);

    useEffect(() => {
        if (!questionsid) {
            getQuestionsId(roomId).then(setQuestionsid);
        }
    }, [getQuestionsId, questionsid, roomId]);

    useEffect(() => () => unsubscribe());

    return {
        currentQuestion,
        room,
        questions,
        handleQuestionEnd,
        questionsid,
        endRoom,
        answers,
    };
};
