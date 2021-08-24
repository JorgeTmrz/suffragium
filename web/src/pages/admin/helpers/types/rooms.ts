export type NewRoomModalProps = {
    show: boolean;
    handleClose: () => void;
};

export type roomQuestion = {
    question: string;
    duration: "2" | "5" | "10";
};

export const roomQuestionInitialState: roomQuestion = {
    duration: "2",
    question: "",
};

export type currentRoom = {
    endDate: number | null;
    beginDate: number | null;
    title: string;
    ended: boolean;
    questions: roomQuestion[];
};

export const roomInitialState = {
    beginDate: null,
    endDate: null,
    title: "",
    ended: false,
    questions: [],
}