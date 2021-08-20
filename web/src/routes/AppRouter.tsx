import React from "react";
import { Switch } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { AuthRoutes } from "./AuthRoutes";
import { PrivateRoute } from "./PrivateRoute";
import Dashboard from "../pages/admin/BasePage";

export const AppRouter = () => {
    return (
        <Switch>
            <PublicRoute
                rest={{}}
                isAuthenticated={true}
                Component={AuthRoutes}
                exact
                path="auth"
            />
            <PrivateRoute
                rest={{}}
                isAuthenticated={true}
                Component={Dashboard}
                path="/"
            />
        </Switch>
    );
};
