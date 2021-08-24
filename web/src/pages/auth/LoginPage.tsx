import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { HowToVote } from "@material-ui/icons";
import { LoginPageStyles } from "./helpers/LoginPageStyles";
import { useState } from 'react';
import { LoginUser } from "./helpers/LoginTypes";
import { LoginForm } from "./components/LoginForm";
import { validInputType, validSubmitType } from "../../helpers/validInputType";
import Alert from "@material-ui/lab/Alert";
import { useFirebaseUsers } from '../../firebase/hooks/useFirebaseUsers';

export const LoginPage = () => {
    const {loginAdminUser} = useFirebaseUsers();
    const classes = LoginPageStyles();
    const [errorMessage, setErrorMessage] = useState("");
    const [loginState, setLoginState] = useState<LoginUser>({
        email: "",
        password: "",
    });

    const handleChange = ({
        target: { name, value },
    }: validInputType): void => {
        setLoginState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLoginSubmission = (params: validSubmitType) => {
        if (loginState.email && loginState.password) {
            loginAdminUser(loginState, setErrorMessage as Function)
        } else setErrorMessage("Asegurese de llenar todos los campos");
    };

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <HowToVote />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Iniciar Sesión
                    </Typography>
                    {errorMessage && (
                        <Alert
                            variant="outlined"
                            severity="error"
                            style={{ width: "100%", marginTop: "10px" }}
                        >
                            {errorMessage}
                        </Alert>
                    )}
                    <LoginForm
                        onSubmitCallback={
                            handleLoginSubmission as unknown as ({
                                ...validSubmitType
                            }) => void
                        }
                        onChangeCallback={
                            handleChange as unknown as ({
                                ...validInputType
                            }) => void
                        }
                        currentUser={loginState}
                    />
                </div>
            </Grid>
        </Grid>
    );
};
