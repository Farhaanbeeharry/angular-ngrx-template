import { createAction, props } from "@ngrx/store";

export const test = createAction('[App] TEST');

export const testHttp = createAction('[App] TEST HTTP');

export const testHttpSuccess = createAction('[App] TEST HTTP SUCCESS', props<{data: any}>());

export const testHttpError = createAction('[App] TEST HTTP ERROR', props<{error: any}>());