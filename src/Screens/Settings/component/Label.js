import { InputLabel } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useStyles } from '../../../constant/customStyle';

const Label = ({ value }) => {
    const classes = useStyles();

    return (
        <Box minWidth={120}>
            <InputLabel
                className={classes.settingLabel}
            >
                {value}
            </InputLabel>
        </Box>
    );
}

export default Label;