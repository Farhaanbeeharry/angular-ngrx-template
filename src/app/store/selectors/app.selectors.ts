import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from '../reducers/app.reducers';

export const selectApp = createFeatureSelector<AppState>('app');

export const selectTestHttp = createSelector(
    selectApp,
    (state: AppState) => state.data
);