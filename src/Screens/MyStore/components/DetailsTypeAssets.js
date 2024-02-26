import React from "react";
import { Box, Typography } from "@mui/material";

export const DetailsTypeAssets = ({ refChart, event }) => {
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
        Owner
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
          marginBottom: "32px",
        }}
      >
        {event?.owner}
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
          marginBottom: "32px",
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
          marginBottom: "32px",
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
