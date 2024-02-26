import React, { useState } from "react";
import { useStyles } from "../../constant/customStyle";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  InputAdornment,
  Typography,
  useMediaQuery,
  TextField,
  Autocomplete,
} from "@mui/material";
import HeaderComponent from "../../component/Header";
import FooterComponent from "../../component/Footer";
import ArrowLeftWhite from "../../assets/ArrowLeftWhite.svg";
import IconSearch from "../../assets/IconSearch.svg";
import { SongsTab } from "./components/Tabs/SongsTab";
import { MerchTab } from "./components/Tabs/MerchTab";
import { EventsTab } from "./components/Tabs/EventsTab";
import { BackstagePassTab } from "./components/Tabs/BackstagePassTab";
import { Select } from "./components/Select";

const tabs = [
  {
    id: 1,
    name: "Songs",
  },
  {
    id: 2,
    name: "Merch",
  },
  {
    id: 3,
    name: "Events",
  },
  {
    id: 4,
    name: "Backstage Pass",
  },
];

const soundsSelects = {
  genres: [{ label: "All genre", value: "All genre" }],
  time: [{ label: "Recent", value: "Recent" }],
};

const merchSelects = {
  types: [{ label: "All types", value: "All types" }],
  time: [{ label: "Recent", value: "Recent" }],
};

const eventsSelects = {
  types: [{ label: "All types", value: "All types" }],
  time: [{ label: "Recent", value: "Recent" }],
};

const backstageSelects = {
  artists: [{ label: "All artist", value: "All artist" }],
  time: [{ label: "Recent", value: "Recent" }],
};

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: "#fff",
  input: {
    color: "#fff",
  },
  ".MuiSvgIcon-root": {
    color: "#fff",
  },
  "& .MuiInputBase-input": {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    padding: "20px 10px 20px 20px",
    transition: theme.transitions.create("width"),
    // width: '100%',
    [theme.breakpoints.up("md")]: {
      width: "90%",
    },
  },
}));

