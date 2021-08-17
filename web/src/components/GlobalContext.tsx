import React, { useReducer } from 'react'
import { createContext } from 'react'
import { AppReducer } from '../helpers/reducers/appReducer';
import { appReducerInitialState } from '../helpers/reducers/appReducerInitialState';

type ContextProviderType = {
    children: JSX.Element
}

export const GlobalContext = createContext(appReducerInitialState);

export const GlobalProvider = ({children}: ContextProviderType) => {
    const [state, dispatch] = useReducer(AppReducer, appReducerInitialState);

    return (
        <GlobalContext.Provider value = {{...state, ...dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}