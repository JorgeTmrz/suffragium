import { userInitialState } from "../../pages/admin/helpers/userInitialState";
import "firebase/auth";
import "firebase/firestore";
import { useContext, useCallback } from "react";
import { FirebaseContext } from "../components/FirebaseProvider";
import { LoginUser } from "../../pages/auth/helpers/LoginTypes";
import { useDispatch } from "react-redux";

type userType = typeof userInitialState;

export const useFirebaseUsers = () => {
    const firebase = useContext(FirebaseContext);
    const usersRef = firebase.firestore().collection("Users");
    const dispatch = useDispatch();

    const createUser = useCallback(
        async (user: userType) => {
            const { password, confirmPassword, ...cleanUser } = user;

            const newUser = await firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, password);

            usersRef
                .doc(newUser.user?.uid)
                .set({ ...cleanUser, id: newUser.user?.uid });
        },
        [firebase, usersRef]
    );

    const getUsers = useCallback(async () => {
        const snapshot = await usersRef.get();
        return snapshot.docs
            .map((doc) => doc.data())
            .filter((doc) => !doc.isAdmin) as userType[];
    }, [usersRef]);

    const getUser = useCallback(
        (uid: string) => {
            const snapshot = usersRef.doc(uid).get();
            return snapshot.then((value) => ({ ...value.data(), uid } as any));
        },
        [usersRef]
    );

    const editUser = useCallback(
        async (uid: string, user: userType) => {
            const { password, confirmPassword, ...cleanUser } = user;
            return await usersRef.doc(uid).set(cleanUser);
        },
        [usersRef]
    );

    const loginAdminUser = (user: LoginUser, onErrorCallback: Function) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then((user) => {
                getUser(user.user?.uid ?? "").then((value) => {
                    if (value?.isAdmin) {
                        localStorage.setItem("user", JSON.stringify(value));
                        dispatch({
                            type: "SET_USER",
                            payload: value,
                        });
                    } else {
                        firebase.auth().signOut();
                        onErrorCallback(
                            "Este usuario existe, pero no es administrador"
                        );
                    }
                });
            })
            .catch((reason) => {
                onErrorCallback(
                    "Ocurrio un error, revise los datos ingresados"
                );
            });
    };

    const checkIfToken = useCallback(() => {
        const user = JSON.parse(localStorage.getItem("user") ?? "{}");
        if (user) {
            dispatch({
                type: "SET_USER",
                payload: { uid: user?.uid, email: user?.email },
            });
        }
    }, [dispatch]);

    return {
        checkIfToken,
        loginAdminUser,
        createUser,
        getUsers,
        getUser,
        editUser,
    };
};
