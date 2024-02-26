import styled from "@emotion/styled";
import { InputBase } from "@mui/material";

export const MarketingInput = styled(InputBase)(({ theme }) => ({
  borderBottom: "1px solid #ced4da",
  borderRadius: 0,

  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    color: "black",
    fontSize: 16,
    margin: "0 !important",
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 11,
    },
    padding: "26px 0px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
    "&:-webkit-autofill": {
      boxShadow: "none",
    },
  },
  ".MuiInputAdornment-root": {
    ".MuiButtonBase-root": {
      color: "#000",

      svg: {
        color: "#000",
      },
    },
  },
}));
