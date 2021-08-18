import React from "react";
import { Redirect, Route } from "react-router";
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
                isAuthenticated ? <Redirect to="/" /> : <Component {...props}/>
            }
        />
    );
};
