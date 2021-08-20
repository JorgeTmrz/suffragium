import React from "react";
import { Route, Switch } from "react-router-dom";
import { Rooms } from "../pages/admin/Rooms";
import { Settings } from "../pages/admin/Settings";
import { Users } from "../pages/admin/Users";

export const AdminRoutes = () => {
    return (
        <Switch>
            <Route exact path="/ajustes" component={Settings} />
            <Route exact path="/usuarios" component={Users} />
            <Route path="/" component={Rooms} />
        </Switch>
    );
};
