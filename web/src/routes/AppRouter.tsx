import React from "react";
import { Router, Switch, useHistory } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { AuthRoutes } from "./AuthRoutes";
import { PrivateRoute } from "./PrivateRoute";
import Dashboard from "../pages/admin/Dashboard";

export const AppRouter = () => {
    const history = useHistory();

    return (
        <Router history={history}>
            <Switch>
                <PublicRoute
                    isAuthenticated={true}
                    Component={AuthRoutes}
                    exact
                    path="auth"
                />
                <PrivateRoute
                    isAuthenticated={true}
                    Component={Dashboard}
                    exact
                    path="/"
                />
            </Switch>
        </Router>
    );
};
