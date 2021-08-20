type appReducerType = {
    theme: "light" | "dark";
    user: {
        name: string;
        uid: string;
    };
}

export const appReducerInitialState: appReducerType = {
    theme: "dark",
    user: {
        name: "",
        uid: "",
    }
};
