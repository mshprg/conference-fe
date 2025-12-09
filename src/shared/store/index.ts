import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (initialState?: Partial<RootState>) =>
	configureStore({
		reducer: rootReducer,
		preloadedState: initialState as RootState,
	});

export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];

export {ReduxProvider} from "./ReduxProvider"
export {useActions} from "./hooks"