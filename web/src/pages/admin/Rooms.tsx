import React, { useState } from "react";
import { Grid, Divider, Typography } from "@material-ui/core";
import { RightActionButton } from "../../components/RightActionButton";
import { CurrentRoomCard } from "./components/roomsPage/CurrentRoomCard";
import { EndedRoomCard } from "./components/roomsPage/EndedRoomCard";
import { RoomsPageStyles } from "./helpers/styles/RoomsPageStyles";
import { NewRoomModal } from "./components/roomsPage/NewRoomModal";
import { useFirebaseRooms } from "../../firebase/hooks/useFirebaseRooms";
import { useEffect } from "react";
import { roomType } from "./helpers/types/rooms";

type activeAndEnded = {
    ended: roomType[];
    active: roomType[];
};

export const Rooms = () => {
    const classes = RoomsPageStyles();
    const { getRooms } = useFirebaseRooms();
    const [showModal, setShowModal] = useState(false);
    const [rooms, setRooms] = useState<activeAndEnded>({
        active: [],
        ended: [],
    });

    const handleModalClose = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        // eslint-disable-next-line no-empty-pattern
        getRooms().then(setRooms as () => unknown);
    }, [getRooms]);

    return (
        <>
            <Grid
                container
                spacing={4}
                alignContent="center"
                justifyContent="center"
            >
                <RightActionButton
                    buttonText="Nueva Sala"
                    onClick={handleModalClose}
                />
                {rooms.active.map(({ title, id, beginDate, endDate }) => (
                    <CurrentRoomCard
                        title={title}
                        roomId={id ?? ""}
                        date={new Date(
                            beginDate ?? endDate ?? ""
                        ).toLocaleDateString()}
                    />
                ))}
            </Grid>
            <Divider className={classes.divider} />
            <Typography className={classes.endedRoomsTitle} variant="h6">
                Reuniones ya finalizadas
            </Typography>
            <Grid container spacing={2}>
                {rooms.ended.map(({ title, beginDate, participants }) => {
                    return (
                        <EndedRoomCard
                            topic={title}
                            date={beginDate ?? ""}
                            participants={participants}
                        />
                    );
                })}
            </Grid>
            <NewRoomModal handleClose={handleModalClose} show={showModal} />
        </>
    );
};
