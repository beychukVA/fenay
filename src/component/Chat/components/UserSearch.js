import SearchIcon from "@mui/icons-material/Search";
import {
    Box, InputBase
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";



const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "25px",
    backgroundColor: "rgba(255,255,255,0.12)",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginBottom: "10px",
    color: "rgba(255,255,255,0.50)",
    border: "1px solid #fff",
    fontFamily: "poppins !important",
    [theme.breakpoints.up("sm")]: {
        width: "100%",
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        padding: "20px 10px 20px 20px",
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));


const UserSearch = () => {
    return (
        <Box sx={{ padding: "10px 10px" }}>
            <Search sx={{ border: "none"}}>
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <SearchIconWrapper>
                        <SearchIcon sx={{ color: "#FFFFFF , 0.1 " }} />
                    </SearchIconWrapper>
                </Box>
                <StyledInputBase
                    placeholder="Search.."
                    inputProps={{ "aria-label": "search" }}
                    sx={{ paddingLeft: 0, color: "#FFFFFF, 0.5" }}
                />
            </Search>
        </Box>
    );
}

export default UserSearch;