import { Action, createReducer, on } from '@ngrx/store';
import * as appActions from '../actions/app.actions';

export interface AppState {
  isLoading: boolean;
  data: any;
  error: any;
}

const initialState: AppState = {
  isLoading: false,
  data: null,
  error: null,
};

export const appReducer = createReducer(
    initialState,
    on(appActions.testHttp, (state) => {
      return { ...state, loading: true };
    }),
  
    on(appActions.testHttpSuccess, (state, { data }) => {
      return { ...state, data: data, loading: false };
    }),
  
    on(appActions.testHttpError, (state, { error }) => {
      return { ...state, error: error, loading: false };
    }),
  
  );
