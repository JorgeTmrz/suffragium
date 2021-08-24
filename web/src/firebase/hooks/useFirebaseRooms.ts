import { useContext, useCallback } from "react";
import { roomType, roomQuestion } from "../../pages/admin/helpers/types/rooms";
import { FirebaseContext } from "../components/FirebaseProvider";
export const useFirebaseRooms = () => {
    const firebase = useContext(FirebaseContext);
    const roomsRef = firebase.firestore().collection("Rooms");
    const questionsRef = firebase.firestore().collection("Questions");

    const createRoom = useCallback(
        ({ questions, ...room }: roomType, participants: Object[]) => {
            roomsRef
                .add({
                    ...room,
                    beginDate: new Date(),
                    endDate: new Date(room.endDate ?? 0),
                    isEnded: false,
                    participants: participants,
                })
                .then((result) => {
                    questionsRef.add({
                        questions: questions.map((question) => ({
                            ...question,
                            isEnded: false,
                        })),
                        room: result.id,
                    });
                });
        },
        [questionsRef, roomsRef]
    );

    const getRooms = useCallback(() => {
        return roomsRef.get().then((result) => {
            return {
                ended: result.docs
                    .map(
                        (room) =>
                            ({
                                id: room.id,
                                ...room.data(),
                            } as unknown as roomType)
                    )
                    .filter((room) => room.isEnded),
                active: result.docs
                    .map(
                        (room) =>
                            ({
                                id: room.id,
                                ...room.data(),
                            } as unknown as roomType)
                    )
                    .filter((room) => !room.isEnded),
            };
        });
    }, [roomsRef]);

    const getRoom = useCallback(
        (roomId: string) => {
            return roomsRef
                .doc(roomId)
                .get()
                .then((room) => {
                    return room.data();
                });
        },
        [roomsRef]
    );

    const getQuestions = useCallback(
        (roomId: string) => {
            return questionsRef
                .where("room", "==", roomId)
                .get()
                .then((questions) => {
                    return questions.docs.map((question) => question.data());
                });
        },
        [questionsRef]
    );

    const endQuestion = useCallback(
        (roomId: string, editedQuestions: roomQuestion[]) => {
            questionsRef
                .where("room", "==", roomId)
                .get()
                .then((questions) => {
                    questions.docs.forEach((question) => {
                        questionsRef.doc(question.id).update({
                            questions: editedQuestions,
                        });
                    });
                });
        },
        [questionsRef]
    );

    const getQuestionsId = useCallback(
        (roomId: string) => {
            return questionsRef
                .where("room", "==", roomId)
                .get()
                .then((questions) => {
                    return questions.docs.map((question) => question.id)[0];
                });
        },
        [questionsRef]
    );

    return {
        endQuestion,
        createRoom,
        getRoom,
        getRooms,
        getQuestions,
        getQuestionsId,
    };
};
