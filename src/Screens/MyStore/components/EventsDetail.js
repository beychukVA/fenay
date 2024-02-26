import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import ShareArrowIcon from "../../../assets/ShareArrowIcon.svg";
import GoLiveIcon from "../../../assets/GoLiveIcon.svg";
import { EventChart } from "./EventChart";
import { DetailsTypeEvent } from "./DetailsTypeEvent";
import { DetailsTypeAssets } from "./DetailsTypeAssets";
import { DetailsTypeMerch } from "./DetailsTypeMerch";

export const EventsDetail = ({
  event,
  setCurrentAsset,
  setLiveStreaming,
  setAssetsFilter,
  setEditAssetsEvent,
}) => {
  const [refChart, setRefChart] = useState(null);

  useEffect(() => setRefChart(document.getElementById("event-chart")), []);

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
          display: "flex",
          alignItems: "'center",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "37px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "32px",
            lineHeight: "140%",
            letterSpacing: "0.2px",
            color: "#fff",
          }}
        >
          Event details
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            onClick={() => {
              setCurrentAsset(null);
              setAssetsFilter("All assets");
            }}
            sx={{
              width: "36px",
              height: "36px",
              WebkitMask: `url(${ShareArrowIcon}) center center / 36px 36px no-repeat`,
              mask: `url(${ShareArrowIcon}) center center / 36px 36px no-repeat`,
              backgroundSize: "cover",
              background: "#fff",
              cursor: "pointer",
              transition: "all 250ms ease",
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
          <Button
            onClick={() => {
              if (event?.type === "asset") {
                setEditAssetsEvent(true);
              }
            }}
            sx={{
              padding: "8px 34px",
              border: "1px solid #FFFFFF",
              borderRadius: "40px",
              background: "transparent",
              marginLeft: "24px",
              transition: "all 250ms ease",
              "&: hover": {
                background: "rgba(255, 130, 0, 0.8)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#fff",
                textTransform: "none",
              }}
            >
              Edit
            </Typography>
          </Button>
        </Box>
      </Box>
      {/** Details */}
      {/**Img */}
      <Box
        sx={{
          position: "relative",
          zIndex: "0",
          width: "100%",
          marginBottom: "24px",
        }}
      >
        <img
          src={event?.img}
          alt={event?.title}
          style={{
            width: "100%",
            maxHeight: "372px",
            borderRadius: "8px",
            zIndex: "1",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
          }}
        />
        {event?.type === "event" && (
          <Button
            onClick={() => setLiveStreaming(true)}
            sx={{
              position: "absolute",
              left: "24px",
              bottom: "24px",
              padding: "19px 90px",
              borderRadius: "40px",
              background: "#FF8200",
              transition: "all 250ms ease",
              "&: hover": {
                background: "rgba(255, 130, 0, 0.8)",
              },
            }}
          >
            <Box
              sx={{
                width: "24px",
                height: "24px",
                background: `url(${GoLiveIcon})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                marginRight: "4px",
              }}
            />
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
              Go Live
            </Typography>
          </Button>
        )}
      </Box>
      {/** Title, Description */}
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "29px",
          color: "#fff",
          textTransform: "none",
          marginBottom: "12px",
        }}
      >
        {event?.title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "19px",
          color: "rgba(255, 255, 255, 0.6)",
          textTransform: "none",
          marginBottom: "24px",
          maxWidth: "454px",
        }}
      >
        {event?.desc}
      </Typography>
      {/** Chart, Stats */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {/** Chart */}
        <EventChart id="event-chart" event={event} />
        {event?.type === "event" && (
          <DetailsTypeEvent refChart={refChart} event={event} />
        )}
        {event?.type === "asset" && (
          <DetailsTypeAssets refChart={refChart} event={event} />
        )}
        {event?.type === "merch" && (
          <DetailsTypeMerch refChart={refChart} event={event} />
        )}
      </Box>
    </Box>
  );
};
