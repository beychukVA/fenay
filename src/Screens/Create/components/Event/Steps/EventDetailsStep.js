import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  TextareaAutosize,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { EventStepsEnum } from "../../lib/EventStepsEnum";
import AddThumbnailIcon from "../../../../../assets/AddThumbnailIcon.svg";
import DatePickerIcon from "../../../../../assets/DatePickerIcon.svg";
import { EventCreatedDialog } from "../EventCreatedDialog";

const pricing = [
  {
    value: "$4.99",
    label: "4.99",
  },
  {
    value: "$9.99",
    label: "9.99",
  },
  {
    value: "$19.99",
    label: "19.99",
  },
];

const genres = [
  {
    value: "Alternative",
    label: "Alternative",
  },
  {
    value: "Blues",
    label: "Blues",
  },
  {
    value: "Bollywood",
    label: "Bollywood",
  },
  {
    value: "Classical",
    label: "Classical",
  },
  {
    value: "Country",
    label: "Country",
  },
  {
    value: "EDM",
    label: "EDM",
  },
  {
    value: "Folk",
    label: "Folk",
  },
  {
    value: "Funk",
    label: "Funk",
  },
  {
    value: "Fusion",
    label: "Fusion",
  },
  {
    value: "HipHop",
    label: "HipHop",
  },
  {
    value: "Indie",
    label: "Indie",
  },
  {
    value: "Instrumental",
    label: "Instrumental",
  },
  {
    value: "Jazz",
    label: "Jazz",
  },
  {
    value: "K-Pop",
    label: "K-Pop",
  },
  {
    value: "Latin",
    label: "Latin",
  },
  {
    value: "Metal",
    label: "Metal",
  },
  {
    value: "Pop",
    label: "Pop",
  },
  {
    value: "Punk",
    label: "Punk",
  },
  {
    value: "R&B",
    label: "R&B",
  },
];

const passes = [
  {
    value: "10",
    label: "10",
  },
  {
    value: "50",
    label: "50",
  },
  {
    value: "100",
    label: "100",
  },
];

const thumbnailFileTypes = [".png", ".gif", ".webp"];

