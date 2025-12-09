import {makeStore, type RootState} from "./index";
import {Provider} from "react-redux";
import React from "react";

export function ReduxProvider(
	{ children, initialState }: { children: React.ReactNode, initialState?: Partial<RootState> }
) {
	const store = makeStore(initialState);

	return <Provider store={store}>{children}</Provider>;
}