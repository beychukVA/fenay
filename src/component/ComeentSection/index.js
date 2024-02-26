import * as React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useStyles } from "../../constant/customStyle";
import Profile from "../../assets/profile.png";
import { HiLink } from "react-icons/hi";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { borderColor, borderRadius } from "@mui/system";
import { OutlinedFlag } from "@mui/icons-material";

function CustomCommentSection() {
  const classes = useStyles();
  return (
    <Box
      sx={{ background: "#707070", borderRadius: "15px", borderRadius: "15px" }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
    >
      <Box sx={{ padding: "44.4px 33px 19px" }}>
        <Box display={"flex"} sx={{ marginBottom: "14px" }}>
          <Box sx={{ marginRight: "10px" }}>
            <img
              src={Profile}
              alt=""
              style={{ width: "49px", height: "49px" }}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "14px",
                fontWeight: 500,
                color: "#fff",
              }}
            >
              Black Glass
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "10px",
                fontWeight: 500,
                color: "#fff",
              }}
            >
              2 hours ago
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            paddingBottom: "14px",
            borderBottom: "1px solid #fff",
            marginBottom: "14px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "10px",
              fontWeight: 400,
              color: "#fff",
              lineHeight: "20px",
              textAlign: "justify",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: "24px" }} display={"flex"}>
          <Box sx={{ marginRight: 2, marginTop: "5px" }}>
            <HiLink style={{ color: "#FF1C51", fontSize: "21px" }} />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "14px",
                fontWeight: 500,
                color: "#fff",
              }}
            >
              Kendrick Lamar - money tree.mp3
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "10px",
                fontWeight: 500,
                color: "rgb(255 255 255 / 50%)",
              }}
            >
              2.80 mb
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: "100%", marginBottom: "24px" }}>
          <Button
            variant="contained"
            fullWidth={true}
            className={classes.commentButton}
          >
            view 3 more comments
          </Button>
        </Box>

        {Array.from({ length: 4 }).map((item, index) => (
          <Box
            display={"flex"}
            sx={{
              marginBottom: "14px",
              paddingBottom: "24px",
              borderBottom: index < 3 ? "1px solid #fff" : "0px solid #fff",
            }}
            key={index}
          >
            <Box sx={{ marginRight: "10px" }}>
              <img
                src={Profile}
                alt=""
                style={{ width: "49px", height: "49px" }}
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Box display={"flex"}>
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#fff",
                    marginRight: "10px",
                  }}
                >
                  Alexey Rybin
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "10px",
                    fontWeight: 500,
                    color: "rgb(255 255 255 / 50%)",
                    marginTop: "3px",
                  }}
                >
                  5:54 pm
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "10px",
                  fontWeight: 500,
                  color: "#fff",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#484848",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
        <Box sx={{ padding: "44.4px 33px 19px" }}>
          <Box display={"flex"} sx={{ marginBottom: "14px" }}>
            <Box sx={{ marginRight: "10px" }}>
              <img
                src={Profile}
                alt=""
                style={{ width: "49px", height: "49px" }}
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              {/* <TextField
                                placeholder="MultiLine with rows: 2 and rowsMax: 4"
                                multiline
                                rows={2}
                                maxRows={4}
                                className={classes.TfieldComent}
                            /> */}

              <textarea
                style={{
                  backgroundColor: "#A4A4A4",
                  color: "#fff",
                  border: "none",
                  outline: "none",
                  resize: "none",
                  borderRadius: "10px",
                  padding: "5px 10px 5px 5px",
                }}
                id="story"
                name="story"
                rows="5"
                cols="31"
              ></textarea>
            </Box>
          </Box>
          <Box sx={{ width: "100%", marginBottom: "24px" }}>
            <Button
              variant="contained"
              fullWidth={true}
              className={classes.postCommentButton}
            >
              Post A Comment
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CustomCommentSection;
