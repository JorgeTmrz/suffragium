export type NewRoomModalProps = {
    show: boolean;
    handleClose: () => void;
};

export type roomQuestion = {
    question: string;
    duration: "2" | "5" | "10";
    isEnded: boolean;
};

export const roomQuestionInitialState: roomQuestion = {
    duration: "2",
    question: "",
    isEnded: false,
};

export type currentRoom = {
    endDate: typeof Date | null;
    beginDate: typeof Date | null;
    title: string;
    ended: boolean;
    questions: roomQuestion[];
};

export type roomType = {
    id?: string;
    beginDate: null;
    endDate: null;
    title: string;
    isEnded: boolean;
    questions: roomQuestion[];
    participants?: Object;
};

export const roomInitialState: roomType = {
    beginDate: null,
    endDate: null,
    title: "",
    isEnded: false,
    questions: [],
};
