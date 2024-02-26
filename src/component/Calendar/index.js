import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import moment from "moment";
import queryString from "query-string";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import {
  AiOutlineDelete, AiOutlineEdit, AiOutlineUnorderedList
} from "react-icons/ai";
import {
  BsChevronCompactDown, BsChevronCompactLeft,
  BsChevronCompactRight,
  BsChevronCompactUp
} from "react-icons/bs";
import { useLocation } from "react-router";
import { parseJwt } from "../../helpers/getId";
import {
  CreateCalendarEvents,
  GetCalendarEvents
} from "../../Services/CalendarEvents.js";
import buildCalendar from "./build";
import "./calendar.css";

const monthsName = [
  {
    id: 1,
    name: "January",
  },
  {
    id: 2,
    name: "February",
  },
  {
    id: 3,
    name: "March",
  },
  {
    id: 4,
    name: "April",
  },
  {
    id: 5,
    name: "May",
  },
  {
    id: 6,
    name: "June",
  },
  {
    id: 7,
    name: "July",
  },
  {
    id: 8,
    name: "August",
  },
  {
    id: 9,
    name: "September",
  },
  {
    id: 10,
    name: "October",
  },
  {
    id: 11,
    name: "November",
  },
  {
    id: 12,
    name: "December",
  },
];

