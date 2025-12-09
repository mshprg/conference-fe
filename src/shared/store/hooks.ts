import type {AppDispatch} from "./index";
import {useDispatch} from "react-redux";
import {type AllActions, createActions} from "./actions";

export const useActions = (): AllActions => {
	const dispatch = useDispatch<AppDispatch>();
	return createActions(dispatch);
}