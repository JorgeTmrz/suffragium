import { userInitialState } from "../../pages/admin/helpers/userInitialState";
import "firebase/auth";
import "firebase/firestore";
import { useContext } from "react";
import { FirebaseContext } from "../components/FirebaseProvider";

type userType = typeof userInitialState;

export const useFirebaseUsers = () => {
    const firebase = useContext(FirebaseContext);

    const createUser = async (user: userType) => {
        const { password, confirmPassword, ...cleanUser } = user;

        const newUser = await firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, password);
        firebase
            .firestore()
            .collection("Users")
            .doc(newUser.user?.uid)
            .set(cleanUser);
    };

    const getUsers = async () => {
        return (await firebase
            .firestore()
            .collection("Users")
            .where("isAdmin", "!=", true)
            .get()) as unknown as userType[];
    };

    const getUser = async (uid: string) => {
        return (await firebase
            .firestore()
            .collection(`$Users/${uid}`)
            .get()) as unknown as userType;
    };

    const editUser = async (uid: string, user: userType) => {
        const { password, confirmPassword, ...cleanUser } = user;
        return await firebase
            .firestore()
            .collection("Users")
            .doc(uid)
            .set(cleanUser);
    };

    return {
        createUser,
        getUsers,
        getUser,
        editUser,
    };
};
