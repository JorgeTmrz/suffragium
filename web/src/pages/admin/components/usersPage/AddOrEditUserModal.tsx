import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@material-ui/core";
import React, { ChangeEvent } from "react";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { userInitialState } from "../../helpers/userInitialState";
import { AddOrEditUserForm } from "./AddOrEditUserForm";
import { userValidationSchema } from "../../helpers/usersInitialState";

type AddOrEditUserModalProps = {
    id?: number;
    show: boolean;
    submissionCallback: Function;
    handleClose: () => void;
};

export const AddOrEditUserModal = ({
    id,
    show = false,
    handleClose,
    submissionCallback = () => {},
}: AddOrEditUserModalProps) => {
    const currentAction = id ? "Editar" : "Crear";
    const [currentUser, setCurrentUser] = useState(userInitialState);

    const handleInputChange = ({
        target: { value, name },
    }: ChangeEvent<HTMLInputElement>) => {
        setCurrentUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmission = () => {
        userValidationSchema
            .validate(currentUser)
            .then(async (values) => {
                setCurrentUser(userInitialState);
                handleClose();
                await submissionCallback(values);
            })
            .catch((reason) => console.log(reason));
    };

    return (
        <Dialog
            fullWidth={true}
            maxWidth={"sm"}
            open={show}
            onClose={handleClose}
        >
            <DialogTitle>
                <Typography variant="h5">{`${currentAction} Usuario`}</Typography>
            </DialogTitle>
            <DialogContent>
                <AddOrEditUserForm
                    currentUser={currentUser}
                    handleChange={handleInputChange}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleSubmission}
                    variant="contained"
                    color="primary"
                >
                    {currentAction}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
