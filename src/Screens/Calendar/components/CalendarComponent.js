import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { useStyles } from "../../../constant/customStyle";
import { Box, Typography, useMediaQuery } from "@mui/material";
import moment from "moment";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const CalendarComponent = ({ setSelectedDate }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");
  const [currentDay, setCurrentDay] = useState(dayjs(new Date()));
  const [date, setDate] = useState(dayjs(new Date()));
  const [month, setMonth] = useState(dayjs(new Date().getMonth()));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: { xs: "100%", sm: "auto" },
        marginRight: { xs: "0", sm: "64px" },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "29px",
          color: "#fff",
          marginBottom: "27px",
        }}
      >
        {`Today: ${moment(currentDay).format("DD\\t\\h MMM YYYY")}`}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CalendarPicker
          className={matches ? classes.calendarMobile : classes.calendar}
          renderDay={(params) => {
            const isEvent = Math.random() * 10 > 5;
            return (
              <Box
                onClick={() => {
                  setDate(params);
                  setSelectedDate(params);
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  border:
                    currentDay?.$D === params?.$D &&
                    currentDay?.$M === params?.$M
                      ? "1px solid #fff"
                      : "none",
                  cursor: "pointer",
                  background:
                    date?.$D === params?.$D && date?.$M === params?.$M
                      ? month?.$M === date?.$M
                        ? "#FF8200"
                        : "transparent"
                      : currentDay?.$D === params?.$D &&
                        currentDay?.$M === params?.$M
                      ? "rgba(0, 0, 0, 0.2)"
                      : "transparent",
                  maxWidth: { xs: "40px", sm: "50px" },
                  maxHeight: { xs: "40px", sm: "50px" },
                  minWidth: { xs: "40px", sm: "50px" },
                  minHeight: { xs: "40px", sm: "50px" },
                  margin: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: { xs: "18px", sm: "24px" },
                    lineHeight: { xs: "19px", sm: "29px" },
                    color: "#fff",
                    marginBottom: isEvent ? "6.34px" : "12.74px",
                  }}
                >
                  {month?.$M === params?.$M ? params?.$D : ""}
                </Typography>
                {isEvent && month?.$M === params?.$M && (
                  <Box
                    sx={{
                      width: "6.4px",
                      height: "6.4px",
                      borderRadius: "6.39744px",
                      background: "rgba(255, 255, 255, 0.6)",
                    }}
                  />
                )}
              </Box>
            );
          }}
          dayOfWeekFormatter={(day) =>
            days
              .find((d) => d.includes(day))
              .slice(0, 3)
              .toUpperCase()
          }
          date={date}
          onChange={(newDate) => {
            setDate(newDate);
            setSelectedDate(newDate);
          }}
          onMonthChange={(newMonth) => setMonth(newMonth)}
          onYearChange={(year) => {
            setDate(dayjs(new Date(year?.$d)));
            setSelectedDate(dayjs(new Date(year?.$d)));
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};