export const Library = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:768px)");
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState(tabs[0]);
  const [selectedSoundGenre, setSoundGenre] = useState(
    soundsSelects?.genres[0]
  );
  const [selectedSoundTime, setSoundTime] = useState(soundsSelects?.time[0]);
  const [selectedMerchType, setMerchType] = useState(merchSelects?.types[0]);
  const [selectedMerchTime, setMerchTime] = useState(merchSelects?.time[0]);
  const [selectedEventsType, setEventsType] = useState(eventsSelects?.types[0]);
  const [selectedEventsTime, setEventsTime] = useState(eventsSelects?.time[0]);
  const [selectedBackstageType, setBackstageType] = useState(
    backstageSelects?.artists[0]
  );
  const [selectedBackstageTime, setBackstageTime] = useState(
    backstageSelects?.time[0]
  );

  const [openEventsTypesSearch, setOpenEventsTypesSearch] = useState(false);
  const [inputEventsTypesValue, setInputEventsTypesValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [searchedEventsTypes, setSearchedEventsTypes] = useState(
    eventsSelects?.types
  );
  // eslint-disable-next-line no-unused-vars
  const [selectedEventsTypes, setSelectedEventsTypes] = useState(null);
  const [isOpenEventTypeSearc, setOpenEventTypeSearc] = useState(false);

  const handleSoundGenreChange = (event) => setSoundGenre(event.target.value);
  const handleSoundTimeChange = (event) => setSoundTime(event.target.value);

  const handleMerchTypeChange = (event) => setMerchType(event.target.value);
  const handleMerchTimeChange = (event) => setMerchTime(event.target.value);

  const handleEventsTypeChange = (event) => setEventsType(event.target.value);
  const handleEventsTimeChange = (event) => setEventsTime(event.target.value);

  const handleBackstageTypeChange = (event) =>
    setBackstageType(event.target.value);
  const handleBackstageTimeChange = (event) =>
    setBackstageTime(event.target.value);

  const handleInputEventsTypesChange = async (event, newInputValue) => {
    if (newInputValue !== "undefined") {
      setInputEventsTypesValue(newInputValue);
    }
  };

  const handleSelectEventsType = (option) => setSelectedEventsTypes(option);
  const handleEventsTypesOpen = () => setOpenEventsTypesSearch(true);
  const handleEventTypeSearcOpen = () => setOpenEventTypeSearc(true);
  const handleEventTypeSearcClose = () => setOpenEventTypeSearc(false);

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
                xs: "0 15px 137px 15px !important",
                lg: "0 152px 137px 78px !important",
              }
            : {
                xs: "0 15px 137px 15px !important",
                lg: "0 152px 137px 78px !important",
              },
          background: "rgba(0, 0, 0, 0.25)",
          zIndex: "0",
        }}
      >
        {/** Back */}
        <Box
          onClick={() => {}}
          sx={{
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: "48px",
            marginBottom: "32px",
            cursor: "pointer !important",
            color: "#fff",
            transition: "all 250ms ease",
            "&:hover": {
              color: "rgba(255, 255, 255, 0.8)",
            },
            "&:hover div": {
              background: "rgba(255, 255, 255, 0.8)",
            },
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowLeftWhite}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowLeftWhite}) center center / 24px 24px no-repeat`,
              backgroundSize: "cover",
              transition: "all 250ms ease",
              background: "#fff",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "140%",
              color: "inherit",
              letterSpacing: "0.2px",
              marginLeft: "16px",
              transition: "all 250ms ease",
            }}
          >
            Back
          </Typography>
        </Box>
        {/** Tabs */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            marginBottom: "32px",
            "& :not(:first-of-type)": {
              marginLeft: "15px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              marginBottom: { xs: "20px", sm: "0" },
            }}
          >
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setCurrentTabSelected(tab)}
                sx={{
                  padding: "10px 15px",
                  border: "1px solid #FF8200",
                  borderRadius: "40px",
                  background:
                    currentTabSelected?.id === tab?.id
                      ? "#FF8200"
                      : "transparent",
                  "&:hover": {
                    background: "rgba(255, 130, 0, 0.3)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#fff",
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tab.name}
                </Typography>
              </Button>
            ))}
          </Box>
          {currentTabSelected.id === 1 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginLeft: "auto !important",
              }}
            >
              <Select
                selectedOption={selectedSoundGenre?.value}
                options={soundsSelects?.genres}
                handleOptionChange={handleSoundGenreChange}
              />
              <Select
                selectedOption={selectedSoundTime?.value}
                options={soundsSelects?.time}
                handleOptionChange={handleSoundTimeChange}
              />
            </Box>
          )}
          {currentTabSelected.id === 2 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginLeft: "auto !important",
              }}
            >
              <Select
                selectedOption={selectedMerchType?.value}
                options={merchSelects?.types}
                handleOptionChange={handleMerchTypeChange}
              />
              <Select
                selectedOption={selectedMerchTime?.value}
                options={merchSelects?.time}
                handleOptionChange={handleMerchTimeChange}
              />
            </Box>
          )}
          {currentTabSelected.id === 3 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginLeft: "auto !important",
              }}
            >
              <Autocomplete
                sx={{
                  border: isOpenEventTypeSearc ? "1px solid #515151" : "none",
                  borderRadius: "4px",
                  width: isOpenEventTypeSearc ? "365px" : "55px",
                  transition: "width 500ms ease",
                }}
                onBlur={() => handleEventTypeSearcClose()}
                onFocus={() => handleEventTypeSearcOpen()}
                id="combo-box-demo"
                open={openEventsTypesSearch}
                onOpen={handleEventsTypesOpen}
                onClose={() => setOpenEventsTypesSearch(false)}
                inputValue={inputEventsTypesValue}
                onInputChange={handleInputEventsTypesChange}
                options={searchedEventsTypes}
                getOptionLabel={(option) => option.value}
                renderOption={(props, option) => (
                  <Box
                    onClick={() => handleSelectEventsType(option)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "1em",
                      cursor: "pointer",
                      background: "#1d1d1d",
                      color: "#fff",
                      borderBottom: "solid 1px #3d3d3d",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "1em",
                        color: "#fff",
                      }}
                    >
                      {option?.value}
                    </div>
                  </Box>
                )}
                freeSolo
                renderInput={(params) => (
                  <StyledInputBase
                    {...params}
                    placeholder={`${
                      isOpenEventTypeSearc ? "Search event..." : ""
                    }`}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box
                            onClick={() => handleEventTypeSearcOpen()}
                            src={IconSearch}
                            sx={{
                              width: "24px",
                              height: "24px",
                              WebkitMask: `url(${IconSearch}) center center / 24px 24px no-repeat`,
                              mask: `url(${IconSearch}) center center / 24px 24px no-repeat`,
                              backgroundSize: "cover",
                              transition: "all 500ms ease",
                              "&": {
                                background: "#fff !important",
                              },
                              marginTop: isOpenEventTypeSearc ? "0" : "20px",
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Select
                selectedOption={selectedEventsType?.value}
                options={eventsSelects?.types}
                handleOptionChange={handleEventsTypeChange}
              />
              <Select
                selectedOption={selectedEventsTime?.value}
                options={eventsSelects?.time}
                handleOptionChange={handleEventsTimeChange}
              />
            </Box>
          )}
          {currentTabSelected.id === 4 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginLeft: "auto !important",
              }}
            >
              <Select
                selectedOption={selectedBackstageType?.value}
                options={backstageSelects?.artists}
                handleOptionChange={handleBackstageTypeChange}
              />
              <Select
                selectedOption={selectedBackstageTime?.value}
                options={backstageSelects?.time}
                handleOptionChange={handleBackstageTimeChange}
              />
            </Box>
          )}
        </Box>
        {/** Tabs Content */}

        {currentTabSelected.id === 1 && <SongsTab />}
        {currentTabSelected.id === 2 && <MerchTab />}
        {currentTabSelected.id === 3 && <EventsTab />}
        {currentTabSelected.id === 4 && <BackstagePassTab />}
      </Box>
      <FooterComponent />
    </Box>
  );
};
