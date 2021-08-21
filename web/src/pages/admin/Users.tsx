import { Container, Grid } from "@material-ui/core";
import { useState } from "react";
import { RightActionButton } from "../../components/RightActionButton";
import { AddOrEditUserModal } from "./components/usersPage/AddOrEditUserModal";
import { mockUsers } from "./helpers/mockUsers";
import { UserCard } from "./components/usersPage/UserCard";

export const Users = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(!showModal);
    };

    return (
        <Container>
            <RightActionButton
                buttonText="Nuevo Usuario"
                onClick={handleModalClose}
            />
            <Grid container spacing={2}>
                {mockUsers.map((user) => (
                    <UserCard
                        name={user.name}
                        job={user.job}
                        period={user.period}
                    />
                ))}
            </Grid>
            <AddOrEditUserModal
                show={showModal}
                handleClose={handleModalClose}
            />
        </Container>
    );
};
