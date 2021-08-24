import { useState } from "react";
import { useFirebaseRooms } from "../../../firebase/hooks/useFirebaseRooms";
import { roomInitialState, roomType } from "../helpers/types/rooms";
import { roomQuestion, roomQuestionInitialState } from "../helpers/types/rooms";
export const useRooms = () => {
    const { createRoom } = useFirebaseRooms();
    const [errorMessage, setErrorMessage] = useState("");
    const [participants, setParticipants] = useState([]);
    const [currentRoom, setCurrentRoom] = useState<roomType>(roomInitialState);
    const [currentQuestion, setCurrentQuestion] = useState<roomQuestion>(
        roomQuestionInitialState
    );

    const handleCurrentRoomChange = ({
        target: { value, name },
    }: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
        setCurrentRoom((prevState) => ({
            ...prevState,
            [name ?? "title"]: value,
        }));
    };

    const handleCurrentQuestionChange = ({
        target: { value, name },
    }: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
        setCurrentQuestion((prevState) => ({
            ...prevState,
            [name ?? "question"]: value,
        }));
    };

    const pushQuestion = () => {
        if (currentQuestion.question) {
            setErrorMessage("");
            setCurrentRoom((prevState) => ({
                ...prevState,
                questions: [...prevState.questions, currentQuestion],
            }));
            setCurrentQuestion(roomQuestionInitialState);
        } else setErrorMessage("Debe escribir el titulo de la pregunta");
    };

    const deleteQuestion = (questionIndex: number) => {
        const filteredQuestions = currentRoom.questions.filter(
            (question, index) => index !== questionIndex
        );
        setCurrentRoom((prevState) => ({
            ...prevState,
            questions: filteredQuestions,
        }));
    };

    const handleQuestionSubmission = (submissionCallback: Function) => {
        if (currentRoom.title && currentRoom.endDate) {
            const roomEndDate = new Date(currentRoom.endDate);
            if(currentRoom.beginDate ?? new Date() < roomEndDate){
                createRoom(currentRoom, participants);
                setCurrentRoom(roomInitialState);
                submissionCallback();
            } else setErrorMessage("No es posible crear reuniones en el pasado");
        } else setErrorMessage("Faltan campos");
    };

    return {
        currentQuestion,
        currentRoom,
        errorMessage,
        pushQuestion,
        deleteQuestion,
        handleCurrentQuestionChange,
        handleCurrentRoomChange,
        handleQuestionSubmission,
        setParticipants,
    };
};
