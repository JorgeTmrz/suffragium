import React, { useMemo } from "react";
import { Switch } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { AuthRoutes } from "./AuthRoutes";
import { PrivateRoute } from "./PrivateRoute";
import Dashboard from "../pages/admin/BasePage";
import {
    createTheme,
    PaletteType,
    ThemeProvider,
    useMediaQuery,
} from "@material-ui/core";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { rootState, appDispatch } from "../redux/index";
import { useEffect } from "react";
import { useCallback } from "react";

export const AppRouter = () => {
    const dispatch = useDispatch<appDispatch>();
    const prefersDarkTheme = useMediaQuery("(prefers-color-scheme: dark)");
    const reduxTheme = useSelector<rootState>(
        (state) => state.app.theme,
        shallowEqual
    ) as PaletteType;

    const getTheme = useCallback(() => {
        const choosedTheme = localStorage.getItem("theme");
        if (choosedTheme) {
            return choosedTheme;
        } else {
            const desiredTheme = prefersDarkTheme ? "dark" : "light";
            localStorage.setItem("theme", desiredTheme);
            dispatch({ type: "SET_THEME", payload: desiredTheme });
            return desiredTheme;
        }
    }, [dispatch, prefersDarkTheme]);

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    type: reduxTheme,
                },
            }),
        [reduxTheme]
    );

    useEffect(() => {
        getTheme();
    }, [getTheme]);

    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
};
