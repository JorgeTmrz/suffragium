import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@material-ui/core";
// @ts-ignore
import Alert from "@material-ui/lab/Alert";
import { NewRoomModalProps } from "../../helpers/types/rooms";
import { RoomsModalForm } from "./RoomsModalForm";
import { QuestionsList } from "./QuestionsList";
import { useRooms } from "../../hooks/useRooms";
import { roomPageStyles } from "../../helpers/styles/RoomPageStyles";
import { UsersTable } from "./UsersTable";

export const NewRoomModal = ({ handleClose, show }: NewRoomModalProps) => {
    const classes = roomPageStyles();
    const {
        deleteQuestion,
        currentQuestion,
        currentRoom,
        errorMessage,
        handleCurrentQuestionChange,
        handleCurrentRoomChange,
        pushQuestion,
        setParticipants,
        handleQuestionSubmission,
    } = useRooms();

    return (
        <Dialog fullWidth maxWidth={"sm"} open={show} onClose={handleClose}>
            <DialogTitle>
                <Typography variant="h5">Nueva Sesión</Typography>
            </DialogTitle>
            <DialogContent>
                {errorMessage && (
                    <Alert variant="outlined" severity="error">
                        {errorMessage}
                    </Alert>
                )}
                <RoomsModalForm
                    currentQuestion={currentQuestion}
                    currentRoom={currentRoom}
                    handleCurrentQuestionChange={handleCurrentQuestionChange}
                    handleCurrentRoomChange={handleCurrentRoomChange}
                    pushQuestion={pushQuestion}
                />
                <QuestionsList
                    currentRoom={currentRoom}
                    deleteQuestion={deleteQuestion}
                />
                <Typography className={classes.textSubtitle} variant="body1">
                    Usuarios de la sala
                </Typography>
                <UsersTable onCheckboxClick={setParticipants as any} />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => {
                        handleQuestionSubmission(handleClose);
                    }}
                    variant="contained"
                    color="primary"
                >
                    Comenzar Reunión
                </Button>
            </DialogActions>
        </Dialog>
    );
};
