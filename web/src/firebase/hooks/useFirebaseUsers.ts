import { userInitialState } from "../../pages/admin/helpers/userInitialState";
import "firebase/auth";
import "firebase/firestore";
import { useContext, useCallback } from 'react';
import { FirebaseContext } from "../components/FirebaseProvider";

type userType = typeof userInitialState;

export const useFirebaseUsers = () => {
    const firebase = useContext(FirebaseContext);

    const createUser = useCallback(async (user: userType) => {
        const { password, confirmPassword, ...cleanUser } = user;

        const newUser = await firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, password);
        firebase
            .firestore()
            .collection("Users")
            .doc(newUser.user?.uid)
            .set(cleanUser);
    }, [firebase]);

    const getUsers = useCallback(async () => {
        const snapshot = await firebase.firestore().collection("Users").get();
        return snapshot.docs.map(doc => doc.data()).filter(doc => !doc.isAdmin) as userType[]
    }, [firebase]);

    const getUser = useCallback(async (uid: string) => {
        const snapshot = await firebase.firestore().collection(`$Users/${uid}`).get();
        return snapshot.docs.map(doc => doc.data());
    }, [firebase]);

    const editUser = useCallback(async (uid: string, user: userType) => {
        const { password, confirmPassword, ...cleanUser } = user;
        return await firebase
            .firestore()
            .collection("Users")
            .doc(uid)
            .set(cleanUser);
    },[firebase]);

    return {
        createUser,
        getUsers,
        getUser,
        editUser,
    };
};
