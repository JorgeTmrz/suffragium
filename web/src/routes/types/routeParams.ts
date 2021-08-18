import { RouteProps } from "react-router";

export interface RouteParams extends RouteProps {
    isAuthenticated: boolean;
    Component: any;
    rest: any | undefined;
}