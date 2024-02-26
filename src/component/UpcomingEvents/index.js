import {
  Box, Typography
} from "@mui/material";
import React from "react";
import Party from "../../assets/party.png";

const UpcomingEventsComponents = ({ item, getEvents, handleModal }) => {
  return (
    <Box
      onClick={() => handleModal(item)}
      style={{ position: "relative", padding: "1em" }}
    >
      <Box
        style={{
          backgroundImage: `url(${item?.imgFile ? item?.imgFile : Party})`,
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          width: "250px",
          height: "160px",
          borderRadius: "20px",
          paddingBottom: "0.5em",
        }}
      ></Box>
      {/* <IconButton
        style={{
          position: "absolute",
          right: "0px",
          top: "0px",
          background: "#1d1d1d",
          color: "#fff",
        }}
        onClick={deleteEvent}
      >
        <CloseIcon fontSize={"small"} />
      </IconButton> */}
      <div style={{ paddingTop: "0.5em", paddingLeft: "0.5em" }}>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: "14px",
            fontWeight: 500,
            color: "#fff",
          }}
        >
          Event : {item.desc}{" "}
        </Typography>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: "14px",
            fontWeight: 500,
            color: "#fff",
          }}
        >
          {" "}
          Date : {item.eventTime.split("T")[0]} Time :{" "}
          {`${item.eventTime.split("T")[1].split(":")[0]}:${item.eventTime.split("T")[1].split(":")[1]
            }`}
        </Typography>
      </div>
    </Box>
  );
};

export default UpcomingEventsComponents;
