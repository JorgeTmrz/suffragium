import {
    Button,
    Container,
    Grid,
    makeStyles,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useState } from "react";
import { AddOrEditUserModal } from "./components/usersPage/AddOrEditUserModal";
import { mockUsers } from "./components/usersPage/mockUsers";
import { UserCard } from "./components/usersPage/UserCard";

export const Users = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(!showModal);
    }

    const UsersPageStyles = makeStyles((theme) => ({
        divider: {
            marginBottom: "20px",
        },
    }));

    const classes = UsersPageStyles();

    return (
        <Container>
            <Grid
                className={classes.divider}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Button 
                onClick = {handleModalClose}
                variant="contained" color="primary">
                    <Add /> Añadir nuevo
                </Button>
            </Grid>
            <Grid container spacing={2}>
                {mockUsers.map((user) => (
                    <UserCard name={user.name} job={user.job} period={user.period} />
                ))}
            </Grid>
        <AddOrEditUserModal show = {showModal} handleClose = {handleModalClose}/>
        </Container>
    );
};
