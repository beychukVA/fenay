import { Box } from "@mui/material";
import React from "react";
import EventImgExample from "../../../../assets/EventImgExample.png";
import { EventsCard } from "../EventsCard";

const events = [
  {
    id: 1,
    img: EventImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: EventImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: EventImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: EventImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: EventImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: EventImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: EventImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: EventImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: EventImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
  {
    id: 1,
    img: EventImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
  },
];

export const EventsTab = () => {
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
      {events.map((event) => (
        <Box
          sx={{
            maxWidth: "270px",
            maxHeight: "262px",
            height: "262px",
            minWidth: "270px",
            flexBasis: {
              xs: "calc(100% / 1 - 16px)",
              sm: "calc(100% / 2 - 16px)",
              md: "calc(100% / 3 - 16px)",
            },
            marginLeft: "20px",
            marginTop: "50px",
          }}
        >
          <EventsCard event={event} />
        </Box>
      ))}
    </Box>
  );
};
