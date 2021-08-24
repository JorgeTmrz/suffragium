import { DataGrid, GridSelectionModel } from "@material-ui/data-grid";
import React from "react";
import { usersTableColums } from "../../helpers/usersTableColums";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useFirebaseUsers } from "../../../../firebase/hooks/useFirebaseUsers";
import { userInitialState } from "../../helpers/userInitialState";

type UsersTableParams = {
    onCheckboxClick?: (
        selectionModel: GridSelectionModel,
        details?: any
    ) => void;
};

export const UsersTable = ({
    onCheckboxClick = (selectionModel: GridSelectionModel, details?: any) => {},
}: UsersTableParams) => {
    const { getUsers } = useFirebaseUsers();
    const [users, setUsers] = useState<typeof userInitialState[]>([]);

    const handleUsersChange = (newUsers: string[]) => {
        const selectedUsers = users.reduce((prevValue, currentValue) => {
            if (newUsers.includes(currentValue.id)) {
                prevValue[currentValue.id as keyof {}] = {
                    name: `${currentValue.firstName} ${currentValue.lastName}`,
                    job: currentValue.job,
                    period: currentValue.period,
                };
            }
            return prevValue;
        }, {} as any);
        onCheckboxClick(selectedUsers);
    };

    useEffect(() => {
        getUsers().then((values) => {
            setUsers(values);
        });
    }, [getUsers]);

    return (
        <Grid container style={{ height: "300px", width: "100%" }}>
            <DataGrid
                rows={users}
                columns={usersTableColums}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
                onSelectionModelChange={(newModel) => {
                    handleUsersChange(newModel as string[]);
                }}
            />
        </Grid>
    );
};
