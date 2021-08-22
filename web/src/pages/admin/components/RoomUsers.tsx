import { Typography } from "@material-ui/core";
import React from "react";
import { roomPageStyles } from "../helpers/styles/RoomPageStyles";
import { UsersTable } from "./roomsPage/UsersTable";

export const RoomUsers = () => {
    const classes = roomPageStyles();

    return (
        <>
            <Typography className={classes.textSubtitle} variant="body1">
                Usuarios de la sala
            </Typography>
            <UsersTable/>
        </>
    );
};
