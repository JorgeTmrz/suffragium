import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { RouteParams } from "./types/routeParams";

export const PublicRoute = ({
    Component,
    isAuthenticated,
    rest,
}: RouteParams) => {
    return (
        <Route
            {...rest}
            component={(props: Object) =>
                isAuthenticated ? <Redirect to="/"/> : <Component />
            }
        />
    );
};
