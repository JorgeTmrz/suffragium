import { useContext } from "react";
import { currentRoom } from "../../pages/admin/helpers/types/rooms";
import { FirebaseContext } from "../components/FirebaseProvider";
export const useFirebaseRooms = () => {
    const firebase = useContext(FirebaseContext);

    const createRoom = (
        { questions, ...room }: currentRoom,
        participants: Object[]
    ) => {
        firebase
            .firestore()
            .collection("Rooms")
            .add({
                ...room,
                beginDate: new Date().toLocaleString(),
                isEnded: false,
                participants: participants,
            })
            .then((result) => {
                firebase
                    .firestore()
                    .collection("Questions")
                    .add({ questions: questions.map(question => ({...question, isEnded: false})), room: result.id });
            });
    };

    return {
        createRoom,
    };
};
