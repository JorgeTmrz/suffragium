import { SettingsPageStyles } from "./helpers/styles/SettingsPageStyles";
import { Avatar } from "./components/settingsPage/Avatar";
import { SettingPageOptions } from "./components/settingsPage/SettingPageOptions";
import { Container } from "@material-ui/core";

export const Settings = () => {
    const classes = SettingsPageStyles();
    return (
        <Container className={classes.container}>
            <Avatar name="Jorge Tamariz" />
            <SettingPageOptions/>
        </Container>
    );
};
