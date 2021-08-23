import { Container, Grid } from "@material-ui/core";
import { useState, useEffect } from 'react';
import { RightActionButton } from "../../components/RightActionButton";
import { AddOrEditUserModal } from "./components/usersPage/AddOrEditUserModal";
import { UserCard } from "./components/usersPage/UserCard";
import { useFirebaseUsers } from '../../firebase/hooks/useFirebaseUsers';
import { userInitialState } from './helpers/userInitialState';

export const Users = () => {
    const {createUser, getUsers} = useFirebaseUsers();
    const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState<typeof userInitialState[]>([]);

    const handleModalClose = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        if(!users.length){
            getUsers().then((values) => {
                setUsers(values);
            })
        }
    }, [getUsers, users.length])

    return (
        <Container>
            <RightActionButton
                buttonText="Nuevo Usuario"
                onClick={handleModalClose}
            />
            <Grid container spacing={2}>
                {users.map((user) => (
                    <UserCard
                        name={`${user.firstName} ${user.lastName}`}
                        job={user.job}
                        period={user.period.toString()}
                    />
                ))}
            </Grid>
            <AddOrEditUserModal
                show={showModal}
                handleClose={handleModalClose}
                submissionCallback = {createUser}
            />
        </Container>
    );
};
