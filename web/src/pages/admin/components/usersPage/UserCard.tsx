import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    Grid,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
    Typography,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import React, { useState } from "react";
import { useRef } from "react";

type UserCardProps = {
    name?: string;
    period?: string;
    job?: string;
};

export const UserCard = ({
    name = "test",
    job = "Regidor SPM",
    period = "2020-2024",
}: UserCardProps) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const anchorEl = useRef(null);

    const handleMenuOpen = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    const userCardStyles = makeStyles((theme) => ({
        avatarIcon: {
            width: "30px",
            height: "30px",
            color: theme.palette.grey[100],
            backgroundColor: theme.palette.secondary.main,
        },
    }));

    const classes = userCardStyles();

    return (
        <Grid xs={12} sm={3} item>
            <Card variant="elevation">
                <Menu
                    open={isOpenMenu}
                    anchorEl={anchorEl.current}
                    onClose={handleMenuOpen}
                >
                    <MenuItem>Editar</MenuItem>
                    <MenuItem color="secondary">Eliminar</MenuItem>
                </Menu>
                <CardHeader
                    action={
                        <>
                            <IconButton ref={anchorEl} onClick={handleMenuOpen}>
                                <MoreVert />
                            </IconButton>
                        </>
                    }
                    avatar={
                        <Avatar className={classes.avatarIcon}>
                            {name.toUpperCase()[0]}
                        </Avatar>
                    }
                ></CardHeader>
                <CardContent>
                    <Box>
                        <Typography variant="h4">{name}</Typography>
                        <Typography variant="caption">{`${job} | ${period}`}</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};
