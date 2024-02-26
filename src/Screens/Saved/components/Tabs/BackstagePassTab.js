import React from "react";
import { Box } from "@mui/material";
import BackstageIcon1 from "../../../../assets/BackstageIcon1.svg";
import BackstageIcon2 from "../../../../assets/BackstageIcon2.svg";
import BackstageIcon3 from "../../../../assets/BackstageIcon3.svg";
import { BackstagePassCard } from "../BackstagePassCard";

const backstagePass = [
  {
    id: 1,
    icon: BackstageIcon1,
    type: "Basic - Wiz Khalifa",
    access: "Access to the Fan only posts.",
  },
  {
    id: 2,
    icon: BackstageIcon2,
    type: "Basic - Charlie Puth",
    access: "Access to the Fan only posts.",
  },
  {
    id: 3,
    icon: BackstageIcon3,
    type: "Luxury - Wiz Khalifa",
    access: "Access to the Fan only posts, Songs, events & Merch.",
  },
  {
    id: 1,
    icon: BackstageIcon1,
    type: "Basic - Wiz Khalifa",
    access: "Access to the Fan only posts.",
  },
  {
    id: 2,
    icon: BackstageIcon2,
    type: "Basic - Charlie Puth",
    access: "Access to the Fan only posts.",
  },
  {
    id: 3,
    icon: BackstageIcon3,
    type: "Luxury - Wiz Khalifa",
    access: "Access to the Fan only posts, Songs, events & Merch.",
  },
  {
    id: 1,
    icon: BackstageIcon1,
    type: "Basic - Wiz Khalifa",
    access: "Access to the Fan only posts.",
  },
  {
    id: 2,
    icon: BackstageIcon2,
    type: "Basic - Charlie Puth",
    access: "Access to the Fan only posts.",
  },
  {
    id: 3,
    icon: BackstageIcon3,
    type: "Luxury - Wiz Khalifa",
    access: "Access to the Fan only posts, Songs, events & Merch.",
  },
];

export const BackstagePassTab = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: { xs: "center", sm: "flex-start" },
        width: "100%",
        height: "100%",
        marginLeft: "-16px",
        marginTop: "-20px",
      }}
    >
      {backstagePass.map((backstage) => (
        <Box
          sx={{
            maxWidth: "270px",
            maxHeight: "203px",
            height: "203px",
            minWidth: "270px",
            flexBasis: {
              xs: "calc(100% / 1 - 16px)",
              sm: "calc(100% / 2 - 16px)",
              md: "calc(100% / 3 - 16px)",
            },
            marginLeft: "16px",
            marginTop: "20px",
          }}
        >
          <BackstagePassCard backstage={backstage} />
        </Box>
      ))}
    </Box>
  );
};
