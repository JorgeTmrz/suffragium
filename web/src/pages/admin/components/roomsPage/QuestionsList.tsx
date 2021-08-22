import React from "react";
import { currentRoom } from "../../helpers/types/rooms";
import { Divider } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { DeleteTwoTone } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";
import { roomPageStyles } from "../../helpers/styles/RoomPageStyles";
import List from "@material-ui/core/List";

type QuestionsListTypes = {
    currentRoom: currentRoom;
    deleteQuestion: Function;
};

export const QuestionsList = ({
    currentRoom,
    deleteQuestion,
}: QuestionsListTypes) => {
    const classes = roomPageStyles();

    return currentRoom.questions.length ? (
        <>
            <Typography className={classes.textSubtitle} variant="body1">
                Preguntas
            </Typography>
            <List>
                {currentRoom.questions.map(({ question, duration }, index) => (
                    <>
                        <Divider />
                        <ListItem
                            className={classes.questionListItem}
                            key={question + index}
                        >
                            <span>
                                <Typography variant="subtitle1">
                                    {question}
                                </Typography>
                                &nbsp;
                                <Typography variant="caption">
                                    {`${duration} Min.`}
                                </Typography>
                            </span>
                            <IconButton
                                onClick={() => {
                                    deleteQuestion(index);
                                }}
                            >
                                <DeleteTwoTone color="error" />
                            </IconButton>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </>
    ) : (
        <Alert
            className={classes.textSubtitle}
            variant="outlined"
            severity="info"
        >
            Todavia no hay preguntas en esta reunion
        </Alert>
    );
};
