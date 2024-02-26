import React from "react";
import { Box } from "@mui/material";
import MerchImgExample from "../../../../assets/MerchImgExample.png";
import { MerchCard } from "../MerchCard";

const merchs = [
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
];

export const MerchTab = () => {
  return (
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
      }}
    >
      {merchs.map((merch) => (
        <Box
          sx={{
            maxWidth: "262px",
            maxHeight: "325px",
            height: "325px",
            width: "100%",
            flexBasis: {
              xs: "calc(100% / 1 - 16px)",
              sm: "calc(100% / 3 - 16px)",
              md: "calc(100% / 4 - 16px)",
            },
            marginLeft: "20px",
            marginTop: "50px",
          }}
        >
          <MerchCard merch={merch} />
        </Box>
      ))}
    </Box>
  );
};
