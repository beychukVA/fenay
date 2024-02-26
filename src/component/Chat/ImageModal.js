import React, { useState } from "react";
import { useStyles } from "../../constant/customStyle";
import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  IconButton,
  Typography,
  Dialog,
  DialogContent,
} from "@mui/material";

// eslint-disable-next-line no-unused-vars
const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

export default function PostModal({
  ImageModalStatus,
  setImageModalStatus,
  imageUrl,
}) {
  // eslint-disable-next-line no-unused-vars
  const [CreatePostDesctiption, setCreatePostDesctiption] = useState("");
  const classes = useStyles();

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      open={ImageModalStatus}
      onClose={() => {
        setImageModalStatus(false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      PaperProps={{
        style: {
          borderRadius: "24px",
          backgroundColor: "#434343",
          maxWidth: 950,
        },
      }}
    >
      <DialogContent
        sx={{ padding: 0, borderRadius: "24px", border: "3px solid #434343" }}
      >
        <Box
          sx={{
            padding: "31px 36px",
            color: "white",
            fontFamily: "Poppins",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ height: "450px", width: "400px" }}>
            <Box
              display={"flex"}
              sx={{
                borderBottom: "2px solid #FF1C51",
                paddingBottom: "5.5px",
                width: "100%",
                marginBottom: "13px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                Image
              </Typography>
            </Box>
            <Box sx={{ margin: "45px 255px" }}>
              <div
                style={{
                  width: "370px",
                  height: "370px",
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              ></div>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <IconButton
        onClick={() => {
          setImageModalStatus(false);
          // setCreatePostDesctiption("")
          // setCreatePostImage("")
        }}
        className={classes.customizedButton}
      >
        <CloseIcon fontSize={"large"} />
      </IconButton>
    </Dialog>
  );
}
