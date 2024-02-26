import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { useStyles } from '../../constant/customStyle'

const CustomRecentlyPurchasedCard = ({author, description, image}) => {
    const classes = useStyles()
    return (
        <Box display={'flex'} justifyContent={'flex-start'} sx={{ width: '100%', marginBottom: 1, marginTop: 1 }}>
            <Box sx={{ marginRight: 3.5 }}>
                <img src={image} alt={author} />
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'flex-start'} flexDirection={'column'}>
                <Typography className={classes.titleAuthor}>{author}</Typography>
                <Typography className={classes.description}>{description}</Typography>
            </Box>
        </Box>
    )
}

export default CustomRecentlyPurchasedCard
