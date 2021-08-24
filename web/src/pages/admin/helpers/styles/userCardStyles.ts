import { makeStyles } from "@material-ui/core";

export const userCardStyles = makeStyles((theme) => ({
    avatarIcon: {
        width: "30px",
        height: "30px",
        color: theme.palette.grey[100],
        backgroundColor: theme.palette.secondary.main,
    },
}));