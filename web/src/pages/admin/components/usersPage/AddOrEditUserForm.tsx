import React, { ChangeEventHandler } from "react";
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { userInitialState } from "../../helpers/userInitialState";
import { AddOrEditUserModalStyles } from "../../helpers/UsersPageStyles";

type AddOrEditUserFormProps = {
    handleChange: ChangeEventHandler<HTMLInputElement>
    currentUser: typeof userInitialState
}

export const AddOrEditUserForm = ({handleChange, currentUser}: AddOrEditUserFormProps) => {
    const classes = AddOrEditUserModalStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    onChange={handleChange}
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
                    onChange={handleChange}
                    value={currentUser.lastName}
                    required
                    id="lastName"
                    name="lastName"
                    label="Apellidos"
                    fullWidth
                    autoComplete="family-name"
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    onChange={handleChange}
                    value={currentUser.email}
                    required
                    id="email"
                    name="email"
                    label="Correo Electrónico"
                    fullWidth
                    autoComplete="family-name"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    onChange={handleChange}
                    value={currentUser.password}
                    required
                    type="password"
                    id="password"
                    name="password"
                    label="Contraseña"
                    fullWidth
                    autoComplete="family-name"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    onChange={handleChange}
                    value={currentUser.confirmPassword}
                    required
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirmar Contraseña"
                    fullWidth
                    autoComplete="family-name"
                />
            </Grid>
            <Grid item sm={7} xs={12}>
                <TextField
                    onChange={handleChange}
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
                    onChange={handleChange}
                    value={currentUser.period}
                    id="period"
                    defaultValue={new Date().getFullYear()}
                    type={"number"}
                    name="period"
                    label="Periodo"
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <span className={classes.adormentSpan}>{`Hasta ${
                                JSON.parse(
                                    currentUser.period as unknown as string
                                ) + 4
                            }`}</span>
                        ),
                    }}
                />
            </Grid>
        </Grid>
    );
};
