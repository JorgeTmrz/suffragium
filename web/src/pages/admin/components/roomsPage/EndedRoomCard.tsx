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
import { CheckSharp, MoreVert } from "@material-ui/icons";
import React, { useState } from "react";
import { useRef } from "react";

type endedRoomProps = {
    topic?: string;
    date?: number;
    participants?: Object;
};

export const EndedRoomCard = ({
    topic = "test",
    participants = Object,
    date = + new Date(),
}: endedRoomProps) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const anchorEl = useRef(null);

    const participantsNumber = Object.keys(participants ?? {}).length;

    const handleMenuOpen = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    const endedRoomStyles = makeStyles((theme) => ({
        avatarIcon: {
            width: "30px",
            height: "30px",
            color: theme.palette.grey[100],
            backgroundColor: theme.palette.success.main,
        },
    }));

    const classes = endedRoomStyles();

    return (
        <Grid xs={12} sm={3} item>
            <Card variant="elevation">
                <Menu
                    open={isOpenMenu}
                    anchorEl={anchorEl.current}
                    onClose={handleMenuOpen}
                >
                    <MenuItem>Detalles</MenuItem>
                </Menu>
                <CardHeader
                    action={
                        <IconButton ref={anchorEl} onClick={handleMenuOpen}>
                            <MoreVert />
                        </IconButton>
                    }
                    avatar={
                        <Avatar className={classes.avatarIcon}>
                            <CheckSharp />
                        </Avatar>
                    }
                    title={new Date(date).toDateString()}
                    subheader={`${participantsNumber} participantes`}
                ></CardHeader>
                <CardContent>
                    <Box>
                        <Typography variant="h4">{topic}</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};
