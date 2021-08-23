import React, { MouseEventHandler } from 'react'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Copyright } from '../../../components/Copyright';
import { LoginPageStyles } from '../helpers/LoginPageStyles';
import { LoginUser } from '../helpers/LoginTypes';

type LoginFormType = {
    currentUser: LoginUser,
    onSubmitCallback: MouseEventHandler<HTMLAnchorElement>
    onChangeCallback: ({
        target: { value, name },
    }: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
    }>) => void
}

export const LoginForm = ({currentUser, onSubmitCallback, onChangeCallback}: LoginFormType) => {
  const classes = LoginPageStyles();

    return (
        <form className={classes.form} noValidate>
        <TextField
          value={currentUser.email}
          onChange = {onChangeCallback}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Usuario"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          value={currentUser.password}
          onChange = {onChangeCallback}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Recuerdame"
        />
        <Button
          type="submit"
          fullWidth
          href="#"
          variant="contained"
          color="primary"
          onClick={onSubmitCallback}
          className={classes.submit}
        >
          Iniciar Sesión
        </Button>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    )
}
