import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { WatchSharp } from "@material-ui/icons";
import React from "react";

export const CurrentRoomCard = () => {
    const RootPageStyles = makeStyles({
        card: {
            width: "30%",
            minWidth: "250px"
        },
        buttonGrid: {
            display: "flex",
            marginTop: "10px",
            marginBottom: "10px",
        },
    });

    const classes = RootPageStyles();

    return (
        <Grid container alignItems="center" justifyContent="center">
            <Card className={classes.card} variant="elevation">
                <CardHeader
                    avatar={
                        <Avatar>
                            <WatchSharp color="secondary" />
                        </Avatar>
                    }
                    title={<Typography variant="h6">Reunión Actual</Typography>}
                    subheader={new Date().toLocaleDateString()}
                />
                <CardContent>
                    <Grid>Pregunta Actual 1 / 10</Grid>
                    <Grid className={classes.buttonGrid} alignContent="center">
                        <Button fullWidth variant="contained" color="primary">
                            Entrar a la reunión
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};
