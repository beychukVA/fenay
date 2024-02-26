import { withStyles } from "@mui/styles";
import { TextField } from "@mui/material";

export const CustomInputField = withStyles({
  root: {
    background: "transparent",
    color: "#fff !important",
    fontSize: 10,
    "& .MuiInput-icon": {
      color: "#fff",
    },
    // boxShadow:'5px 10px #17171A',
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiFormLabel-root-MuiInputLabel-root": {
      color: "#fff",
    },
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
    },
    "& .MuiInputAdornment-root": {
      color: "#fff",
    },
    "& .MuiInputBase-root-MuiOutlinedInput-root": {
      color: "#fff",
      fontSize: 10,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "2px solid #414040 !important",
        borderRadius: 30,
      },
      "&:hover fieldset": {
        borderColor: "#414040",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#414040",
      },
      "&.MuiOutlinedInput-root fieldset": {
        background: "rgb(0 0 0 / 23%)",
      },
    },
  },
})(TextField);
