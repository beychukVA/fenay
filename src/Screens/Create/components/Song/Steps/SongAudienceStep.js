import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { SongStepsEnum } from "../../lib/SongStepsEnum";
import { MenuCard } from "../../MenuCard";
import { useEffect } from "react";

const options = [
  {
    id: 1,
    name: "For market",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    id: 2,
    name: "For fans",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
];

export const SongAudienceStep = ({ setStep, setData, data }) => {
  const [menuSelected, setMenuSelected] = useState(options[0]);

  useEffect(() => {
    if (!data?.songAudience) {
      setData((prev) => ({ ...prev, songAudience: menuSelected?.name }));
      return;
    }
    setMenuSelected(
      options?.find((option) => option?.name === data?.songAudience)
    );
  }, []);

  const handleMenuSelected = (option) => {
    setMenuSelected(option);
    setData((prev) => ({ ...prev, songAudience: option?.name }));
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
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "42px",
          lineHeight: "50px",
          color: "#fff",
          letterSpacing: "0.2px",
          marginBottom: "32px",
          maxWidth: "408px",
          width: "100%",
        }}
      >
        Choose your audience as an artist
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          marginBottom: "48px",
        }}
      >
        {options?.map((option) => (
          <MenuCard
            option={option}
            menuSelected={menuSelected}
            setMenuSelected={handleMenuSelected}
          />
        ))}
      </Box>
      <Button
        sx={{
          background: "#FF8200",
          borderRadius: "50px",
          padding: "16px 71.5px",
          transition: "all 250ms ease",
          "&:hover": {
            background: "rgba(255, 130, 0, 0.8)",
          },
        }}
        onClick={() => setStep(SongStepsEnum.SONG_DETAILS)}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#000",
            textTransform: "none",
          }}
        >
          Next
        </Typography>
      </Button>
    </Box>
  );
};
