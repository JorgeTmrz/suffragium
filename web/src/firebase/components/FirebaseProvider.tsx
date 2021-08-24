import { createContext, ReactElement } from "react";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../firebaseConfig";

type FirebasePoviderProps = { children: ReactElement<any, any> };

export const FirebaseContext = createContext(firebase);

export const FirebaseProvider = ({ children }: FirebasePoviderProps) => {
    
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }

    return <FirebaseContext.Provider value={firebase}>{children}</FirebaseContext.Provider>;
};
