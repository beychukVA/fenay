import React from 'react'
import { Button, Box, Divider, Typography, Grid } from '@mui/material'
import CustomBiddingCard from '../component/BiddingCard'
import { useStyles } from '../constant/customStyle'
import imageAuthor from '../assets/author.png'


const TabComponentBidding = ({ modalState }) => {
    const classes = useStyles()
    const onClose = () => {
        modalState(false)
    }
    return (
        <Grid container spacing={2} sx={{ marginTop: 1 }}>
            {Array.from({ length: 4 }).map((item, index) => (
                <Grid item xs={12} md={12} key={index}>
                    <CustomBiddingCard author={'Author'} image={imageAuthor} description={'Mountain Landscape'} />
                </Grid>
            ))}
            <Grid container spacing={2} sx={{ marginTop: 5 }}>
                <Grid item xs={4} md={4}>
                    <Button variant="contained" size="large" className={classes.checkButton}>Check</Button>
                </Grid>
                <Grid item xs={4} md={4}>
                    <Button variant="text" className={classes.closeButton} onClick={onClose}>Close</Button>
                </Grid>
            </Grid>
            {/* <Box sx={{ marginBottom: 5, marginTop: 5 }}>
                <Button variant="contained" size="large" className={classes.checkButton}>Check</Button>
                <Button variant="text" className={classes.closeButton} sx={{ marginLeft: 5 }} onClick={onClose}>Close</Button>
            </Box> */}
        </Grid>
    )
}

export default TabComponentBidding