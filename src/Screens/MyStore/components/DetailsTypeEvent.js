import React from "react";
import { Box, Button, Typography } from "@mui/material";
import VRExperienceIcon from "../../../assets/VRExperienceIcon.svg";
import WatchIcon from "../../../assets/WatchIcon.svg";

export const DetailsTypeEvent = ({ refChart, event }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flex: "1.5",
        width: "100%",
        height: "100%",
        minHeight: refChart?.offsetHeight,
        background: "#2A2B2F",
        borderRadius: "8px",
        padding: "26px 32px",
        marginLeft: { xs: "0", md: "16px" },
        marginTop: { xs: "16px", md: "0" },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "24px",
          color: "rgba(255, 255, 255, 0.6)",
          textTransform: "none",
          marginBottom: "5px",
        }}
      >
        Date
      </Typography>
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "29px",
          color: "#fff",
          textTransform: "none",
          marginBottom: "24px",
        }}
      >
        {event?.date}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "24px",
          color: "rgba(255, 255, 255, 0.6)",
          textTransform: "none",
          marginBottom: "5px",
        }}
      >
        Live
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          marginBottom: "24px",
        }}
      >
        <Button
          sx={{
            padding: "10px 16px",
            background: "rgba(255, 130, 0, 1)",
            borderRadius: "40px",
            marginRight: "20px",
            "&:hover": {
              background: "rgba(255, 130, 0, 0.8)",
            },
          }}
        >
          <Box
            sx={{
              width: "18px",
              height: "18px",
              WebkitMask: `url(${VRExperienceIcon}) center center / 18px 18px no-repeat`,
              mask: `url(${VRExperienceIcon}) center center / 18px 18px no-repeat`,
              backgroundSize: "cover",
              backgroundColor: "#000",
              marginRight: "4px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "16px",
              color: "#000",
              textTransform: "none",
            }}
          >
            VR Experience
          </Typography>
        </Button>
        <Button
          sx={{
            padding: "10px 16px",
            background: "transparent",
            borderRadius: "40px",
            border: "1px solid #FFFFFF",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          <Box
            sx={{
              width: "18px",
              height: "18px",
              WebkitMask: `url(${WatchIcon}) center center / 18px 18px no-repeat`,
              mask: `url(${WatchIcon}) center center / 18px 18px no-repeat`,
              backgroundSize: "cover",
              backgroundColor: "#fff",
              marginRight: "4px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "16px",
              color: "#fff",
              textTransform: "none",
            }}
          >
            Watch
          </Typography>
        </Button>
      </Box>
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "24px",
          color: "rgba(255, 255, 255, 0.6)",
          textTransform: "none",
          marginBottom: "5px",
        }}
      >
        Price
      </Typography>
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "29px",
          color: "#fff",
          textTransform: "none",
          marginBottom: "24px",
        }}
      >
        {event?.price}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "24px",
          color: "rgba(255, 255, 255, 0.6)",
          textTransform: "none",
          marginBottom: "5px",
        }}
      >
        Quantity
      </Typography>
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "29px",
          color: "#fff",
          textTransform: "none",
          marginBottom: "24px",
        }}
      >
        {`${event?.quantity} out of 100 available`}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "24px",
              color: "rgba(255, 255, 255, 0.6)",
              textTransform: "none",
              marginBottom: "5px",
              whiteSpace: "nowrap",
            }}
          >
            Total View
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "29px",
              color: "#fff",
              textTransform: "none",
              marginBottom: "24px",
            }}
          >
            {`${event?.total_view}K`}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginLeft: { xs: "20px", sm: "49.5px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "24px",
              color: "rgba(255, 255, 255, 0.6)",
              textTransform: "none",
              marginBottom: "5px",
              whiteSpace: "nowrap",
            }}
          >
            Total Sale
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "29px",
              color: "#fff",
              textTransform: "none",
              marginBottom: "24px",
            }}
          >
            {`${event?.total_sale}`}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginLeft: { xs: "20px", sm: "49.5px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "24px",
              color: "rgba(255, 255, 255, 0.6)",
              textTransform: "none",
              marginBottom: "5px",
              whiteSpace: "nowrap",
            }}
          >
            Total Likes
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "29px",
              color: "#fff",
              textTransform: "none",
              marginBottom: "24px",
            }}
          >
            {`${event?.total_likes}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
