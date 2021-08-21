import { makeStyles } from '@material-ui/core';
export const roomPageStyles = makeStyles((theme) => ({
    buttonContainer: {
        display: "flex",
    },
    button: {
        borderRadius: "50px",
    },
    textSubtitle: {
        marginTop: "15px",
    },
    questionListItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
}));