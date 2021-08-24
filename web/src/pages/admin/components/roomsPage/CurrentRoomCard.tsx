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
import { useHistory } from "react-router-dom";

type CurrentRoomType = {
    title: string;
    date: string;
    roomId: string;
};

export const CurrentRoomCard = ({ date, roomId, title }: CurrentRoomType) => {
    const history = useHistory();
    const RootPageStyles = makeStyles({
        card: {
            width: "30%",
            minWidth: "250px",
        },
        buttonGrid: {
            display: "flex",
            marginTop: "10px",
            marginBottom: "10px",
        },
    });
    const classes = RootPageStyles();

    const handleRoomJoining = (roomId: string) => {
        history.push(`sala/${roomId}`);
    };

    return (
        <Grid item alignItems="center" justifyContent="center">
            <Card className={classes.card} variant="elevation">
                <CardHeader
                    avatar={
                        <Avatar>
                            <WatchSharp color="secondary" />
                        </Avatar>
                    }
                    title={<Typography variant="h6">{title}</Typography>}
                    subheader={new Date(date).toLocaleDateString()}
                />
                <CardContent>
                    <Grid className={classes.buttonGrid} alignContent="center">
                        <Button
                            onClick={() => {
                                handleRoomJoining(roomId);
                            }}
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Entrar a la reunión
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};
