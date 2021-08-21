import { useState } from "react";
import {
    currentRoom,
    roomQuestion,
    roomQuestionInitialState,
} from "../helpers/types/rooms";
export const useRooms = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const [currentQuestion, setCurrentQuestion] = useState<roomQuestion>(
        roomQuestionInitialState
    );

    const [currentRoom, setCurrentRoom] = useState<currentRoom>({
        beginDate: null,
        endDate: null,
        roomTitle: "",
        ended: false,
        questions: [],
        users: [],
    });

    const handleCurrentRoomChange = ({
        target: { value, name },
    }: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
        setCurrentRoom((prevState) => ({
            ...prevState,
            [name ?? "roomTitle"]: value,
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

    return {
        currentQuestion,
        currentRoom,
        errorMessage,
        handleCurrentQuestionChange,
        handleCurrentRoomChange,
        pushQuestion,
        deleteQuestion,
    };
};
