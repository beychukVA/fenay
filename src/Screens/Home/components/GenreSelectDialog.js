import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  TextField,
  Autocomplete,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useStyles } from "../../../constant/customStyle";
import CloseXIcon from "../../../assets/CloseXIcon.svg";
import IconSearch from "../../../assets/IconSearch.svg";
import Alternative from "../../../assets/genre/Alternative.png";
import Blues from "../../../assets/genre/Blues.png";
import Bollywood from "../../../assets/genre/Bollywood.png";
import Classical from "../../../assets/genre/Classical.png";
import Country from "../../../assets/genre/Country.png";
import EDM from "../../../assets/genre/EDM.png";
import Folk from "../../../assets/genre/Folk.png";
import Funk from "../../../assets/genre/Funk.png";
import Fusion from "../../../assets/genre/Fusion.png";
import HipHop from "../../../assets/genre/HipHop.png";
import Indie from "../../../assets/genre/Indie.png";
import Instrumental from "../../../assets/genre/Instrumental.png";
import Jazz from "../../../assets/genre/Jazz.png";
import KPop from "../../../assets/genre/K-Pop.png";
import Latin from "../../../assets/genre/Latin.png";
import Metal from "../../../assets/genre/Metal.png";
import Pop from "../../../assets/genre/Pop.png";
import Punk from "../../../assets/genre/Punk.png";
import RnB from "../../../assets/genre/R&B.png";
import Rock from "../../../assets/genre/Rock.png";
import SingerSongwriter from "../../../assets/genre/SingerSongwriter.png";

const genres = [
  {
    id: 1,
    icon: Alternative,
    name: "Alternative",
  },
  {
    id: 2,
    icon: Blues,
    name: "Blues",
  },
  {
    id: 3,
    icon: Bollywood,
    name: "Bollywood",
  },
  {
    id: 4,
    icon: Classical,
    name: "Classical",
  },
  {
    id: 5,
    icon: Country,
    name: "Country",
  },
  {
    id: 6,
    icon: EDM,
    name: "EDM",
  },
  {
    id: 7,
    icon: Folk,
    name: "Folk",
  },
  {
    id: 8,
    icon: Funk,
    name: "Funk",
  },
  {
    id: 9,
    icon: Fusion,
    name: "Fusion",
  },
  {
    id: 10,
    icon: HipHop,
    name: "HipHop",
  },
  {
    id: 11,
    icon: Indie,
    name: "Indie",
  },
  {
    id: 12,
    icon: Instrumental,
    name: "Instrumental",
  },
  {
    id: 13,
    icon: Jazz,
    name: "Jazz",
  },
  {
    id: 14,
    icon: KPop,
    name: "K-Pop",
  },
  {
    id: 15,
    icon: Latin,
    name: "Latin",
  },
  {
    id: 16,
    icon: Metal,
    name: "Metal",
  },
  {
    id: 17,
    icon: Pop,
    name: "Pop",
  },
  {
    id: 18,
    icon: Punk,
    name: "Punk",
  },
  {
    id: 19,
    icon: RnB,
    name: "R&B",
  },
  {
    id: 20,
    icon: SingerSongwriter,
    name: "SingerSongwriter",
  },
  {
    id: 21,
    icon: Rock,
    name: "Rock",
  },
];

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

