import React from "react";
import { useParams } from "react-router";
import Grid from "@material-ui/core/Grid";
import { RightActionButton } from "../../components/RightActionButton";
import { Flag } from "@material-ui/icons";
import { QuestionsChart } from "./components/roomPage/QuestionsChart";
import { List, Typography } from "@material-ui/core";
import { RoomQuestion } from "./components/roomPage/RoomQuestion";
import { useRoom } from "./hooks/useRoom";

export const Room = () => {
    const { id } = useParams<{ id: string }>();
    const {
        currentQuestion,
        handleQuestionEnd,
        questions,
        room,
        answers,
        endRoom,
    } = useRoom(id);

    return (
        <Grid container alignContent="center" spacing={4}>
            <RightActionButton
                buttonText="Terminar sesión"
                onClick={endRoom}
                color="secondary"
                icon={Flag}
            />
            <Grid>
                <Typography variant="h5">
                    {room?.title.toUpperCase()}
                </Typography>
                <Typography variant="caption">{currentQuestion}</Typography>
            </Grid>
            <Grid
                container
                justifyContent="center"
                direction="column"
                alignItems="center"
                alignContent="space-between"
            >
                <QuestionsChart answers={answers} />
                <List style={{ width: "100%" }}>
                    {questions.map((question) => (
                        <RoomQuestion
                            isEnded={question.isEnded}
                            title={question.question}
                            onClickCallback={handleQuestionEnd}
                        />
                    ))}
                </List>
            </Grid>
        </Grid>
    );
};
