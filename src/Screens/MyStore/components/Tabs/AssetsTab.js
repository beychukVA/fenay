import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Select } from "../../../Library/components/Select";
import MusicListIcon from "../../../../assets/MusicListIcon.svg";
import { MerchCard } from "../../../Library/components/MerchCard";

const assetsSelects = [
  {
    label: "All assets",
    value: "All assets",
  },
  {
    label: "Upcoming Events",
    value: "Upcoming Events",
  },
  {
    label: "Merch",
    value: "Merch",
  },
];

export const AssetsTab = ({ assets, setCurrentAsset, setAssetsFilter }) => {
  const [selectedAsset, setSelectedAsset] = useState(assetsSelects[0].value);

  const handleAssetChange = (event) => {
    setSelectedAsset(event.target.value);
    setAssetsFilter(event.target.value);
  };

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
      <Select
        fontWeight={"700"}
        fontSize={"18px"}
        lineHeight={"22px"}
        border={false}
        selectedOption={selectedAsset}
        options={assetsSelects}
        handleOptionChange={handleAssetChange}
      />
      {/** Assets List */}
      {assets.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: { xs: "center", sm: "flex-start" },
            width: "100%",
            height: "100%",
            marginLeft: "-20px",
            marginTop: "-50px",
            paddingTop: "24px",
          }}
        >
          {assets &&
            assets.map((asset) => (
              <Box
                key={asset.id}
                onClick={() => setCurrentAsset(asset)}
                sx={{
                  maxWidth: "262px",
                  maxHeight: "325px",
                  height: "325px",
                  width: "100%",
                  flexBasis: {
                    xs: "calc(100% / 1 - 20px)",
                    sm: "calc(100% / 3 - 20px)",
                    md: "calc(100% / 4 - 20px)",
                  },
                  marginLeft: "20px",
                  marginTop: "50px",
                }}
              >
                <MerchCard key={asset?.id} merch={asset} />
              </Box>
            ))}
        </Box>
      ) : (
        /** No Assets */
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            height: "calc(100vh - 264px)",
            marginTop: "32px",
          }}
        >
          <img
            src={MusicListIcon}
            alt="No Assets"
            style={{
              width: "64px",
              height: "64px",
              marginBottom: "32px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "28px",
              color: "#fff",
              marginBottom: "2px",
            }}
          >
            No Assets
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",
              color: "rgba(255, 255, 255, 0.6)",
              marginBottom: "39px",
            }}
          >
            You have nothing on sell.
          </Typography>
          <Button
            sx={{
              padding: "8px 24px",
              background: "#FF8200",
              borderRadius: "40px",
              height: "38px",
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
                fontSize: "16px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#000",
                textTransform: "none",
              }}
            >
              Create
            </Typography>
          </Button>
        </Box>
      )}
    </Box>
  );
};
