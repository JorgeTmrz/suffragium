import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Add } from "@material-ui/icons";

type rightActionButtonProps = {
    onClick: () => void;
    buttonText: string;
};

export const RightActionButton = ({
    onClick,
    buttonText,
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
            <Button onClick={onClick} variant="contained" color="primary">
                <Add />
                {`${buttonText}`}
            </Button>
        </Grid>
    );
};
