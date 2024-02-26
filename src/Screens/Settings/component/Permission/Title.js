import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Title = ({ value }) => {

    return (
        <Box minWidth={220}>
            <Typography sx={{ fontSize: "20px", color: "#fff" }}>
                {value}
            </Typography>
        </Box>
    );
}

export default Title;