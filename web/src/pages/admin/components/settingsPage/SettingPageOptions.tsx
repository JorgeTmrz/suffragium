import {
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Switch,
} from "@material-ui/core";
import {
    NightsStay,
    PowerSettingsNew,
    QuestionAnswerTwoTone,
    SettingsRounded,
    WbSunnySharp,
} from "@material-ui/icons";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { SettingsPageStyles } from "../../helpers/SettingsPageStyles";
import { appDispatch, rootState } from "../../../../redux/index";

export const SettingPageOptions = () => {
    const appTheme = useSelector<rootState>(
        (state) => state.app.theme,
        shallowEqual
    );

    const isDarkTheme = appTheme === "dark";

    const dispatch = useDispatch<appDispatch>();

    const handleThemeChange = () => {
        const desiredTheme = isDarkTheme ? "light" : "dark";
        dispatch({ type: "SET_THEME", payload: desiredTheme });
        localStorage.setItem("theme", desiredTheme);
    };

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
                        {isDarkTheme ? <NightsStay /> : <WbSunnySharp />}
                    </ListItemIcon>
                    <ListItemText className={`${classes.optionText}`}>
                        Cambiar tema
                    </ListItemText>
                    <Switch
                        onChange={handleThemeChange}
                        checked={isDarkTheme}
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
    );
};
