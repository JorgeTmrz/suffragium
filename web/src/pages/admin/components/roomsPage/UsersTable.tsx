import { DataGrid, GridSelectionModel } from "@material-ui/data-grid";
import React from "react";
import { mockUsers, usersTableColums } from "../../helpers/usersTableColums";
import { Grid } from "@material-ui/core";

type UsersTableParams = {
    onCheckboxClick?: (
        selectionModel: GridSelectionModel,
        details?: any
    ) => void;
};

export const UsersTable = ({
    onCheckboxClick = (selectionModel: GridSelectionModel, details?: any) => {},
}: UsersTableParams) => {
    return (
        <Grid container style={{height: "300px", width: '100%'}}>
            <DataGrid
                rows={mockUsers}
                columns={usersTableColums}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
                // onSelectionModelChange={onCheckboxClick}
            />
        </Grid>
    );
};
