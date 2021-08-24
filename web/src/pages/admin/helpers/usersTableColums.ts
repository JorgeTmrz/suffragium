import { GridColDef } from "@material-ui/data-grid";

export const usersTableColums: GridColDef[] = [
    { field: "firstName", width: 150, headerName: "Nombre" },
    { field: "lastName", width: 150, headerName: "Apellido" },
    {
        field: "email",
        width: 150, headerName: "Email",
    },
];