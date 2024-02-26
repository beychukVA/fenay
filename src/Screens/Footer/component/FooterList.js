import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const FooterList = ({ title, items }) => {
    return (
        <Box sx={(theme) => ({
            width: 'fit-content',
            margin: 'auto',
            [theme.breakpoints.md]: {
                margin: 'unset',
            },
            [theme.breakpoints.down('md')]: {
                margin: 'unset',
            },
        })}>
            <Typography sx={{
                fontWeight: "bold",
                fontSize: 18,
                textTransform: "uppercase",
                borderBottom: "1px solid #FF1C51",
                display: "inline",
                paddingBottom: 0.5
            }} >{title}</Typography>
            <List dense>
                {items.map((item, index) => (
                    <ListItem onClick={() => item.onClick && item.onClick()} sx={{ paddingLeft: 0 }}>
                        {item?.icon &&
                            <ListItemIcon>
                                {item?.icon}
                            </ListItemIcon>
                        }
                        <ListItemText style={{ cursor: "pointer" }}
                            primaryTypographyProps={{ fontSize: 14 }}
                            primary={item.label}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default FooterList;