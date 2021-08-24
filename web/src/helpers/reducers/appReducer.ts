import { appReducerInitialState } from './appReducerInitialState';
import { actionType } from './types';

export const AppReducer = (state = appReducerInitialState, action: actionType) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}