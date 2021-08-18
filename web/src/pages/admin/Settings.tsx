import { SettingsPageStyles } from "./helpers/SettingsPageStyles";
import { Avatar } from "./components/SettingsPage/Avatar";
import { SettingPageOptions } from "./components/SettingsPage/SettingPageOptions";
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
