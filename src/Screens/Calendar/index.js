import React, { useState, useEffect } from "react";
import moment from "moment";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Carousel, { consts } from "react-elastic-carousel";
import HeaderComponent from "../../component/Header";
import FooterComponent from "../../component/Footer";
import { useStyles } from "../../constant/customStyle";
import { CalendarComponent } from "./components/CalendarComponent";
import ExploreTitle from "../Home/components/ExploreTitle";
import MerchImgExample from "../../assets/MerchImgExample.png";
import { EventsCard } from "./components/EventsCard";
import { NoteCard } from "./components/NoteCard";
import { AddNoteDialog } from "./components/AddNoteDialog";
import { EventsDetailDialog } from "./components/EventsDetailDialog";

const events = [
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci. 1",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci. 2",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci. 3",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
  },
  {
    id: 1,
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
  },
];

export const Calendar = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:768px)");
  const [open, setOpen] = useState(false);
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState([]);
  const [isAddNoteDialogOpen, setAddNoteDialogOpen] = useState(false);
  const [currentEventSelected, setCurrentEventSelected] = useState(null);
  const [isEventDetailOpne, setEventDetailOpne] = useState(false);
  const breakPoints = [
    { width: 1, itemsToShow: 1.6, itemsToScroll: 1 },
    { width: 300, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 375, itemsToShow: 1.3, itemsToScroll: 1 },
    { width: 700, itemsToShow: 2.5, itemsToScroll: 1 },
    { width: 900, itemsToShow: 3.4, itemsToScroll: 1 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <KeyboardArrowLeftIcon
          sx={{
            color: "#000",
            width: "24px",
            height: "24px",
          }}
        />
      ) : (
        <KeyboardArrowRightIcon
          sx={{
            color: "#000",
            width: "24px",
            height: "24px",
          }}
        />
      );
    const pos = type === consts.PREV ? "left" : "right";
    return (
      <Button
        onClick={onClick}
        disabled={isEdge}
        sx={{
          position: "absolute",
          [pos]: "40px",
          top: "139px",
          zIndex: "3",
          minWidth: "48px",
          height: "48px",
          padding: 0,
          background: "rgba(255, 255, 255, 1)",
          borderRadius: "50%",
          "&:hover": {
            background: "rgba(255, 255, 255, 0.8)",
          },
        }}
      >
        {pointer}
      </Button>
    );
  };

  const handleAddNote = (note) => setNotes([note, ...notes]);
  const handleEventSelected = (event) => {
    setCurrentEventSelected(event);
    setEventDetailOpne(true);
  };

  return (
    <Box sx={{ position: "relative" }} className={open ? classes.blur : ""}>
      <Box
        sx={{
          position: "absolute",
          top: "408px",
          left: "-102px",
          width: "257.54px",
          height: "261.76px",
          background: "#FF8200",
          opacity: "0.15",
          filter: "blur(100px)",
          zIndex: "0",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "805px",
          right: "0",
          width: "257.54px",
          height: "261.76px",
          background: "#FF8200",
          opacity: "0.2",
          filter: "blur(100px)",
          zIndex: "0",
        }}
      />
      <HeaderComponent
        style={{ position: "fixed" }}
        // setSongUrl={setSongUrl}
        // setSongDetails={setSongDetails}
        setLeftSidebarOpen={setLeftSidebarOpen}
      />
      <Box
        className={`${classes.homeContainer} ${
          isLeftSidebarOpen ? "" : matches ? "" : classes.sidebarOpen
        }`}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          height: "100%",
          //   minHeight: "calc(100vh - 336px)",
          width: isLeftSidebarOpen
            ? "100%"
            : { xs: "100%", md: "calc(100% - 235px)" },
          padding: isLeftSidebarOpen
            ? {
                xs: "48px 15px 137px 15px !important",
                lg: "48px 78px 137px 78px !important",
              }
            : {
                xs: "48px 15px 137px 15px !important",
                lg: "48px 78px 137px 78px !important",
              },
          background: "rgba(0, 0, 0, 0.25)",
          zIndex: "0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          {/** Calendar */}
          <CalendarComponent setSelectedDate={setSelectedDate} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
              marginTop: { xs: "48px", lg: "0" },
            }}
          >
            {/** Add Note */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "24px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#fff",
                }}
              >
                {moment(selectedDate?.$d).format("MMM DD\\t\\h")}
              </Typography>
              <Button
                onClick={() => setAddNoteDialogOpen(true)}
                sx={{
                  padding: "10px 16px",
                  background: "#FF8200",
                  borderRadius: "40px",
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
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#000",
                    textTransform: "capitalize",
                  }}
                >
                  Add Note
                </Typography>
              </Button>
            </Box>
            {/** Events */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                marginBottom: "16px",
              }}
            >
              <ExploreTitle
                className={classes.explorerHeadingMedia}
                title={"Events"}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                marginBottom: "48px",
              }}
            >
              {events.length === 0 ? (
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "2",
                    width: "100%",
                    height: "100%",
                    color: "#fff",
                    fontSize: "1em",
                    position: "relative",
                    // top: "-15px",
                  }}
                >
                  List is empty
                </Typography>
              ) : (
                <Carousel
                  className={classes.carouselCalendarEvents}
                  itemsToScroll={2}
                  itemsToShow={3}
                  enableMouseSwipe={true}
                  enableAutoPlay={false}
                  renderArrow={myArrow}
                  breakPoints={breakPoints}
                  outerSpacing={7}
                  pagination={false}
                >
                  {events.map((item, index) => (
                    <EventsCard
                      handleEventSelected={handleEventSelected}
                      event={item}
                    />
                  ))}
                </Carousel>
              )}
            </Box>
            {/** Notes */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                marginBottom: "22px",
              }}
            >
              <ExploreTitle
                className={classes.explorerHeadingMedia}
                title={"Notes"}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
                height: "600px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "100%",
                  height: "100%",
                  overflow: "auto",
                  paddingRight: "5px",
                }}
              >
                {notes.length > 0 ? (
                  notes.map((note) => <NoteCard note={note} />)
                ) : (
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      color: "#fff",
                      fontSize: "1em",
                    }}
                  >
                    No notes yet
                  </Typography>
                )}
              </Box>
            </Box>
            <AddNoteDialog
              handleAddNote={handleAddNote}
              isAddNoteDialogOpen={isAddNoteDialogOpen}
              setAddNoteDialogOpen={setAddNoteDialogOpen}
            />
            <EventsDetailDialog
              currentEventSelected={currentEventSelected}
              isEventDetailOpne={isEventDetailOpne}
              setEventDetailOpne={setEventDetailOpne}
            />
          </Box>
        </Box>
      </Box>
      <FooterComponent />
    </Box>
  );
};
