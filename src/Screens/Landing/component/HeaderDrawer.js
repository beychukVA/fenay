import {
    Box, Drawer, List,
    ListItem,
    ListItemText, Typography
} from "@mui/material";
import React from "react";
import { useStyles } from "../../../constant/customStyle";
function HeaderDrawer({ open, handleClose, links }) {
    const classes = useStyles();

    const list = () => (
        <Box
            sx={{ width: 170 }}
            role="presentation"
        >
            <List>
                {links.map((link, index) => (
                    <ListItem key={index} button onClick={link.onClick}>
                        <ListItemText
                            primary={
                                <Typography
                                    sx={{
                                        display: "inline",
                                        fontSize: "1em",
                                        color: "#fff",
                                        textTransform: "capitalize",
                                        fontFamily: "poppins",
                                    }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {link.label}
                                </Typography>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer
            anchor={"right"}
            open={open}
            classes={{ paper: classes.drawerPaper }}
            onClose={handleClose}
        >
            {list()}
        </Drawer>
    );
}

export default HeaderDrawer;