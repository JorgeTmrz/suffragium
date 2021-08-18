import { Grid, Typography, Avatar as AvatarIcon } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { SettingsPageStyles } from "../../helpers/SettingsPageStyles";

type AvatarPros = {
    name?: string;
};

export const Avatar = ({ name = "Admin Name" }: AvatarPros) => {
    const classes = SettingsPageStyles();
    return (
        <Grid container className={classes.avatarGrid}>
            <AvatarIcon className={classes.avatar}>
                <AccountCircle className={classes.icon}></AccountCircle>
            </AvatarIcon>
            <Typography variant="h4">{name}</Typography>
        </Grid>
    );
};
