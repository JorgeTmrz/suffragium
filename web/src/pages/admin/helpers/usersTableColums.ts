import { GridColDef } from "@material-ui/data-grid";

export const usersTableColums: GridColDef[] = [
    { field: "displayName", width: 200, headerName: "Usuario" },
    {
        field: "email",
        width: 200, headerName: "Email",
    },
];

export const mockUsers = [
    { id: "8f2d6179-7921-442e-8799-864e3a923366", displayName: "Vicky Rice", email: "Charity_Beer@gmail.com" },
    { id: "221e725c-c96c-413e-89c3-282b4559c849", displayName: "Dr. Angelica Kozey", email: "Skye47@gmail.com" },
    { id: "63c622e3-9601-4899-8e67-3bfc87c6cd6a", displayName: "Emma Bosco IV", email: "Giovanna.Flatley@gmail.com" },
    { id: "d561245a-87ce-413e-a113-e9964aed1286", displayName: "Gayle Morar", email: "Hildegard_Crist50@yahoo.com" },
    { id: "32cab840-6cd4-40a3-a800-fd011d37d63a", displayName: "Johnathan Barton", email: "Heidi_Mosciski53@hotmail.com" },
    { id: "85d9f263-329b-4a9f-9093-abecb1a87bb3", displayName: "Charlotte Lubowitz", email: "Leila94@hotmail.com" },
];
