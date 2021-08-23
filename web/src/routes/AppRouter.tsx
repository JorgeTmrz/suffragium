import { Switch } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import Dashboard from "../pages/admin/BasePage";
import { ThemeProvider } from "@material-ui/core";
import { useAppTheme } from "../pages/auth/hooks/useAppTheme";
import { useContext } from 'react';
import { FirebaseContext } from '../firebase/components/FirebaseProvider';
import { LoginPage } from '../pages/auth/LoginPage';

export const AppRouter = () => {
    const theme = useAppTheme();
    const firebase = useContext(FirebaseContext);
    const isAuth = !!firebase.auth().currentUser

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
                    Component={Dashboard}
                    path="/"
                />
            </Switch>
        </ThemeProvider>
    );
};