export const EventDetailsStep = ({ setStep, setData, data }) => {
  const maxFileSize = 31457280;
  const matches = useMediaQuery("(max-width:768px)");
  const [isEventCreatedDialogOpne, setEventCreatedDialogOpne] = useState(false);
  const inputThumbnailRef = useRef(null);
  const [thumbnailError, setThumbnailError] = useState(false);

  const currPricing = pricing?.find((price) => price?.value === data?.pricing);

  const [values, setValues] = useState({
    pricing: !currPricing ? pricing[0].value : currPricing.value,
    HowManyToRelease:
      data?.HowManyToRelease === "" ? "" : data?.HowManyToRelease,
    eventName: data?.eventName || "",
    eventType: data?.eventType === "" ? "" : data?.eventType,
    eventDate: data?.eventDate || "",
    description: data?.description || "",
    thumbnail: data?.thumbnail || "",
    liveVRLink: data?.liveVRLink || "",
    liveVideoLink: data?.liveVideoLink || "",
    backgstagePass: data?.backgstagePass || "",
  });

  const canMarketNext =
    !values?.pricing ||
    !values?.HowManyToRelease ||
    !values?.eventName ||
    !values?.eventType ||
    !values?.eventDate ||
    !values?.description ||
    !values?.thumbnail ||
    !values?.liveVRLink ||
    !values?.liveVideoLink;

  const canFansNext =
    !values?.pricing ||
    !values?.HowManyToRelease ||
    !values?.eventName ||
    !values?.eventType ||
    !values?.eventDate ||
    !values?.description ||
    !values?.thumbnail ||
    !values?.liveVRLink ||
    !values?.liveVideoLink;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setData((prev) => ({ ...prev, [prop]: event.target.value }));
  };

  useEffect(() => setData((prev) => ({ ...prev, ...values })), []);

  const handleThumbnailChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      if (
        e.target.files[0]?.size > maxFileSize ||
        !thumbnailFileTypes.includes(
          `.${e.target.files[0]?.name?.split(".")[1]}`
        )
      ) {
        setThumbnailError(true);
        return;
      }
      setValues({ ...values, thumbnail: e.target.files[0] });
      setData((prev) => ({ ...prev, thumbnail: e.target.files[0] }));
    }
  };

  const onThumbnailButtonClick = () => {
    setThumbnailError(false);
    inputThumbnailRef.current.click();
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
      {/** Pricing Details */}
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "28px",
          lineHeight: "34px",
          color: "#fff",
          letterSpacing: "0.2px",
          marginBottom: "48px",
        }}
      >
        Pricing details
      </Typography>
      {data?.songAudience === "For fans" && (
        <Box
          sx={{
            marginBottom: "70px",
            width: "100%",
            maxWidth: "746px",
            "& .MuiFormControl-root": {
              width: "100%",
            },
            "& #outlined-backgstage-pass-input": {
              padding: "0",
            },
          }}
        >
          <TextField
            id="outlined-backgstage-pass-input"
            label="Choose backstage pass"
            placeholder="Choose pass"
            select
            value={values?.backgstagePass}
            variant="outlined"
            onChange={handleChange("backgstagePass")}
            sx={{
              "& label.MuiFormLabel-filled": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& label.Mui-focused": {
                color: "#FF8200 !important",
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
              },
              "& input": {
                padding: "0",
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "14px 20px",
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
            }}
          >
            {passes.map((option) => (
              <MenuItem
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255, 130, 0, 0.16)",
                  },
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: matches ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginBottom: "48px",
            width: { xs: "100%", lg: "366px" },
            "& .MuiFormControl-root": {
              width: "100%",
            },
            "& #outlined-pricing-input": {
              padding: "0",
            },
          }}
        >
          <TextField
            id="outlined-pricing-input"
            label="Pricing"
            select
            value={values?.pricing}
            variant="outlined"
            onChange={handleChange("pricing")}
            sx={{
              "& label.MuiFormLabel-filled": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& label.Mui-focused": {
                color: "#FF8200 !important",
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
              },
              "& input": {
                padding: "0",
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "14px 20px",
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
            }}
          >
            {pricing.map((option) => (
              <MenuItem
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255, 130, 0, 0.16)",
                  },
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <FormControl
          sx={{
            marginBottom: "48px",
            marginLeft: matches ? "0" : "16px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-how-many-to-release-input"
            label="How many to release?"
            type="text"
            variant="outlined"
            value={values?.HowManyToRelease}
            onChange={handleChange("HowManyToRelease")}
            sx={{
              "& label.MuiFormLabel-filled": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& label.Mui-focused": {
                color: "#FF8200",
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
              },
              "& input": {
                padding: "0",
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
            }}
          />
        </FormControl>
      </Box>
      {/** Upload your file */}
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "28px",
          lineHeight: "34px",
          color: "#fff",
          letterSpacing: "0.2px",
          marginBottom: "24px",
        }}
      >
        Upload your file
      </Typography>
      {/** File */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          maxWidth: "426px",
          marginBottom: "48px",
        }}
      >
        {/** Thumbnail */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            marginRight: "16px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "130%",
              color: "#D5D4D8",
            }}
          >
            Upload Thumbnail
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "130%",
              color: thumbnailError ? "#EA3B56" : "#D5D4D8",
              marginBottom: "12px",
            }}
          >
            PNG, GIF, WEBP Max 30mb.
          </Typography>
          <Box
            sx={{
              position: "relative",
              zIndex: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              background: "#FFF2E5",
              borderRadius: "8px",
              height: "238px",
            }}
          >
            <Button
              onClick={onThumbnailButtonClick}
              sx={{
                position: "absolute",
                top: "20px",
                right: "20px",
                zIndex: "1",
                padding: "6px 12px",
                background: "#FF8200",
                borderRadius: "40px",
                transition: "all 250ms ease",
                "&:hover": {
                  background: "rgba(255, 130, 0, 0.8)",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "130%",
                  color: "#000",
                  textTransform: "none",
                }}
              >
                Upload
              </Typography>
              <input
                ref={inputThumbnailRef}
                onChange={handleThumbnailChange}
                accept={thumbnailFileTypes.join(", ")}
                type="file"
                hidden
              />
            </Button>
            {values?.thumbnail ? (
              <img
                src={window.URL.createObjectURL(values?.thumbnail)}
                alt={values?.thumbnail?.name}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                }}
              />
            ) : (
              <img
                src={AddThumbnailIcon}
                alt="Thumbnail"
                style={{
                  width: "60px",
                  height: "60px",
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
      {/** Event details */}
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "28px",
          lineHeight: "34px",
          color: "#fff",
          letterSpacing: "0.2px",
          marginBottom: "48px",
        }}
      >
        Event details
      </Typography>
      {/** Inputs 1 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: matches ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <FormControl
          sx={{
            marginBottom: "48px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-event-name-input"
            label="Event name"
            type="text"
            variant="outlined"
            value={values?.eventName}
            onChange={handleChange("eventName")}
            sx={{
              "& label.MuiFormLabel-filled": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& label.Mui-focused": {
                color: "#FF8200",
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
              },
              "& input": {
                padding: "0",
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
            }}
          />
        </FormControl>
        <Box
          sx={{
            marginBottom: "48px",
            marginLeft: matches ? "0" : "16px",
            width: { xs: "100%", lg: "366px" },
            "& .MuiFormControl-root": {
              width: "100%",
            },
            "& #outlined-event-type-input": {
              padding: "0",
            },
          }}
        >
          <TextField
            id="outlined-event-type-input"
            label="Event type"
            select
            value={values?.eventType}
            variant="outlined"
            onChange={handleChange("eventType")}
            sx={{
              "& label.MuiFormLabel-filled": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& label.Mui-focused": {
                color: "#FF8200 !important",
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
              },
              "& input": {
                padding: "0",
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "14px 20px",
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
            }}
          >
            {genres.map((option) => (
              <MenuItem
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255, 130, 0, 0.16)",
                  },
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
      {/** Inputs 2 */}
      <FormControl
        sx={{
          marginBottom: "48px",
          width: "100%",
          maxWidth: "746px",
        }}
        variant="outlined"
      >
        <TextField
          id="outlined-event-date-input"
          label="Event date"
          type="datetime-local"
          variant="outlined"
          value={values?.eventDate}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("eventDate")}
          sx={{
            "input[type=date]::-webkit-calendar-picker-indicator": {
              background: "transparent",
            },
            "input[type=date]": {
              background: `url(${DatePickerIcon}) no-repeat 100% 50%`,
            },
            "& label.MuiInputLabel-root": {
              top: "-16px !important",
              left: "-16px !important",
              fontFamily: "Work Sans !important",
              fontStyle: "normal !important",
              fontWeight: "500 !important",
              fontSize: "16px !important",
              lineHeight: "140% !important",
              letterSpacing: "0.2px !important",
              color: "#D5D4D8 !important",
            },
            "& label.Mui-focused": {
              color: "#FF8200 !important",
              top: "-16px !important",
              left: "-16px !important",
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "140%",
              letterSpacing: "0.2px",
            },
            "& input": {
              padding: "0",
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "140%",
              letterSpacing: "0.2px",
              color: "#9E9E9E",
            },
            "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
              {
                marginLeft: "0",
              },
            padding: "15px 20px",
            border: "1px solid #6B6A6A",
            borderRadius: "10px",
            background: "#2C2C3D",
          }}
        />
      </FormControl>
      {/** Inputs 3 */}
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "140%",
          color: "#D5D4D8",
          letterSpacing: "0.2px",
          marginBottom: "6px",
        }}
      >
        Description
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          maxWidth: "746px",
          height: "181px",
          background: "#2C2C3D",
          border: "1px solid #6B6A6A",
          borderRadius: "10px",
          padding: "15px 20px",
          marginBottom: "48px",
        }}
      >
        <FormControl
          sx={{
            width: "100%",
            height: "100%",
            // margin: "0 10px",
            "textarea::placeholder": {
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "140%",
              color: "rgba(255, 255, 255, 0.6)",
            },
          }}
          variant="outlined"
        >
          <TextareaAutosize
            maxRows={7}
            minRows={1}
            value={values?.description}
            placeholder="Event description"
            onChange={handleChange("description")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              border: "none",
              outline: "none",
              borderRadius: "0",
              background: "inherit",
              color: "#9E9E9E",
              resize: "none",
              padding: "0 5px 0 0",
            }}
          />
        </FormControl>
      </Box>
      {/** Event links */}
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "28px",
          lineHeight: "34px",
          color: "#fff",
          letterSpacing: "0.2px",
          marginBottom: "48px",
        }}
      >
        Event links
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: matches ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <FormControl
          sx={{
            marginBottom: "48px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-live-vr-Link-input"
            label="Live VR streaming"
            placeholder="Live VR Link"
            type="text"
            variant="outlined"
            value={values?.liveVRLink}
            onChange={handleChange("liveVRLink")}
            sx={{
              "& label.MuiFormLabel-filled": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& label.Mui-focused": {
                color: "#FF8200",
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
              },
              "& input": {
                padding: "0",
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
            }}
          />
        </FormControl>
        <FormControl
          sx={{
            marginBottom: "48px",
            marginLeft: matches ? "0" : "16px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-live-video-link-input"
            label="Live streaming"
            placeholder="Live video Link"
            type="text"
            variant="outlined"
            value={values?.liveVideoLink}
            onChange={handleChange("liveVideoLink")}
            sx={{
              "& label.MuiFormLabel-filled": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& label.Mui-focused": {
                color: "#FF8200",
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
              },
              "& input": {
                padding: "0",
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
            }}
          />
        </FormControl>
      </Box>
      <Button
        disabled={
          data?.songAudience === "For fans" ? canFansNext : canMarketNext
        }
        sx={{
          background: "#FF8200",
          borderRadius: "50px",
          padding: "16px 71.5px",
          transition: "all 250ms ease",
          "&:hover": {
            background: "rgba(255, 130, 0, 0.8)",
          },
          "&.MuiButton-root.Mui-disabled": {
            background: "rgba(255, 255, 255, 0.3)",
          },
        }}
        onClick={() => {
          if (data?.songAudience === "For fans") {
            setEventCreatedDialogOpne(true);
            return;
          }
          setStep(EventStepsEnum.EVENT_ROYALITIES);
        }}
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
      <EventCreatedDialog
        isEventCreatedDialogOpne={isEventCreatedDialogOpne}
        setEventCreatedDialogOpne={setEventCreatedDialogOpne}
      />
    </Box>
  );
};
