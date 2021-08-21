import React, { useState } from "react";
import { Grid, Divider, Typography } from "@material-ui/core";
import { RightActionButton } from "../../components/RightActionButton";
import { CurrentRoomCard } from "./components/roomsPage/CurrentRoomCard";
import { mockRooms } from "./helpers/mockRooms";
import { EndedRoomCard } from "./components/roomsPage/EndedRoomCard";
import { RoomsPageStyles } from "./helpers/RoomsPageStyles";
import { NewRoomModal } from './components/roomsPage/NewRoomModal';

export const Rooms = () => {
    const classes = RoomsPageStyles();

    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <Grid container>
                <RightActionButton buttonText="Nueva Sala" onClick={handleModalClose} />
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
            <NewRoomModal
                handleClose={handleModalClose}
                show={showModal}
            />
        </>
    );
};