const CalendarComponent = ({ userId }) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const [year, setYear] = useState(moment().year());
  const [month, setMonth] = useState(moment(value).format("MMMM"));
  const [view, setView] = useState(false);
  const [downArrow, setDownArrow] = useState(false);
  const [upArrow, setUpArrow] = useState(false);
  const [time, setTime] = useState([
    {
      id: 1,
      event: "",
      add: false,
    },
    {
      id: 2,
      event: "",
      add: false,
    },
    {
      id: 3,
      event: "",
      add: false,
    },
    {
      id: 4,
      event: "",
      add: false,
    },
    {
      id: 5,
      event: "",
      add: false,
    },
    {
      id: 6,
      event: "",
      add: false,
    },
    {
      id: 7,
      event: "",
      add: false,
    },
    {
      id: 8,
      event: "",
      add: false,
    },
    {
      id: 9,
      event: "",
      add: false,
    },
    {
      id: 10,
      event: "",
      add: false,
    },
    {
      id: 11,
      event: "",
      add: false,
    },
    {
      id: 12,
      event: "",
      add: false,
    },
    {
      id: 13,
      event: "",
      add: false,
    },
    {
      id: 14,
      event: "",
      add: false,
    },
    {
      id: 15,
      event: "",
      add: false,
    },
    {
      id: 16,
      event: "",
      add: false,
    },
    {
      id: 17,
      event: "",
      add: false,
    },
    {
      id: 18,
      event: "",
      add: false,
    },
    {
      id: 19,
      event: "",
      add: false,
    },
    {
      id: 20,
      event: "",
      add: false,
    },
    {
      id: 21,
      event: "",
      add: false,
    },
    {
      id: 22,
      event: "",
      add: false,
    },
    {
      id: 23,
      event: "",
      add: false,
    },
    {
      id: 24,
      event: "",
      add: false,
    },
  ]);
  const location = useLocation();
  const carouselRef = useRef(null);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 6 },
  ];

  useLayoutEffect(() => {
    function updateSize() {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const isSmallScreen = () => {
    return dimensions.width <= 768;
  };

  const isSelected = (day) => {
    return value.isSame(day, "day");
  };

  const beforeToday = (day) => {
    return day.isBefore(new Date(), "day");
  };

  const beforeMonth = (day) => {
    return day.isBefore(new Date(), "month");
  };

  const afterMonth = (day) => {
    return day.isAfter(new Date(), "month");
  };

  const isToday = (day) => {
    return day.isSame(new Date(), "day");
  };

  const dayStyles = (day) => {
    if (beforeMonth(day)) {
      return "before";
    }
    if (afterMonth(day)) {
      return "before";
    }
    if (isSelected(day)) {
      return "selected";
    }
    if (isToday(day)) {
      return "today";
    }
    return "";
  };

  const currMonthName = () => {
    return value.format("MMMM");
  };

  const currYear = () => {
    return value.format("YYYY");
  };

  const prevMonth = () => {
    setDownArrow(false);
    let newMonth = value.subtract(1, "month").format("MMMM");
    if (parseInt(moment().month(newMonth).format("M")) === 1) {
      setUpArrow(true);
    }
    setMonth(newMonth);
    return month;
  };

  const nextMonth = () => {
    setUpArrow(false);
    let newMonth = value.add(1, "month").format("MMMM");
    if (parseInt(moment().month(newMonth).format("M")) === 12) {
      setDownArrow(true);
    }
    setMonth(newMonth);
    return month;
  };

  const handleYearIncrement = () => {
    let newYear = value.add(1, "year").format("YYYY");
    setYear(newYear);
  };

  const handleYearDecrement = () => {
    let newYear = value.subtract(1, "year").format("YYYY");
    setYear(newYear);
  };

  const handleViewChange = () => {
    setView(!view);
  };

  const addEventCalendar = (id) => {
    setTime(
      time.map((value, key) => {
        if (value.id === id) {
          value.add = true;
        } else {
          value.add = false;
        }
        return value;
      })
    );
  };

  const deleteEventCalendar = (id) => {

  };

  const saveEventHandle = async (event, data) => {
    data.event = event;
    const dataObj = {
      date: `${moment(value).format("Y")}-${moment(value).format(
        "MM"
      )}-${moment(value).format("DD")}`,
      events: [
        {
          time: `${data.id > 12 ? data.id - 12 : data.id}:00${data.id > 12 ? " PM" : " AM"
            }`,
          description: event,
        },
      ],
    };
    const response = await CreateCalendarEvents(dataObj);
    await getEvent();
  };

  const renderArrow = ({ type, onClick, isEdge }) => {
    const PrevIcon = isSmallScreen() ? BsChevronCompactLeft : BsChevronCompactUp;
    const NextIcon = isSmallScreen() ? BsChevronCompactRight : BsChevronCompactDown;

    const prevArrow = !upArrow && (
      <Box onClick={prevMonth}>
        <Button
          disabled={upArrow}
          onClick={onClick}
          className="prev-arrow"
        >
          <PrevIcon color="#fff" size={18} />
        </Button>
      </Box>
    );

    const nextArrow = !downArrow && (
      <Box onClick={nextMonth}>
        <Button
          disabled={downArrow}
          onClick={onClick}
          className="next-arrow"
        >
          <NextIcon color="#fff" size={18} />
        </Button>
      </Box>
    );

    return type === consts.PREV ? prevArrow : nextArrow;
  };

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value, month, time]);

  const getEvent = async () => {
    const { _id } = await parseJwt();
    const check = queryString.parse(location.search);
    let userId;
    if (check && check.id) {
      userId = check.id;
    } else {
      userId = _id;
    }
    const response = await GetCalendarEvents(
      `${moment(value).format("Y")}-${moment(value).format("MM")}-${moment(
        value
      ).format("DD")}`,
      userId
    );
    try {
      const responseEvents = time.map((t) => {
        const checkExist = response[0].events.filter(
          (rt) => parseInt(rt.time.split(":")[0]) === t.id
        );
        if (checkExist.length > 0) {
          t.event = checkExist[0].description;
          t.add = false;
        } else {
          t.event = "";
          t.add = false;
        }
        return t;
      });
      setTime(responseEvents);
    } catch (err) {
      setTime(
        time.map((t) => {
          t.event = "";
          t.add = false;
          return t;
        })
      );
    }
  };

  useEffect(async () => {
    await getEvent();
  }, [value]);

  return (
    <>
      <Box className="calendar-container">
        <Box className="months-container">
          <Box className="calendar-name">Calendar</Box>
          <Box className="year-container">
            <BsChevronCompactLeft onClick={handleYearDecrement} />
            <Typography noWrap component="span">
              {" "}
              {year}
            </Typography>
            <BsChevronCompactRight onClick={handleYearIncrement} />
          </Box>
          <Carousel
            disableArrowsOnEnd={false}
            breakPoints={breakPoints}
            ref={carouselRef}
            verticalMode={!isSmallScreen()}
            itemsToScroll={1}
            enableAutoPlay={false}
            renderArrow={renderArrow}
            pagination={false}
            enableMouseSwipe={false}
            className={"ddd"}
            showEmptySlots={false}
          >
            {monthsName.map((monthName) => (
              <Box
                className={`month-name ${monthName.name === month ? "selected-month" : ""
                  }`}
              >
                {monthName.name}
              </Box>
            ))}
          </Carousel>
        </Box>
        <Box className="date-container">
          <Box className="date-box">
            <Typography noWrap component="span" className="today-date">
              {moment(value).format("MMMM")} {moment(value).format("D")},{" "}
              {moment(value).format("dddd")}
            </Typography>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={handleViewChange}
              className={`${view
                  ? "selected-button-icon"
                  : "selected-button-icon-transparent"
                }`}
            >
              <AiOutlineUnorderedList
                className={`icon-list ${view ? "icon-list-select" : ""}`}
              />
            </IconButton>
          </Box>
          <Box className="week-box">
            {["su", "mo", "tu", "we", "th", "fr", "sa"].map((d) => (
              <Box className="week">{d}</Box>
            ))}
          </Box>
          <Box className="calendar-body">
            {calendar.map((week) => (
              <Box className={`${view ? "event-body" : ""}`}>
                {week.map((day) => (
                  <Box className="day" onClick={() => setValue(day)}>
                    <Box className={`date-select ${dayStyles(day)} `}>
                      {day.format("D").toString()}
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
          {view ? (
            <Box className={"event"}>
              {time.map((tim, index) => (
                <Box className="event-list">
                  {tim.add ? (
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          className="event-time"
                          sx={{ marginRight: "10px" }}
                        >
                          {`${tim.id > 12 ? tim.id - 12 : tim.id}:00${tim.id > 12 ? "PM" : "AM"
                            }`}
                        </Typography>
                        <TextField
                          id={`event_${tim.id}`}
                          placeholder="Event name"
                          sx={{
                            input: {
                              color: "#fff",
                              "&::placeholder": {
                                textOverflow: "ellipsis !important",
                                color: "#fff",
                              },
                            },
                          }}
                          size={"medium"}
                          fullWidth
                          claassName="event-field"
                        />
                      </Box>
                      <Button
                        onClick={() => {
                          saveEventHandle(
                            document.querySelector(`#event_${tim.id}`).value,
                            tim
                          );
                        }}
                        variant="contained"
                        component="label"
                        sx={{
                          backgroundColor: "#FF1C51",
                          padding: "3px 12px",
                          borderRadius: "30px",
                          fontFamily: "poppins",
                          textTransform: "capitalize",
                          fontSize: "12px",
                          boxShadow: "none",
                          marginBottom: "3px",
                          "&:hover": {
                            backgroundColor: "#FF1C51 !important",
                            boxShadow: "none",
                          },
                        }}
                      >
                        Save
                      </Button>
                    </>
                  ) : tim.event !== "" ? (
                    <>
                      <Box
                        sx={{ display: "flex", justifyContent: "flex-start" }}
                      >
                        <Typography
                          className="event-time"
                          sx={{ marginRight: "10px" }}
                        >
                          {`${tim.id > 12 ? tim.id - 12 : tim.id}:00${tim.id > 12 ? "PM" : "AM"
                            }`}
                        </Typography>
                        <Typography className="event-time">
                          {tim.event}
                        </Typography>
                      </Box>
                      <div>
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                          onClick={() => {
                            addEventCalendar(tim.id);
                          }}
                        >
                          <AiOutlineEdit className="add-event" />
                        </IconButton>
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                          onClick={() => saveEventHandle(
                            "",
                            tim
                          )}
                        >
                          <AiOutlineDelete className="add-event" />
                        </IconButton>
                      </div>
                    </>
                  ) : (
                    <>
                      <Typography className="event-time">
                        {`${tim.id > 12 ? tim.id - 12 : tim.id}:00${tim.id > 12 ? "PM" : "AM"
                          }`}
                      </Typography>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        onClick={() => {
                          addEventCalendar(tim.id);
                        }}
                      >
                        <AddCircleOutlineIcon className="add-event" />
                      </IconButton>
                    </>
                  )}
                </Box>
              ))}
            </Box>
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export default CalendarComponent;
