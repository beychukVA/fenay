import React from 'react';
import { SettingsInput } from '../../../component/Textfield/SettingTextField';
import { useStyles } from '../../../constant/customStyle';

const Input = ({ value, onChange }) => {
    const classes = useStyles();

    return (
        <SettingsInput
            value={value}
            style={{ minWidth: "30%" }}
            onChange={(e) => onChange(e.target.value)}
            size={"medium"}
        />
    );
}

export default Input;