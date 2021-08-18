import {
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Switch,
} from "@material-ui/core";
import {
    PowerSettingsNew,
    QuestionAnswerTwoTone,
    SettingsRounded,
    WbSunnySharp,
} from "@material-ui/icons";
import React from "react";
import { SettingsPageStyles } from "../../helpers/SettingsPageStyles";

export const SettingPageOptions = () => {
    const classes = SettingsPageStyles();
    return (
        <Grid>
            <List component={"nav"} className={classes.buttonList}>
                <ListItem button>
                    <ListItemIcon>
                        <SettingsRounded />
                    </ListItemIcon>
                    <ListItemText className={`${classes.optionText}`}>
                        Ajustes De la cuenta
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <WbSunnySharp />
                    </ListItemIcon>
                    <ListItemText className={`${classes.optionText}`}>
                        Cambiar tema
                    </ListItemText>
                    <Switch name="changeTheme" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <QuestionAnswerTwoTone />
                    </ListItemIcon>
                    <ListItemText className={`${classes.optionText}`}>
                        Contactar desarrolladores
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon className={classes.logOut}>
                        <PowerSettingsNew />
                    </ListItemIcon>
                    <ListItemText
                        className={`${classes.logOut} ${classes.optionText}`}
                    >
                        Cerrar Sesión
                    </ListItemText>
                </ListItem>
            </List>
        </Grid>
    );
};
