import type {IMessagePopupState} from '../types';
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState: IMessagePopupState = {
	title: '',
	description: '',
	visibility: false,
}

const messageSlice = createSlice({
	name: 'message_popup',
	initialState,
	reducers: {
		openMessagePopup: (
			state,
			action: PayloadAction<Pick<IMessagePopupState, 'title' | 'description'>>
		) => {
			state.visibility = true;
			state.title = action.payload.title;
			state.description = action.payload.description;
		},
		closeMessagePopup: () => initialState
	}
});

export const messageSliceActions = messageSlice.actions;
export default messageSlice.reducer;