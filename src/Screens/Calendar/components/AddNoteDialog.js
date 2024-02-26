import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import CloseXIcon from "../../../assets/CloseXIcon.svg";
import { useStyles } from "../../../constant/customStyle";

export const AddNoteDialog = ({
  handleAddNote,
  isAddNoteDialogOpen,
  setAddNoteDialogOpen,
}) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    title: "",
    desc: "",
  });

  const canSubmit = !values?.title || !values?.desc;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleCloseDialog = () => {
    handleAddNote({ title: values?.title, desc: values?.desc });
    setValues({ title: "", desc: "" });
    setAddNoteDialogOpen(false);
  };
  return (
    <Dialog
      classes={{ paper: classes.paper }}
      open={isAddNoteDialogOpen}
      maxWidth={"lg"}
      onClose={() => setAddNoteDialogOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      PaperProps={{
        style: {
          width: "438px",
          height: "379px",
          borderRadius: "8px",
          background: "rgba(24, 26, 32, 0.44)",
          backdropFilter: "blur(50px)",
          border: "1px solid rgba(255, 255, 255, 0.31)",
        },
      }}
    >
      <DialogContent
        sx={{
          position: "relative",
          padding: "24px 36px 28px 24px !important",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "25px",
            right: "24px",
            width: "32px",
            height: "32px",
            transition: "all 250ms ease",
            WebkitMask: `url(${CloseXIcon}) center center / 32px 32px no-repeat`,
            mask: `url(${CloseXIcon}) center center / 32px 32px no-repeat`,
            cursor: "pointer",
            "&:not(:hover)": {
              background: "rgba(255, 255, 255, 1)",
            },
            "&:hover": {
              background: "rgba(255, 255, 255, 0.6)",
            },
          }}
          onClick={() => setAddNoteDialogOpen(false)}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "140%",
              letterSpacing: "0.2px",
              color: "#fff",
              marginBottom: "30px",
            }}
          >
            Create a new note
          </Typography>
          <FormControl
            sx={{
              marginBottom: "48px",
              width: "100%",
            }}
            variant="outlined"
          >
            <TextField
              id="outlined-note-title-input"
              label="Title"
              type="text"
              variant="outlined"
              onChange={handleChange("title")}
              sx={{
                "& label.MuiFormLabel-filled": {
                  top: "-16px !important",
                  left: "-16px !important",
                  fontFamily: "Work Sans !important",
                  fontStyle: "normal !important",
                  fontWeight: "500 !important",
                  fontSize: "16px !important",
                  lineHeight: "140% !important",
                  letterSpacing: "0.2px !important",
                  color: "#D5D4D8 !important",
                },
                "& label.Mui-focused": {
                  color: "#FF8200",
                  top: "-16px !important",
                  left: "-16px !important",
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "140%",
                  letterSpacing: "0.2px",
                },
                "& input": {
                  padding: "0",
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "140%",
                  letterSpacing: "0.2px",
                  color: "#9E9E9E",
                },
                "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                  {
                    marginLeft: "0",
                  },
                padding: "15px 20px",
                border: "1px solid #515151",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.2)",
              }}
            />
          </FormControl>
          <FormControl
            sx={{
              marginBottom: "22px",
              width: "100%",
            }}
            variant="outlined"
          >
            <TextField
              id="outlined-note-desc-input"
              label="Description"
              type="text"
              variant="outlined"
              multiline={true}
              maxRows={2}
              onChange={handleChange("desc")}
              sx={{
                "& label.MuiFormLabel-filled": {
                  top: "-16px !important",
                  left: "-16px !important",
                  fontFamily: "Work Sans !important",
                  fontStyle: "normal !important",
                  fontWeight: "500 !important",
                  fontSize: "16px !important",
                  lineHeight: "140% !important",
                  letterSpacing: "0.2px !important",
                  color: "#D5D4D8 !important",
                },
                "& label.Mui-focused": {
                  color: "#FF8200",
                  top: "-16px !important",
                  left: "-16px !important",
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "140%",
                  letterSpacing: "0.2px",
                },
                "& div.MuiOutlinedInput-root": {
                  padding: "0",
                },
                "& textarea": {
                  padding: "0",
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "140%",
                  letterSpacing: "0.2px",
                  color: "#9E9E9E",
                },
                "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                  {
                    marginLeft: "0",
                  },
                padding: "20px 20px",
                border: "1px solid #515151",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.2)",
                height: "79px",
              }}
            />
          </FormControl>
          <Button
            disabled={canSubmit}
            onClick={() => handleCloseDialog()}
            sx={{
              background: "#FF8200",
              borderRadius: "40px",
              padding: "8px 24px",
              transition: "all 250ms ease",
              alignSelf: "center",
              "&:hover": {
                background: "rgba(255, 130, 0, 0.8)",
              },
              "&:disabled": {
                background: "rgba(255, 255, 255, 0.5)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#000",
                textTransform: "none",
              }}
            >
              Add
            </Typography>
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
