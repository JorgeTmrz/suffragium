import { Button, Grid, makeStyles, SvgIconTypeMap } from "@material-ui/core";
import React from "react";
import { Add } from "@material-ui/icons";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

type rightActionButtonProps = {
    onClick: () => void;
    buttonText: string;
    color?: "primary" | "inherit" | "default" | "secondary" | undefined;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
};

export const RightActionButton = ({
    onClick,
    buttonText,
    icon: Icon = Add,
    color = "primary"
}: rightActionButtonProps) => {
    const ButtonPageStyles = makeStyles((theme) => ({
        divider: {
            marginBottom: "20px",
        },
    }));

    const classes = ButtonPageStyles();

    return (
        <Grid
            className={classes.divider}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
        >
            <Button onClick={onClick} variant="contained" color={color}>
                <Icon />
                {`${buttonText}`}
            </Button>
        </Grid>
    );
};
