import React from "react";
import Paper from '@mui/material/Paper';

import Avatar from '@mui/material/Avatar';


import Rectangle from '../../assets/Rectangle 9.png'

import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';
import { MdOutlineDeleteForever } from "react-icons/md";
import { Box, fontFamily, fontSize } from "@mui/system";

function Cart({ cartimage }) {
    const classes = useStyles();
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (
        <Box display={'flex'} justifyContent={'space-between'} sx={{ width: '100%', padding: '10px 20px' }}>
            <Box display={'flex'}>
                <Box><Avatar className={classes.avtr} aria-label="recipe" variant="rounded">
                    <img style={{ width: "100%" }} src={Rectangle} />

                </Avatar></Box>
                <Box className={classes.title} display={'flex'} flexDirection={'column'} color={"#ffff"}>
                    <Box>Author</Box>
                    <Box>Mountain Landscape</Box>
                </Box>
            </Box>
            <Box>
                <Box>
                    <Box className={classes.chip} label="$ 2.02" onDelete={handleDelete} deleteIcon={<MdOutlineDeleteForever style={{ color: "red", fontSize: 40, }} />} />
                </Box>
            </Box>

        </Box>








    );
}
const useStyles = makeStyles({
    carts: {
        backgroundColor: "rgb(29,29,2,0.9)",
        width: 1000,
        display: "flex",
        height: 100,
        alignItems: 'center',
        justifyContent: "space-between",
        color: "red"

    },
    avtr: {
        width: "100%",
        height: "100%"

    },
    chip: {
        fontSize: 20,
    },
    title: {
        paddingTop: 7,
        paddingLeft: 15,
        fontSize: 20,
        fontFamily: "popins",
    }
});

export default Cart;