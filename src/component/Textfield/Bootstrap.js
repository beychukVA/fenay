import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
        fontSize: '20px',
    },
    '& .MuiInputBase-input': {
        // borderRadius: 4,
        height: "50px",
        color: '#fff',
        position: 'relative',
        backgroundColor: 'transparent',
        borderBottom: '1px solid #ced4da',
        fontSize: '14px !important',
        // width: 'auto',
        padding: '10px 0px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: 'poppins',
        '&:focus': {
            boxShadow: `none`,
            borderColor: 'transparent',
            borderBottom: '1px solid #ced4da',

        },
    },
    nextButton: {
        backgroundColor: '#FF1C51 !important',
        padding: '10px 60px !important',
        borderRadius: '30px !important',
        fontFamily: 'poppins !important',
        textTransform: 'capitalize !important',
        fontSize: '18px !important',
        fontWeight: '500 !important'
    }
}));