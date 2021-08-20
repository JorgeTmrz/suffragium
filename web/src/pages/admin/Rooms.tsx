import React from "react";
import { Grid, Divider, Typography } from "@material-ui/core";
import { RightActionButton } from "../../components/RightActionButton";
import { CurrentRoomCard } from "./components/roomsPage/CurrentRoomCard";
import { mockRooms } from "./helpers/mockRooms";
import { EndedRoomCard } from "./components/roomsPage/EndedRoomCard";
import { RoomsPageStyles } from "./helpers/RoomsPageStyles";

export const Rooms = () => {
    const classes = RoomsPageStyles();

    return (
        <>
            <Grid container>
                <RightActionButton buttonText="Nueva Sala" onClick={() => {}} />
                <CurrentRoomCard />
            </Grid>
            <Divider className={classes.divider} />
            <Typography className={classes.endedRoomsTitle} variant="h6">Reuniones ya finalizadas</Typography>
            <Grid container spacing={2}>
                {mockRooms.map(({ date, topic, participants }) => (
                    <EndedRoomCard
                        topic={topic}
                        date={date}
                        participants={participants}
                    />
                ))}
            </Grid>
        </>
    );
};
