import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, InputLabel, MenuItem, Select } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { roomPageStyles } from "../../helpers/styles/RoomPageStyles";
import { currentRoom, roomQuestion } from "../../helpers/types/rooms";

type RoomsModalFormTypes = {
    handleCurrentRoomChange: ({
        target: { value, name },
    }: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
    }>) => void;
    handleCurrentQuestionChange: ({
        target: { value, name },
    }: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
    }>) => void;
    pushQuestion: () => void;
    currentRoom: currentRoom;
    currentQuestion: roomQuestion;
};

export const RoomsModalForm = ({
    handleCurrentRoomChange = () => {},
    handleCurrentQuestionChange = () => {},
    pushQuestion,
    currentRoom,
    currentQuestion,
}: RoomsModalFormTypes) => {
    const classes = roomPageStyles();
    const questionDuration = ["2", "5", "10"];

    return (
        <Grid container spacing={3}>
            <Grid item sm={8}>
                <TextField
                    onChange={handleCurrentRoomChange}
                    value={currentRoom.title}
                    required
                    id="title"
                    name="title"
                    label="Titulo de la agenda"
                    fullWidth
                />
            </Grid>
            <Grid item sm={4}>
                <TextField
                    onChange={handleCurrentRoomChange}
                    value={currentRoom.endDate}
                    type="time"
                    required
                    id="endDate"
                    name="endDate"
                    label="Hora de finalización"
                    fullWidth
                />
            </Grid>
            <Grid item sm={7}>
                <TextField
                    onChange={handleCurrentQuestionChange}
                    value={currentQuestion.question}
                    required
                    id="question"
                    name="question"
                    label="Pregunta"
                    fullWidth
                />
            </Grid>
            <Grid item sm={3}>
                <InputLabel>Duracion</InputLabel>
                <Select
                    onChange={handleCurrentQuestionChange}
                    value={currentQuestion.duration}
                    required
                    id="duration"
                    name="duration"
                    label="Duration"
                    fullWidth
                >
                    {questionDuration.map((duration) => (
                        <MenuItem value={duration}>{duration}</MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid className={classes.buttonContainer} item sm={2}>
                <Button
                    onClick={pushQuestion}
                    className={classes.button}
                    title="Añadir Pregunta"
                    variant="contained"
                    color="primary"
                >
                    <Add />
                </Button>
            </Grid>
        </Grid>
    );
};
