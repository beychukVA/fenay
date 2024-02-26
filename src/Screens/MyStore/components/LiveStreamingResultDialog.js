import React from "react";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import { useStyles } from "../../../constant/customStyle";
import CloseXIcon from "../../../assets/CloseXIcon.svg";

export const LiveStreamingResultDialog = ({
  liveStreamingResult,
  showLiveStreamingResult,
  setShowLiveStreamingResult,
}) => {
  const classes = useStyles();
  const {
    img,
    stream_title,
    streamer,
    views,
    peak_concurrents,
    total_watch_time,
    chat_rate,
    avg_view_duration,
    duration,
  } = liveStreamingResult;

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      open={showLiveStreamingResult}
      maxWidth={"lg"}
      onClose={() => setShowLiveStreamingResult(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      PaperProps={{
        style: {
          width: "645px",
          borderRadius: "8px",
          background: "rgba(24, 26, 32, 0.7)",
          backdropFilter: "blur(25px)",
          border: "1px solid rgba(255, 255, 255, 0.31)",
        },
      }}
    >
      <DialogContent
        sx={{
          position: "relative",
          padding: "22px 30px 30px 30px !important",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "33px",
            right: "32px",
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
          onClick={() => setShowLiveStreamingResult(false)}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
              fontSize: "32px",
              lineHeight: "28px",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            Finished!
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              height: "100%",
              maxWidth: "380px",
            }}
          >
            {/** Img */}
            <Box sx={{ position: "relative", zIndex: 0, marginBottom: "10px" }}>
              <img
                src={img}
                alt="Live streaming"
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  height: "100%",
                  maxHeight: "225px",
                  minHeight: "225px",
                  zIndex: "1",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: "20px",
                  bottom: "13px",
                  zIndex: "2",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "29px",
                    color: "#fff",
                    marginBottom: "4px",
                  }}
                >
                  {stream_title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  {streamer}
                </Typography>
              </Box>
            </Box>
            {/** Stats */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
                height: "fit-content",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "15px",
              }}
            >
              {/** Views, Peak */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "100%",
                  marginBottom: "24px",
                }}
              >
                {/** Views */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "28px",
                      color: "#fff",
                      marginBottom: "4px",
                    }}
                  >
                    {views}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "28px",
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    Views
                  </Typography>
                </Box>
                {/** Peak */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "28px",
                      color: "#fff",
                      marginBottom: "4px",
                    }}
                  >
                    {peak_concurrents}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "28px",
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    Peak concurrents
                  </Typography>
                </Box>
              </Box>
              {/** Total watch, Chat rate */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "100%",
                  marginBottom: "24px",
                }}
              >
                {/** Total watch */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "28px",
                      color: "#fff",
                      marginBottom: "4px",
                    }}
                  >
                    {total_watch_time}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "28px",
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    Total watch time
                  </Typography>
                </Box>
                {/** Chat rate */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "28px",
                      color: "#fff",
                      marginBottom: "4px",
                    }}
                  >
                    {chat_rate}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "28px",
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    Chat rate
                  </Typography>
                </Box>
              </Box>
              {/** Avg. view, Duration */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                {/** Avg. view */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "28px",
                      color: "#fff",
                      marginBottom: "4px",
                    }}
                  >
                    {avg_view_duration}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "28px",
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    Avg. view duration
                  </Typography>
                </Box>
                {/** Duration */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "28px",
                      color: "#fff",
                      marginBottom: "4px",
                    }}
                  >
                    {duration}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "28px",
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    Duration
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/** Done */}
            <Button
              onClick={() => setShowLiveStreamingResult(false)}
              sx={{
                background: "#FF8200",
                borderRadius: "40px",
                padding: "19px",
                width: "100%",
                height: "58px",
                marginBottom: "5px",
                "&:hover": {
                  background: "rgba(255, 130, 0, 0.8)",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "17px",
                  lineHeight: "20px",
                  color: "#000",
                  textTransform: "none",
                }}
              >
                Done
              </Typography>
            </Button>
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "19px",
                color: "rgba(255, 255, 255, 0.6)",
                width: "100%",
                textAlign: "center",
              }}
            >
              Your stream will be saved as recorded video.
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
