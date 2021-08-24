import { makeStyles } from "@material-ui/core";

export const SettingsPageStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "70vh",
    },
    avatarGrid: {
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        marginBottom: "20px",
        backgroundColor: theme.palette.primary.light,
        height: "200px",
        width: "200px",
        boxShadow: "2px 4px 5px 2px #0000004c",
    },
    icon: {
        height: "180px",
        width: "180px",
    },
    buttonList: {
        backgroundColor: theme.palette.background.paper,
        width: "300px",
    },
    optionText: {},
    logOut: {
        color: theme.palette.secondary.main,
    },
}));