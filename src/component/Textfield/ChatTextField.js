import { withStyles } from '@mui/styles'
import { TextField } from '@mui/material'

export const ChatTextField = withStyles({
    root: {
        background: 'rgba(255,255,255,0.12)',
        color: '#fff !important',
        fontSize: '16px',
        borderRadius: '12px',
        "& .MuiInput-icon": {
            color: "#fff"
        },
        // boxShadow:'5px 10px #17171A',
        '& .MuiInputLabel-root': {
            color: '#fff',
        },
        '& .MuiFormLabel-root-MuiInputLabel-root': {
            color: '#fff',
        },
        '& label.Mui-focused': {
            color: '#fff',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#fff',
        },
        '& .MuiInputAdornment-root': {
            color: '#fff',
        },
        '& .MuiInputBase-root-MuiOutlinedInput-root': {
            color: '#fff',
            fontSize: 10,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '2px solid #FF1C51 !important',
                borderRadius: '12px'
            },
            '&:hover fieldset': {
                borderColor: '#414040',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#414040',
            },
            '&.MuiOutlinedInput-root fieldset': {
                background: 'rgb(0 0 0 / 23%)',
            }
        },
    },
})(TextField)