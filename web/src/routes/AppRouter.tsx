import { Switch } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { ThemeProvider } from "@material-ui/core";
import { useAppTheme } from "../pages/auth/hooks/useAppTheme";
import { LoginPage } from "../pages/auth/LoginPage";
import { useSelector } from "react-redux";
import { rootState } from "../redux";
import BasePage from '../pages/admin/BasePage';
import { useEffect } from 'react';
import { useFirebaseUsers } from '../firebase/hooks/useFirebaseUsers';

export const AppRouter = () => {
    const {checkIfToken} = useFirebaseUsers();
    const user = useSelector<rootState>(
        (state) => state.app.user.uid
    );

    const theme = useAppTheme();
    const isAuth = !!user;

    useEffect(() => {
        checkIfToken()
    }, [checkIfToken])

    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <PublicRoute
                    rest={{}}
                    isAuthenticated={isAuth}
                    Component={LoginPage}
                    exact
                    path="/auth"
                />
                <PrivateRoute
                    rest={{}}
                    isAuthenticated={isAuth}
                    Component={BasePage}
                    path="/"
                />
            </Switch>
        </ThemeProvider>
    );
};
