import React from "react";
import { Route } from "react-router-dom";
import { RouteParams } from "./types/routeParams";
import { PrivateRoute } from './PrivateRoute';
import { AdminRoutes } from './AdminRoutes';

export const PublicRoute = ({
    Component,
    isAuthenticated,
    rest,
}: RouteParams) => {
    return (
        <Route
            {...rest}
            component={(props: Object) =>
                isAuthenticated ? <PrivateRoute
                    rest={{}}
                    isAuthenticated
                    Component ={AdminRoutes}
                /> : <Component />
            }
        />
    );
};
