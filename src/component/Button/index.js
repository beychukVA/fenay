import { withStyles } from '@mui/styles'
import { Button } from '@mui/material'

export const CssButton = withStyles({
    root: {
        color: '#fff',
        backgroundColor: 'green !importannt',
        textTransform: 'capitalize',
        fontFamily: 'Poppins',
        borderRadius: 20,
        '&:hover': {
            backgroundColor: '#2a1ab9',
        },
    },
})(Button);

export const ColorButton = withStyles({
    root: {
        color: 'green',
        backgroundColor: 'yellow',
        '&:hover': {
            backgroundColor: 'blue',
        },
    },
})(Button);