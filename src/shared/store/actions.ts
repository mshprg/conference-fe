import {messageSliceActions} from './slices/messageSlice.ts';
import {bindActionCreators} from "redux";
import type {AppDispatch} from "./index.ts";

const allActions = {
	...messageSliceActions,
}

export type AllActions = typeof allActions;

export const createActions = (dispatch: AppDispatch) => {
	return bindActionCreators(allActions, dispatch);
}