export const GenreSelectDialog = ({ isGenreSelectOpne, setGenreSelect }) => {
  const classes = useStyles();
  const [openSearch, setOpenSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [searchedGenres, setsearchedGenres] = useState(genres);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleOpen = () => {
    // if (inputValue.length > 0) {
    setOpenSearch(true);
    // }
  };
  const handleInputChange = async (event, newInputValue) => {
    if (newInputValue !== "undefined") {
      setInputValue(newInputValue);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const clickSearchResult = (id) => {
    //select genre
    setOpenSearch(false);
  };

  const handleSelectGenre = (option) => {
    const genre = checkGenreSelected(option);
    if (!genre) {
      setSelectedGenres((prev) => {
        return [...prev, option];
      });
      return;
    }
    if (genre) {
      setSelectedGenres((prev) => {
        return [...prev].filter((genre) => genre.id !== option.id);
      });
      return;
    }
  };

  const checkGenreSelected = (option) =>
    selectedGenres.find((item) => item.id === option.id);

  const handleCloseDialog = () => {
    //send selected genres
    setGenreSelect(false);
  };

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      open={isGenreSelectOpne}
      maxWidth={"lg"}
      onClose={() => setGenreSelect(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      PaperProps={{
        style: {
          width: "765px",
          height: "744px",
          borderRadius: "8px",
          background: "rgba(24, 26, 32, 0.7)",
          backdropFilter: "blur(25px)",
          border: "1px solid rgba(255, 255, 255, 0.31)",
        },
      }}
    >
      <DialogContent
        sx={{
          position: "relative",
          padding: {
            xs: "68px 20px 0 20px !important",
            sm: "48px 80px 0 80px !important",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "32px",
            right: "32px",
            width: "32px",
            height: "32px",
            transition: "all 250ms ease",
            WebkitMask: `url(${CloseXIcon}) center center / 32px 32px no-repeat`,
            mask: `url(${CloseXIcon}) center center / 32px 32px no-repeat`,
            cursor: "pointer",
            "&:not(:hover)": {
              background: "rgba(255, 255, 255, 1)",
            },
            "&:hover": {
              background: "rgba(255, 255, 255, 0.6)",
            },
          }}
          onClick={() => setGenreSelect(false)}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: { xs: "26px", sm: "32px" },
              lineHeight: "140%",
              letterSpacing: "0.2px",
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            Select 5 or 6 genre you like
          </Typography>

          <Autocomplete
            sx={{
              border: "1px solid #515151",
              borderRadius: "4px",
              width: "100%",
              marginBottom: "32px",
            }}
            id="combo-box-demo"
            open={openSearch}
            onOpen={handleOpen}
            onClose={() => setOpenSearch(false)}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            options={searchedGenres}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
              <Box
                onClick={() => handleSelectGenre(option)}
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
                <IconButton
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundImage: `url(${option?.icon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "100%",
                    border: checkGenreSelected(option)
                      ? "3px solid #FF8200"
                      : "none",
                  }}
                  size="small"
                  color="primary"
                ></IconButton>
                <div
                  style={{
                    marginLeft: "1em",
                    color: checkGenreSelected(option) ? "#FF8200" : "#fff",
                  }}
                >
                  {option?.name}
                </div>
              </Box>
            )}
            freeSolo
            renderInput={(params) => (
              <StyledInputBase
                {...params}
                placeholder="Search genre..."
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src={IconSearch}
                        alt=""
                        style={{
                          width: "24px",
                          height: "24px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Box
            sx={{
              width: { xs: "100%", sm: "calc(100% + 32px)" },
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: { xs: "auto", sm: "100%" },
                height: "100%",
                overflow: "auto",
                marginLeft: "-32px",
                marginTop: "-32px",
              }}
            >
              {genres.map((genre) => (
                <Box
                  key={`${genre.name}${genre.id}`}
                  onClick={() => handleSelectGenre(genre)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexBasis: "calc(100% / 4 - 32px)",
                    maxWidth: "116px",
                    marginLeft: "32px",
                    marginTop: "32px",
                  }}
                >
                  <IconButton
                    style={{
                      width: "116px",
                      height: "116px",
                      backgroundImage: `url(${genre?.icon})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "100%",
                      marginBottom: "12px",
                      transition: "all 250ms ease",
                      border: checkGenreSelected(genre)
                        ? "3px solid #FF8200"
                        : "none",
                    }}
                    size="small"
                    color="primary"
                  ></IconButton>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "20px",
                      lineHeight: "125%",
                      letterSpacing: "0.2px",
                      transition: "all 250ms ease",
                      color: checkGenreSelected(genre) ? "#FF8200" : "#fff",
                    }}
                  >
                    {genre.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        {selectedGenres.length > 0 && (
          <Box
            sx={{
              position: "absolute",
              left: "0",
              bottom: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(22, 24, 29, 0.89)",
              width: "100%",
              height: "87px",
              padding: "15px auto",
            }}
          >
            <Button
              onClick={() => handleCloseDialog()}
              sx={{
                background: "#FF8200",
                borderRadius: "40px",
                padding: "19px 115px",
                transition: "all 250ms ease",
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
                  fontSize: "17px",
                  lineHeight: "20px",
                  color: "#000",
                  textTransform: "none",
                }}
              >
                Done
              </Typography>
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};
