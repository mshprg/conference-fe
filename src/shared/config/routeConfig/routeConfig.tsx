import type {RouteProps} from "react-router-dom";
import {Conference} from "../../../pages/Conference";

export enum AppRoutes {
	CONFERENCE = 'conference',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.CONFERENCE]: '/conference',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.CONFERENCE]: {
		path: RoutePath[AppRoutes.CONFERENCE],
		element: <Conference />
	}
}