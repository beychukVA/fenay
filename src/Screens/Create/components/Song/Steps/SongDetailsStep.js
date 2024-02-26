import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { SongStepsEnum } from "../../lib/SongStepsEnum";
import AddThumbnailIcon from "../../../../../assets/AddThumbnailIcon.svg";
import AddOriginalFileIcon from "../../../../../assets/AddOriginalFileIcon.svg";
import { SongDetailSingle } from "../SongDetailSingle";
import { SongDetailAlbum } from "../SongDetailAlbum";
import { SongCreatedDialog } from "../SongCreatedDialog";

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

const types = [
  {
    id: 1,
    name: "Single",
  },
  {
    id: 2,
    name: "Album",
  },
];

const thumbnailFileTypes = [".png", ".gif", ".webp"];
const originalFileTypes = [".mp4", ".MP4", ".mp3", ".MP3"];

export const SongDetailsStep = ({ setStep, setData, data }) => {
  const maxFileSize = 31457280;
  const matches = useMediaQuery("(max-width:768px)");
  const [isSongCreatedDialogOpne, setSongCreatedDialogOpne] = useState(false);
  const inputThumbnailRef = useRef(null);
  const inputOriginalFileRef = useRef(null);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [originalFileError, setOriginalFileError] = useState(false);

  const currType = types?.find((type) => type?.name === data?.type);
  const currPricing = pricing?.find((price) => price?.value === data?.pricing);

  const [values, setValues] = useState({
    pricing: !currPricing ? pricing[0].value : currPricing.value,
    HowManyToRelease:
      data?.HowManyToRelease === "" ? "" : data?.HowManyToRelease,
    type: !currType ? types[0].name : currType.name,
    genre: data?.genre === "" ? "" : data?.genre,
    songName: data?.songName === "" ? "" : data?.songName,
    album: data?.album || "",
    artist: data?.artist || "",
    description: data?.description || "",
    albumGenre: data?.albumGenre || "",
    thumbnail: data?.thumbnail || "",
    originalFile: data?.originalFile || "",
  });

  const canSingleNext =
    !values?.pricing ||
    !values?.HowManyToRelease ||
    !values?.genre ||
    !values?.songName ||
    !values?.artist ||
    !values?.description ||
    !values?.thumbnail ||
    !values?.originalFile;

  const canAlbumNext =
    !values?.pricing ||
    !values?.HowManyToRelease ||
    !values?.album ||
    !values?.albumGenre ||
    !values?.songName ||
    !values?.artist ||
    !values?.genre ||
    !values?.description ||
    !values?.thumbnail ||
    !values?.originalFile;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setData((prev) => ({ ...prev, [prop]: event.target.value }));
  };

  const handleTypeChange = (type) => {
    setValues({
      ...values,
      // ...{
      //   genre: "",
      //   songName: "",
      //   album: "",
      //   artist: "",
      //   description: "",
      //   albumGenre: "",
      //   thumbnail: "",
      //   originalFile: "",
      // },
      type: type?.name,
    });
    setData((prev) => ({ ...prev, ...values, type: type?.name }));
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

  const handleOriginalFileChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      if (
        e.target.files[0]?.size > maxFileSize ||
        !originalFileTypes.includes(
          `.${e.target.files[0]?.name?.split(".")[1]}`
        )
      ) {
        setOriginalFileError(true);
        return;
      }
      setValues({ ...values, originalFile: e.target.files[0] });
      setData((prev) => ({ ...prev, originalFile: e.target.files[0] }));
    }
  };

  const onThumbnailButtonClick = () => {
    setThumbnailError(false);
    inputThumbnailRef.current.click();
  };

  const onOriginalFileButtonClick = () => {
    setOriginalFileError(false);
    inputOriginalFileRef.current.click();
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "5px 6px",
          border: "1px solid #FF8200",
          borderRadius: "100px",
          marginBottom: "24px",
        }}
      >
        {types?.map((type) => (
          <Box
            onClick={() => handleTypeChange(type)}
            sx={{
              padding: "7px 24px",
              borderRadius: "100px",
              cursor: "pointer",
              background:
                values?.type === type?.name ? "#FF8200" : "transparent",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "125%",
                color: values?.type === type?.name ? "#000" : "#FF8200",
                letterSpacing: "0.2px",
              }}
            >
              {type?.name}
            </Typography>
          </Box>
        ))}
      </Box>
      {/** File */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          maxWidth: "746px",
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
        {/** Original File */}
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
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "130%",
              color: "#D5D4D8",
            }}
          >
            Upload Original File
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "130%",
              color: originalFileError ? "#EA3B56" : "#D5D4D8",
              marginBottom: "12px",
            }}
          >
            MP4 or MP3. Max 30mb.
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
              onClick={onOriginalFileButtonClick}
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
                ref={inputOriginalFileRef}
                onChange={handleOriginalFileChange}
                accept={originalFileTypes.join(", ")}
                type="file"
                hidden
              />
            </Button>
            {values?.originalFile ? (
              <>
                {values?.originalFile?.name?.split(".")[1] === "mp4" && (
                  <video
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "8px",
                    }}
                    src={window.URL.createObjectURL(values?.originalFile)}
                    controls
                  ></video>
                )}
                {values?.originalFile?.name?.split(".")[1] === "mp3" && (
                  <figure>
                    <figcaption>{values?.originalFile?.name}:</figcaption>
                    <audio
                      src={window.URL.createObjectURL(values?.originalFile)}
                      controls
                    ></audio>
                  </figure>
                )}
              </>
            ) : (
              <img
                src={AddOriginalFileIcon}
                alt="Original File"
                style={{
                  width: "52.5px",
                  height: "52.5px",
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
      {/** Song details */}
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
        Song details
      </Typography>
      {values?.type === "Single" && (
        <SongDetailSingle values={values} handleChange={handleChange} />
      )}
      {values?.type === "Album" && (
        <SongDetailAlbum values={values} handleChange={handleChange} />
      )}

      <Button
        disabled={values?.type === "Single" ? canSingleNext : canAlbumNext}
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
            setSongCreatedDialogOpne(true);
            return;
          }
          setStep(SongStepsEnum.SONG_ROYALITIES);
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
      <SongCreatedDialog
        isSongCreatedDialogOpne={isSongCreatedDialogOpne}
        setSongCreatedDialogOpne={setSongCreatedDialogOpne}
      />
    </Box>
  );
};
