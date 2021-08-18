import {
    Avatar,
    Container,
    Grid,
    List,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Switch,
    Typography,
} from "@material-ui/core";
import {
    AccountCircle,
    PowerSettingsNew,
    QuestionAnswerTwoTone,
    SettingsRounded,
    WbSunnySharp,
} from "@material-ui/icons";
import React from "react";
import ListItem from "@material-ui/core/ListItem";

const SettingsPageStyles = makeStyles((theme) => ({
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

export const Settings = () => {
    const classes = SettingsPageStyles();
    return (
        <Container className={classes.container}>
            <Grid container className={classes.avatarGrid}>
                <Avatar className={classes.avatar}>
                    <AccountCircle className={classes.icon}></AccountCircle>
                </Avatar>
                <Typography variant="h4">Admin Name</Typography>
            </Grid>
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
                        <Switch
                            name="changeTheme"
                        />
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
        </Container>
    );
};
