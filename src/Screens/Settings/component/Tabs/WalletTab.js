import React, { useState } from "react";
import { useStyles } from "../../../../constant/customStyle";
import { Box, Typography, useMediaQuery } from "@mui/material";
import MetamaskIcon from "../../../../assets/MetamaskIcon.svg";
import TrustWalletIcon from "../../../../assets/TrustWalletIcon.svg";

const wallets = [
  {
    id: 1,
    name: "Metamask",
    icon: MetamaskIcon,
  },
  {
    id: 2,
    name: "Trust Wallet",
    icon: TrustWalletIcon,
  },
];

export const WalletTab = () => {
  const [selectedWallet, setSelectedWallet] = useState(wallets[0]);

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
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "140%",
          color: "#fff",
          letterSpacing: "0.2px",
          marginBottom: "32px",
        }}
      >
        Wallet
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "flex-start" },
          justifyContent: "flex-start",
          width: "100%",
          marginLeft: "-24px",
          marginTop: "-24px",
        }}
      >
        {wallets.map((wallet) => (
          <Box
            key={wallet?.id}
            onClick={() => setSelectedWallet(wallet)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginLeft: "24px",
              marginTop: "24px",
              background:
                selectedWallet?.id === wallet?.id
                  ? "rgba(255, 255, 255, 0.05)"
                  : "#2A2B2F",
              border: `1px solid ${
                selectedWallet?.id === wallet?.id ? "#FF8200" : "#515151"
              }`,
              borderRadius: "10px",
              flexBasis: `calc(100% / ${wallets.length} - 24px)`,
              minWidth: "192px",
              maxWidth: "192px",
              minHeight: "123px",
              transition: "all 250ms ease",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <Box
              sx={{
                width: "33px",
                height: "33px",
                background: `url(${wallet?.icon})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                marginBottom: "22px",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "140%",
                color: "#9E9E9E",
                letterSpacing: "0.2px",
              }}
            >
              {wallet?.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
