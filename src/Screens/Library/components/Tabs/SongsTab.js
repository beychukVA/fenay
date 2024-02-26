import React from "react";
import { Box, Typography } from "@mui/material";
import TrackImgExample from "../../../../assets/TrackImgExample.jpg";
import { TrackCard } from "../TrackCard";

const tracks = [
  {
    id: Math.random(),
    img: TrackImgExample,
    name: "See You Again ft.",
    author: "Wiz Khalifa - Charlie Puth",
    date_added: "Aug 26, 2022",
    duration: "06:23",
  },
  {
    id: Math.random(),
    img: TrackImgExample,
    name: "See You Again ft.",
    author: "Wiz Khalifa - Charlie Puth",
    date_added: "Aug 26, 2022",
    duration: "06:23",
  },
  {
    id: Math.random(),
    img: TrackImgExample,
    name: "See You Again ft.",
    author: "Wiz Khalifa - Charlie Puth",
    date_added: "Aug 26, 2022",
    duration: "06:23",
  },
  {
    id: Math.random(),
    img: TrackImgExample,
    name: "See You Again ft.",
    author: "Wiz Khalifa - Charlie Puth",
    date_added: "Aug 26, 2022",
    duration: "06:23",
  },
  {
    id: Math.random(),
    img: TrackImgExample,
    name: "See You Again ft.",
    author: "Wiz Khalifa - Charlie Puth",
    date_added: "Aug 26, 2022",
    duration: "06:23",
  },
  {
    id: Math.random(),
    img: TrackImgExample,
    name: "See You Again ft.",
    author: "Wiz Khalifa - Charlie Puth",
    date_added: "Aug 26, 2022",
    duration: "06:23",
  },
  {
    id: Math.random(),
    img: TrackImgExample,
    name: "See You Again ft.",
    author: "Wiz Khalifa - Charlie Puth",
    date_added: "Aug 26, 2022",
    duration: "06:23",
  },
  {
    id: Math.random(),
    img: TrackImgExample,
    name: "See You Again ft.",
    author: "Wiz Khalifa - Charlie Puth",
    date_added: "Aug 26, 2022",
    duration: "06:23",
  },
  {
    id: Math.random(),
    img: TrackImgExample,
    name: "See You Again ft.",
    author: "Wiz Khalifa - Charlie Puth",
    date_added: "Aug 26, 2022",
    duration: "06:23",
  },
  {
    id: Math.random(),
    img: TrackImgExample,
    name: "See You Again ft.",
    author: "Wiz Khalifa - Charlie Puth",
    date_added: "Aug 26, 2022",
    duration: "06:23",
  },
];

const hiddenContent = ["img", "name", "author"];

export const SongsTab = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 0.3fr 0.3fr", sm: "1fr 1fr 1fr" },
          overflowY: "auto",
          width: "100%",
        }}
      >
        <Box sx={{ display: "contents" }}>
          <Box
            sx={{
              borderBottom: "1px solid #323232",
              paddingBottom: "28px",
              marginBottom: "24px",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "17px",
                color: "#fff",
              }}
            >
              Track
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              borderBottom: "1px solid #323232",
              paddingBottom: "28px",
              marginBottom: "24px",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "17px",
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              Date added
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              borderBottom: "1px solid #323232",
              paddingBottom: "28px",
              marginBottom: "24px",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "17px",
                color: "#fff",
              }}
            >
              Duration
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "contents" }}>
          {tracks &&
            tracks.map((track) => {
              const keys = Object.keys(track);
              return keys.map((key) => {
                if (hiddenContent.includes(key)) {
                  return null;
                }
                return (
                  <>
                    {key === "id" ? (
                      <TrackCard key={track.id} track={track} />
                    ) : (
                      <Box
                        key={Math.random()}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          width: "100%",
                          marginBottom: "24px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Work Sans",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: { xs: "12px", sm: "14px" },
                            lineHeight: "16px",
                            color: "rgba(255, 255, 255, 0.6)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {track[key]}
                        </Typography>
                      </Box>
                    )}
                  </>
                );
              });
            })}
        </Box>
      </Box>
    </Box>
  );
};
