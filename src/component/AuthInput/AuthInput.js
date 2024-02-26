import styled from '@emotion/styled';
import { InputBase } from '@mui/material';

export const AuthInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        color: "#fff",
        borderBottom: '1px solid #fff',
        fontSize: 16,
        [theme.breakpoints.down("md")]: {
            fontSize: 13,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 11,
        },
        padding: "26px 0px",
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        '&:focus': {
            borderColor: theme.palette.primary.main,
        },
    },
}));
