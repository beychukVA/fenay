import { Button, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useStyles } from '../../../constant/customStyle';

const UpdateButton = ({ label, onClick }) => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:768px)');

    return (
        <Box>
            <Button
                onClick={onClick}
                variant="contained"
                className={classes.connect}
                sx={{ width: matches ? "auto !important" : "136px" }}
            >
                {label}
            </Button>
        </Box>
    );
}

export default UpdateButton