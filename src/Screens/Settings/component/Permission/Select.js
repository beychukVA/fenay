import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useStyles } from '../../../../constant/customStyle';

const PermissionSelect = ({ value, onChange, selectItems }) => {
    const classes = useStyles();

    return (
        <FormControl className={[classes.removeMarginTop]}>
            <Select
                inputProps={{ classes: { icon: classes.icon } }}
                size="small"
                value={value}
                onChange={onChange}
                sx={{
                    background: "rgb(251 247 248 / 18%)",
                    border: "0px solid transparent !important",
                    borderRadius: "10px !important",
                    color: "#fff !important",
                    fontSize: "16px !important",
                    fontWeight: "500 !important",
                    padding: "0px 5px !important",
                    width: "136px",
                    "&:hover": {
                        "&& fieldset": {
                            border: "0px solid transparent !important",
                            padding: "0px 5px",
                        },
                    },
                }}
                MenuProps={{ classes: { paper: classes.select } }}
            >
                {selectItems.map((data, index) => {
                    return (
                        <MenuItem value={data.value} key={index++}>
                            {data.name}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
}

export default PermissionSelect;