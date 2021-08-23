import React from "react";
import { Redirect, Route } from "react-router-dom";
import { RouteParams } from "./types/routeParams";

export const PrivateRoute = ({
    Component,
    isAuthenticated,
    rest,
}: RouteParams) => {
    return (
        <Route
            {...rest}
            component={(props: Object) =>
                isAuthenticated ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to="/auth" />
                )
            }
        />
    );
};
