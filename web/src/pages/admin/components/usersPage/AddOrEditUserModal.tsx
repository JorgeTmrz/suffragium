import {
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from "@material-ui/core";
import React, { ChangeEvent } from "react";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { AddOrEditUserModalStyles } from "../../helpers/UsersPageStyles";

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
    const classes = AddOrEditUserModalStyles();

    const [currentUser, setCurrentUser] = useState({
        firstName: "",
        lastName: "",
        job: "",
        period: new Date().getFullYear()
    })

    const handleInputChange = ({target: {value, name}}: ChangeEvent<HTMLInputElement>) => {
        setCurrentUser((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }


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
            <DialogContent >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleInputChange}
            value={currentUser.firstName}
            required
            id="firstName"    
            name="firstName"
                    label="Nombres"
                    fullWidth
                    autoComplete="given-name"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    onChange={handleInputChange}
                    value={currentUser.lastName}
                    required
                    id="lastName"
                    name="lastName"
                    label="Apellidos"
                    fullWidth
                    autoComplete="family-name"
                />
                </Grid>
                <Grid item sm={7} xs={12}>
                <TextField
                    onChange={handleInputChange}
                    value={currentUser.job}
                    required
                    id="job"
                    name="job"
                    label="Circunscripción"
                    fullWidth
                />
                </Grid>
                <Grid item sm={5} xs={12}>
                <TextField
                    onChange={handleInputChange}
                    value={currentUser.period}
                    id="period"
                    defaultValue={new Date().getFullYear()}
                    type={"number"}
                    name="period"
                    label="Periodo"
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <span className={classes.adormentSpan}>{`Hasta ${JSON.parse(currentUser.period as unknown as string) + 4}`}</span>
                        )
                    }}
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
