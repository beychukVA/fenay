import { withStyles } from '@mui/styles'
import { TextField } from '@mui/material'

export const CustomTextField = withStyles({
    root: {
        background: 'transparent',
        color: '#fff',
        fontSize: 10,
        "& .MuiInput-icon": {
            color: "#ffffff"
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
                borderColor: '#FF1C51',
                borderRadius: 16
            },
            '&:hover fieldset': {
                borderColor: '#FF1C51',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FF1C51',
            },
        },
    },
})(TextField)

export const CustomStandardTextField = withStyles({
    root: {
        background: 'transparent',
        color: '#fff',
        fontSize: 10,
        "& .MuiInput-icon": {
            color: "#ffffff"
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
        '& .MuiInput-underline:hover': {
            borderBottomColor: 'green',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#fff',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#fff',
        },
        '& .MuiInputBase-root-MuiOutlinedInput-root': {
            color: '#fff',
            fontSize: 10,
        },
        // '& .MuiOutlinedInput-root': {
        //     '& fieldset': {
        //         borderColor: '#fff',
        //         borderRadius: 16
        //     },
        //     '&:hover fieldset': {
        //         borderColor: '#fff !important',
        //     },
        //     '&.Mui-focused fieldset': {
        //         borderColor: '#fff',
        //     },
        // },
    },
})(TextField)