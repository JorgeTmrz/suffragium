import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { NewRoomModalProps } from "../../helpers/types/rooms";
import { RoomsModalForm } from "./RoomsModalForm";
import { QuestionsList } from "./QuestionsList";
import { useRooms } from "../../hooks/useRooms";

export const NewRoomModal = ({ handleClose, show }: NewRoomModalProps) => {
    const {
        deleteQuestion,
        currentQuestion,
        currentRoom,
        errorMessage,
        handleCurrentQuestionChange,
        handleCurrentRoomChange,
        pushQuestion,
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
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {}} variant="contained" color="primary">
                    Comenzar Reunión
                </Button>
            </DialogActions>
        </Dialog>
    );
};
