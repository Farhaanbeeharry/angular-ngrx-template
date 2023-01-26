import { Action, createReducer, on } from "@ngrx/store";
import * as appActions from '../actions/app.actions';

export interface AppState {
    name: string;
}

export const initialAppState: AppState = {
    name: ''
}

const reducer = createReducer(
    initialAppState,
    on(appActions.SayHello, (state, { name }) => {
        console.log('should', name, state);
        return {
            ...state,
            name: name.toUpperCase()
        };
    })
);

export const appReducer = (state: AppState | undefined, action: Action) => {
    return reducer(state, action);
}