import React from "react";
import { Button, Divider, ListItemSecondaryAction } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

type RoomQuestionType = {
    title: string;
    isEnded: boolean;
    onClickCallback: (title: string) => void;
};

export const RoomQuestion = ({
    isEnded,
    onClickCallback,
    title,
}: RoomQuestionType) => {
    const handleQuestionEnd = () => {
        onClickCallback(title);
    };

    return (
        <>
            <Divider />
            <ListItem>
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                    <Button
                        disabled={isEnded}
                        onClick={handleQuestionEnd}
                        variant="contained"
                        color="secondary"
                    >
                        Terminar
                    </Button>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
        </>
    );
};
