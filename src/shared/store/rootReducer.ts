import messageSlice from "./slices/messageSlice.ts";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
	message: messageSlice,
})