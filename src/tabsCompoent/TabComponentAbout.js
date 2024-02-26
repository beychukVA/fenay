import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "flatpickr/dist/themes/material_green.css";
import moment from "moment";
import "rc-time-picker/assets/index.css";
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Carousel, { consts } from "react-elastic-carousel";
import Flatpickr from "react-flatpickr";
import { useStyles } from "../constant/customStyle";
import { show_success, show_toast } from "../helpers/toast";
import ExploreTitle from "../Screens/Home/components/ExploreTitle";
import { CreateCalendarEvents } from "../Services/CalendarEvents";
import { UpdateUser } from "../Services/User";

const format = "HH:mm";
const now = moment().hour(0).minute(0);

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

const Supporters = [
  {
    user_img: dummyImage,
    user_name: "Billie Eilish",
  },
  {
    user_img: dummyImage,
    user_name: "Salud Subira",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    user_img: dummyImage,
    user_name: "Billie Eilish",
  },
  {
    user_img: dummyImage,
    user_name: "Salud Subira",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
];

const Supporting = [
  {
    user_img: dummyImage,
    user_name: "Billie Eilish",
  },
  {
    user_img: dummyImage,
    user_name: "Salud Subira",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    user_img: dummyImage,
    user_name: "Billie Eilish",
  },
  {
    user_img: dummyImage,
    user_name: "Salud Subira",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
];

const TabComponentAbout = ({
  Name,
  setName,
  ProfilePicPrev,
  setProfilePicPrev,
  userModal,
  setcropModalStatus,
  setcropingImage,
  setuserModal,
  Bio,
  setBio,
  Experience,
  setExperience,
  setcropMode,
  Education,
  setEducation,
  Contact,
  setContact,
  isMyProfile,
  eventsModal,
  seteventsModal,
  Events,
  getEvents,
  tagline,
  settagline,
  getUser,
  PrExperience,
  PrBio,
}) => {
  const classes = useStyles();

  const [ProfilePic, setProfilePic] = useState("");
  const [EventDate, setEventDate] = useState();
  const [EventTime, setEventTime] = useState();
  const [EventName, setEventName] = useState();
  const [profilePicUploading, setProfilePicUploading] = useState(false);
  const breakPoints = [{ width: 1, itemsToShow: 4, itemsToScroll: 1 }];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <KeyboardArrowLeftIcon sx={{ color: "#FF1C51", fontSize: "36px" }} />
      ) : (
        <KeyboardArrowRightIcon sx={{ color: "#FF1C51", fontSize: "36px" }} />
      );
    return (
      <Button
        onClick={onClick}
        disabled={isEdge}
        sx={{ display: "none", minWidth: "20px", padding: 0 }}
      >
        {pointer}
      </Button>
    );
  };

  const updateUserProfile = async () => {
    if (Name.trim() === "") {
      show_toast("Name field can not be empty.");
      return;
    }
    const data = {
      name: Name.trim(),
      education: Education,
      contact: Contact,
      experience: Experience,
      bio: Bio,
      tagline,
      profilePicture: ProfilePicPrev,
    };
    const res = await UpdateUser(data);

    if (res.status_msg === "Account has been updated") {
      getUser();
      setuserModal(false);
      show_success("Account has been updated");
    }
  };

  const uploadProfilePicHandle = () => {
    document.querySelector("#profilePictureUpload").click();
  };

  const uploadPic = async () => {
    // setProfilePicUploading(true);
    setcropMode("profilePic");
    // const res = await UploadFile(ProfilePic);
    const imgUrl = URL.createObjectURL(ProfilePic);
    if (imgUrl) {
      setcropModalStatus(true);
      // setProfilePicUploading(false);
      setcropingImage(imgUrl);
      // setProfilePicPrev(res.data.Location);
    }
  };

  const removePic = async () => {
    setProfilePicUploading(true);
    const data = {
      profilePicture: "",
    };
    const res = await UpdateUser(data);
    if (res.data) {
      setProfilePicUploading(false);
      setProfilePicPrev("");
    }
  };

  const onFileChange2 = (event) => {
    // Update the state
    if (!event.target.files[0].type.includes("image")) {
      show_toast("Please attach *.JPG, *.PNG image files.");
    } else if (event.target.files[0].size / 1000000 > 10) {
      show_toast("Maximum 10Mb image is allowed to upload");
    } else {
      setProfilePic(event.target.files[0]);
    }
  };

  const createEvent = async () => {
    console.log("EventDate", EventDate);
    const eventObj = {
      date: EventDate.split(" ")[0],
      events: [{ time: EventTime, description: EventName }],
    };
    const res = await CreateCalendarEvents(eventObj);
    if (res) {
      seteventsModal(false);
      setEventDate(new Date());
      setEventName("");
      setEventTime(now);
      getEvents();
    }
  };

  useEffect(() => {
    const upload = async () => {
      if (ProfilePic) {
        await uploadPic();
      }
    };
    upload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ProfilePic]);

  return (
    <Box>
      <Box>
        <ExploreTitle title="Bio" />
        <Box display={"flex"} sx={{ marginBottom: "30px" }}>
          <Typography
            sx={{
              fontFamily: "Urbanist !important",
              fontStyle: "normal !important",
              fontWeight: "400 !important",
              fontSize: "16px !important",
              lineHeight: "140% !important",
              letterSpacing: "0.2px",
              color: "rgba(255, 255, 255, 0.6) !important",
            }}
          >
            {/* {PrBio} */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A habitant
            commod
          </Typography>
        </Box>
        <ExploreTitle title="Contact" />
        <Box display={"flex"} sx={{ marginBottom: "30px" }}>
          <Typography
            sx={{
              fontFamily: "Urbanist !important",
              fontStyle: "normal !important",
              fontWeight: "400 !important",
              fontSize: "16px !important",
              lineHeight: "140% !important",
              letterSpacing: "0.2px",
              color: "rgba(255, 255, 255, 0.6) !important",
            }}
          >
            {/* {PrExperience} */}
            abhi@finay.com
          </Typography>
        </Box>
        <ExploreTitle title="Supporters" />
        <Box>
          <Carousel
            className={classes.carouselPagination}
            itemsToScroll={4}
            itemsToShow={4}
            enableMouseSwipe={true}
            enableAutoPlay={false}
            renderArrow={myArrow}
            breakPoints={breakPoints}
            outerSpacing={0}
            pagination={true}
          >
            {Supporters &&
              Supporters.map((item) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      style={{
                        backgroundImage: `url(${item?.user_img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "100%",
                        width: "84px",
                        height: "84px",
                        marginBottom: "8px",
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Urbanist !important",
                        fontStyle: "normal !important",
                        fontWeight: "400 !important",
                        fontSize: "16px !important",
                        lineHeight: "19px !important",
                        color: "#fff !important",
                      }}
                    >
                      {item?.user_name}
                    </Typography>
                  </Box>
                );
              })}
          </Carousel>
        </Box>
        <ExploreTitle title="Supporting" />
        <Box>
          <Carousel
            className={classes.carouselPagination}
            itemsToScroll={4}
            itemsToShow={4}
            enableMouseSwipe={true}
            enableAutoPlay={false}
            renderArrow={myArrow}
            breakPoints={breakPoints}
            outerSpacing={0}
            pagination={true}
          >
            {Supporting &&
              Supporting.map((item) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      style={{
                        backgroundImage: `url(${item?.user_img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "100%",
                        width: "84px",
                        height: "84px",
                        marginBottom: "8px",
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Urbanist !important",
                        fontStyle: "normal !important",
                        fontWeight: "400 !important",
                        fontSize: "16px !important",
                        lineHeight: "19px !important",
                        color: "#fff !important",
                        marginBottom: "8px",
                      }}
                    >
                      {item?.user_name}
                    </Typography>
                    <Button
                      sx={{
                        border: "1px solid #FF8200",
                        borderRadius: "30px",
                        padding: "8px 12px",
                        transition: "all 250ms ease",
                        "&:hover": {
                          background: "rgba(255, 130, 0, 0.2)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Urbanist !important",
                          fontStyle: "normal !important",
                          fontWeight: "600 !important",
                          fontSize: "12px !important",
                          lineHeight: "14px !important",
                          color: "#FF8200 !important",
                          textTransform: "capitalize",
                        }}
                      >
                        Supporting
                      </Typography>
                    </Button>
                  </Box>
                );
              })}
          </Carousel>
        </Box>
        {/* 
      <Box
          display={"flex"}
          sx={{
            borderBottom: "2px solid #FF1C51",
            paddingBottom: "5.5px",
            width: "70%",
            marginBottom: "13px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "600",
              marginRight: "10px",
            }}
          >
            Education
          </Typography>
          { isMyProfile &&   <IconButton>
            <EditIcon
              className={classes.editIconProfile}
              onClick={() => setuserModal(true)}
            />
          </IconButton> }
        </Box>
        <Box display={"flex"} sx={{ marginBottom: "14px" }}>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "16px", fontWeight: "400" }}
          >
            {Education}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          sx={{
            borderBottom: "2px solid #FF1C51",
            paddingBottom: "5.5px",
            width: "70%",
            marginBottom: "13px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "600",
              marginRight: "10px",
            }}
          >
            Contact
          </Typography>
          { isMyProfile &&  <IconButton>
            <EditIcon
              className={classes.editIconProfile}
              onClick={() => setuserModal(true)}
            />
          </IconButton> }
        </Box>
        <Box display={"flex"} sx={{ marginBottom: "14px" }}>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "16px", fontWeight: "400" }}
          >
            {Contact}{" "}
          </Typography>
        </Box>
      */}
        {/* <ExploreTitle title="Events" /> */}
      </Box>

      {/* {Events.length ? (
        <Box sx={{ padding: "0px 20px", position: "relative" }}>
          <Carousel
            itemsToScroll={3}
            enableMouseSwipe={false}
            enableAutoPlay={false}
            renderArrow={myArrow}
            breakPoints={breakPoints}
            outerSpacing={-10}
            pagination={false}
          >
            {Events.map((item, index) => (
              <UpcomingEvents
                key={index}
                item={item}
                getEvents={() => {
                  return true;
                }}
              />
            ))}
            {Array.from({ length: 6 }).map((item, index) => (
            <UpcomingEvents
              id={index}
              name={"New Event"}
              date={new Date().toString()}
              time={"11:00"}
              getEvents={() => {
                return true;
              }}
            />
          ))}
          </Carousel>
        </Box>
      ) : (
        <Typography align="center"> No Events </Typography>
      )} */}

      <Dialog
        classes={{ paper: classes.paper }}
        open={userModal}
        onClose={() => {
          setuserModal(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: "24px",
            backgroundColor: "#434343",
            maxWidth: 870,
          },
        }}
      >
        <DialogContent
          sx={{ padding: 0, borderRadius: "24px", border: "3px solid #434343" }}
        >
          <Box
            sx={{
              padding: "31px 36px",
              color: "white",
              fontFamily: "Poppins",
            }}
          >
            <Stack direction="row" justifyContent={"center"}>
              {profilePicUploading ? (
                <CircularProgress sx={{ color: "#FF1C51" }}></CircularProgress>
              ) : (
                <img
                  src={
                    ProfilePicPrev
                      ? ProfilePicPrev
                      : "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png"
                  }
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                  alt="img"
                />
              )}
            </Stack>
            <ExploreTitle
              title="Profile Picture"
              subtitle={
                <Typography
                  variant="span"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "12px !important",
                    fontWeight: "500",
                  }}
                >
                  (Please attach *.JPG, *.PNG image files)
                </Typography>
              }
            />

            <Box display={"flex"} sx={{ marginBottom: "14px" }}>
              <input
                hidden
                type="file"
                id="profilePictureUpload"
                onChange={onFileChange2}
                accept="image/*"
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF1C51",
                  padding: "5px 50px",
                  borderRadius: "30px",
                  fontFamily: "poppins",
                  textTransform: "capitalize",
                  fontSize: "20px",
                  fontWeight: "500",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#FF1C51 !important",
                    boxShadow: "none",
                  },
                }}
                onClick={() => uploadProfilePicHandle()}
              >
                Upload
              </Button>{" "}
              &nbsp;&nbsp;&nbsp;
              {ProfilePicPrev && (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF1C51",
                    padding: "5px 50px",
                    borderRadius: "30px",
                    fontFamily: "poppins",
                    textTransform: "capitalize",
                    fontSize: "20px",
                    fontWeight: "500",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#FF1C51 !important",
                      boxShadow: "none",
                    },
                  }}
                  onClick={() => removePic()}
                >
                  Remove
                </Button>
              )}
            </Box>

            <ExploreTitle title={"Name"} />
            <Box display={"flex"} sx={{ marginBottom: "14px" }}>
              <TextField
                value={Name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  border: "solid 1px #FF1C51",
                  borderRadius: "5px",
                  width: "100%",
                  input: { color: "white" },
                }}
              />
            </Box>
            <ExploreTitle title="Bio" />
            <Box display={"flex"} sx={{ marginBottom: "14px" }}>
              <TextField
                value={Bio}
                onChange={(e) => setBio(e.target.value)}
                sx={{
                  border: "solid 1px #FF1C51",
                  borderRadius: "5px",
                  width: "100%",
                  input: { color: "white" },
                }}
              />
            </Box>
            <ExploreTitle title="Tagline" />

            <Box display={"flex"} sx={{ marginBottom: "14px" }}>
              <TextField
                value={tagline}
                onChange={(e) => settagline(e.target.value)}
                sx={{
                  border: "solid 1px #FF1C51",
                  borderRadius: "5px",
                  width: "100%",
                  input: { color: "white" },
                }}
              />
            </Box>

            <ExploreTitle title="Experience" />

            <Box display={"flex"} sx={{ marginBottom: "14px" }}>
              <TextField
                value={Experience}
                onChange={(e) => setExperience(e.target.value)}
                multiline
                rows={4}
                maxRows={6}
                inputProps={{
                  style: {
                    color: "white",
                  },
                }}
                sx={{
                  border: "solid 1px #FF1C51",
                  borderRadius: "5px",
                  width: "100%",
                  input: { color: "white" },
                }}
              />
            </Box>
            {/*  <Box
              display={"flex"}
              sx={{
                borderBottom: "2px solid #FF1C51",
                paddingBottom: "5.5px",
                width: "70%",
                marginBottom: "13px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                Education
              </Typography>
            </Box>
            <Box display={"flex"} sx={{ marginBottom: "14px" }}>
              <TextField
                value={Education}
                onChange={(e) => setEducation(e.target.value)}
                sx={{
                  border: "solid 1px #FF1C51",
                  borderRadius: "5px",
                  width: "100%",
                  input: { color: "white" },
                }}
              />
            </Box>
            <Box
              display={"flex"}
              sx={{
                borderBottom: "2px solid #FF1C51",
                paddingBottom: "5.5px",
                width: "70%",
                marginBottom: "13px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                Contact
              </Typography>
            </Box>
            <Box display={"flex"} sx={{ marginBottom: "14px" }}>
              <TextField
                value={Contact}
                onChange={(e) => setContact(e.target.value)}
                sx={{
                  border: "solid 1px #FF1C51",
                  borderRadius: "5px",
                  width: "100%",
                  input: { color: "white" },
                }}
              />
              </Box> */}
          </Box>
          <Button
            variant="contained"
            sx={{
              float: "right",
              marginBottom: "23px",
              marginRight: "26px",
              backgroundColor: "#FF1C51",
              padding: "5px 50px",
              borderRadius: "30px",
              fontFamily: "poppins",
              textTransform: "capitalize",
              fontSize: "20px",
              fontWeight: "500",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#FF1C51 !important",
                boxShadow: "none",
              },
            }}
            onClick={updateUserProfile}
          >
            Update
          </Button>
        </DialogContent>
        <IconButton
          onClick={() => {
            setuserModal(false);
          }}
          className={classes.customizedButton}
        >
          <CloseIcon fontSize={"large"} />
        </IconButton>
      </Dialog>

      <Dialog
        classes={{ paper: classes.paper }}
        open={eventsModal}
        onClose={() => {
          seteventsModal(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: "24px",
            backgroundColor: "#434343",
            maxWidth: 870,
          },
        }}
      >
        <DialogContent
          sx={{ padding: 0, borderRadius: "24px", border: "3px solid #434343" }}
        >
          <Box
            sx={{
              padding: "31px 36px",
              color: "white",
              fontFamily: "Poppins",
              width: "41%",
            }}
          >
            <Box
              display={"flex"}
              sx={{
                borderBottom: "2px solid #FF1C51",
                paddingBottom: "5.5px",
                width: "70%",
                marginBottom: "13px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                Event Name
              </Typography>
            </Box>
            <Box display={"flex"} sx={{ marginBottom: "14px" }}>
              <TextField
                value={EventName}
                onChange={(e) => setEventName(e.target.value)}
                sx={{
                  border: "solid 1px #FF1C51",
                  borderRadius: "5px",
                  width: "100%",
                  input: { color: "white" },
                }}
              />
            </Box>

            <Box
              display={"flex"}
              sx={{
                borderBottom: "2px solid #FF1C51",
                paddingBottom: "10px 0px",
                width: "70%",
                marginBottom: "14px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                Pick Date And Time
              </Typography>
            </Box>

            <Box>
              <Flatpickr
                style={{
                  background: "gray",
                  color: "white",
                  borderRadius: "50px",
                  padding: "6px 0px 6px 46px",
                  border: "1px solid red",
                }}
                data-enable-time
                value={EventDate}
                onChange={([date]) => {
                  const m = moment(date);
                  setEventDate(m.format("YYYY-MM-DD HH:mm:ss"));
                  setEventTime(m.format(format));
                }}
              />
            </Box>

            {/*  <Box sx={{ marginBottom: "14px" }}>
              <DatePicker
                style={{
                  background: "gray",
                  color: "white",
                  borderRadius: "50px",
                  padding: "6px 0px 6px 46px",
                  border: "1px solid red",
                }}
                // selected={EventDate}
                // onChange={(e) => setEventDate(e)}
              />
            </Box>

            <Box
              display={"flex"}
              sx={{
                borderBottom: "2px solid #FF1C51",
                paddingBottom: "5.5px",
                width: "70%",
                marginBottom: "10px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                Pick Time
              </Typography>
            </Box>
            <Box sx={{ margin: "10px 0px" }}>
              <TimePicker
                showSecond={false}
                defaultValue={now}
                className="xxx"
                // format={format}
                inputReadOnly
                style={{ zInder: "999999" }}
                // onChange={(e) => setEventTime(e.format(format))}
              />
            </Box>
          */}
          </Box>

          <Button
            variant="contained"
            sx={{
              marginBottom: "23px",
              marginLeft: "33px",
              backgroundColor: "#FF1C51",
              padding: "5px 40px",
              borderRadius: "30px",
              fontFamily: "poppins",
              textTransform: "capitalize",
              fontSize: "20px",
              fontWeight: "500",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#FF1C51 !important",
                boxShadow: "none",
              },
            }}
            onClick={createEvent}
          >
            Add
          </Button>
        </DialogContent>
        <IconButton
          onClick={() => {
            seteventsModal(false);
          }}
          className={classes.customizedButton}
        >
          <CloseIcon fontSize={"large"} />
        </IconButton>
      </Dialog>
      <style jsx>
        {`
          .flatpickr-months .flatpickr-month,
          .flatpickr-current-month .flatpickr-monthDropdown-months,
          .flatpickr-weekdays,
          .flatpickr-day.selected,
          .flatpickr-day.startRange,
          .flatpickr-day.endRange,
          .flatpickr-day.selected.inRange,
          .flatpickr-day.startRange.inRange,
          .flatpickr-day.endRange.inRange,
          .flatpickr-day.selected:focus,
          .flatpickr-day.startRange:focus,
          .flatpickr-day.endRange:focus,
          .flatpickr-day.selected:hover,
          .flatpickr-day.startRange:hover,
          .flatpickr-day.endRange:hover,
          .flatpickr-day.selected.prevMonthDay,
          .flatpickr-day.startRange.prevMonthDay,
          .flatpickr-day.endRange.prevMonthDay,
          .flatpickr-day.selected.nextMonthDay,
          .flatpickr-day.startRange.nextMonthDay,
          .flatpickr-day.endRange.nextMonthDay,
          span.flatpickr-weekday {
            background: #ff1c51 !important;
            border-color: #ff1c51 !important;
          }
        `}
      </style>
    </Box>
  );
};

export default TabComponentAbout;
