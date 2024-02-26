import React from 'react';
import { Button, Box, Grid } from '@mui/material';
import CustomRecentlyPurchasedCard from '../component/RecentlyPurchasedCard';
import { useStyles } from '../constant/customStyle';
import imageAuthor from '../assets/author.png';

const TabComponentRecently = ({ modalState }) => {
    const classes = useStyles();
    const onClose = () => {
        modalState(false);
    }
    return (
        <>
            <Grid container spacing={2} sx={{ marginTop: 1 }}>
                {Array.from({ length: 4 }).map((item, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <CustomRecentlyPurchasedCard author={'Author asdasd'} description={'Mountain Landscape'} image={imageAuthor}/>
                    </Grid>
                ))}
                <Box sx={{ marginBottom: 5, marginTop: 5 }}>
                    <Button variant="text" className={classes.recentlyButton} onClick={onClose}>Close</Button>
                </Box>
            </Grid>
        </>
    )
}

export default TabComponentRecently;