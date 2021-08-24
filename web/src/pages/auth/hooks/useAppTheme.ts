import { createTheme } from '@material-ui/core';
import { PaletteType } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useMemo, useEffect, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { appDispatch, rootState } from '../../../redux/index';
export const useAppTheme = () => {
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

    return theme;
}