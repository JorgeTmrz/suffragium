import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import { MeetingRoom, Settings } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

export const MainListItems = () => {
    const linkStyles = makeStyles({
        appLink: {
            color: "inherit",
            textDecoration: "inherit",
        },
    });

    const classes = linkStyles();

    return (
        <>
            <NavLink className={classes.appLink} to="/">
                <ListItem button>
                    <ListItemIcon>
                        <MeetingRoom />
                    </ListItemIcon>
                    <ListItemText primary="Salas" />
                </ListItem>
            </NavLink>
            <NavLink className={classes.appLink} to="usuarios">
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Usuarios" />
                </ListItem>
            </NavLink>
            <NavLink className={classes.appLink} to="ajustes">
                <ListItem button>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Ajustes" />
                </ListItem>
            </NavLink>
        </>
    );
};
