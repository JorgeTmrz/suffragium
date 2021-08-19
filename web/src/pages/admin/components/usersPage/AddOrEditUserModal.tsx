import {
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";

type AddOrEditUserModalProps = {
    id?: number;
    show: boolean;
    handleClose: () => void;
};

export const AddOrEditUserModal = ({
    id,
    show = false,
    handleClose,
}: AddOrEditUserModalProps) => {
    const currentAction = id ? "Editar" : "Crear";

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
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <TextField
                            fullWidth
                            name="name"
                            label="Nombre del Regidor"
                        />
                    </Grid>
                    <Grid xs={5}>
                        <TextField
                            fullWidth
                            type={"number"}
                            name="period"
                            label="Periodo de gestión"
                        />
                    </Grid>
                    <Grid xs={5}>
                        <TextField
                            fullWidth
                            type={"number"}
                            name="period"
                            label="Periodo de gestión"
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="primary">
                    {currentAction}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
