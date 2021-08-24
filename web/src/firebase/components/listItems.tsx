import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import { MeetingRoom, Settings } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export const MainListItems = () => {
    const history = useHistory();
    return (
        <>
            <ListItem
                button
                onClick={() => {
                    history.push("/");
                }}
            >
                <ListItemIcon>
                    <MeetingRoom />
                </ListItemIcon>
                <ListItemText primary="Salas" />
            </ListItem>

            <ListItem
                button
                onClick={() => {
                    history.push("/usuarios");
                }}
            >
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Usuarios" />
            </ListItem>

            <ListItem
                button
                onClick={() => {
                    history.push("/ajustes");
                }}
            >
                <ListItemIcon>
                    <Settings />
                </ListItemIcon>
                <ListItemText primary="Ajustes" />
            </ListItem>
        </>
    );
};
