import React from "react";
import { Box, Button, Typography } from "@mui/material";
import MoreIcon from "../../../assets/MoreIcon.svg";

export const BackstagePassDetail = ({ refChart }) => {
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
        padding: "41px 35px 42px 35px",
        marginRight: { xs: "0", md: "16px" },
        marginBottom: { xs: "16px", md: "0" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "24px",
        }}
      >
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
              lineHeight: "29px",
              color: "#fff",
              marginBottom: "4px",
            }}
          >
            Basic Pass - $10.95
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",
              color: "rgba(255, 255, 255, 0.6)",
              marginBottom: "4px",
            }}
          >
            10 Passes
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
              color: "#fff",
              marginBottom: "4px",
            }}
          >
            Fan only posts.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "22px",
              color: "#fff",
              marginRight: "12px",
            }}
          >
            10 Sold
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              WebkitMask: `url(${MoreIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${MoreIcon}) center center / 24px 24px no-repeat`,
              backgroundSize: "cover",
              background: "#fff",
              transform: "rotate(90deg)",
              transition: "all 250ms ease",
              cursor: "pointer",
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
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
              lineHeight: "29px",
              color: "#fff",
              marginBottom: "4px",
            }}
          >
            Luxury Pass - $10.95
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",
              color: "rgba(255, 255, 255, 0.6)",
              marginBottom: "4px",
            }}
          >
            100 Passes
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
              color: "#fff",
              marginBottom: "4px",
            }}
          >
            Fan only posts and events
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "22px",
              color: "#fff",
              marginRight: "12px",
            }}
          >
            10 Sold
          </Typography>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              WebkitMask: `url(${MoreIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${MoreIcon}) center center / 24px 24px no-repeat`,
              backgroundSize: "cover",
              background: "#fff",
              transform: "rotate(90deg)",
              transition: "all 250ms ease",
              cursor: "pointer",
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
      </Box>
      <Button
        sx={{
          width: "100%",
          maxWidth: "378px",
          height: "58px",
          padding: "18px",
          background: "#FF8200",
          border: "1px solid #FF8200",
          borderRadius: "30px",
          margin: {
            xs: "24px auto 0 auto",
            sm: "auto auto 0 auto",
            md: "24px auto 0 auto",
            lg: "auto auto 0 auto",
          },
          transition: "all 250ms ease",
          "&:hover": {
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
          Disable Backstage Pass
        </Typography>
      </Button>
    </Box>
  );
};
