import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Select from "@mui/material/Select";
import "flatpickr/dist/themes/material_green.css";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import { GrCirclePlay } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BootstrapInput } from "../../component/Textfield/Bootstrap";
import { useStyles } from "../../constant/customStyle";
import { show_success } from "../../helpers/toast";
import ExploreTitle from "../../Screens/Home/components/ExploreTitle";
import { CreateNFT } from "../../Services/CreateNFT";
import { UploadFile } from "../../Services/UploadFile";
import { show_toast } from "../../helpers/toast";
import "./steper.css";
import { CreateAd } from "../../Services/Ad";

const steps = ["", "", "", "", ""];

const buttonStep = [
  {
    id: 1,
    name: "For market",
  },
  //   {
  //     id: 2,
  //     name: "Timed  Auction",
  //   },
  //   {
  //     id: 3,
  //     name: "Ongoing Auction",
  //   },
  {
    id: 4,
    name: "For Fans",
  },
];

const pricingData = [
  {
    value: {
      price: 1.99,
      productId: "org.reactjs.native.example.social_media.nft_1",
    },
    name: "$1.99",
  },
  {
    value: {
      price: 4.99,
      productId: "org.reactjs.native.example.social_media.nft_2",
    },
    name: "$4.99",
  },
  {
    value: {
      price: 9.99,
      productId: "org.reactjs.native.example.social_media.nft_3",
    },
    name: "$9.99",
  },
  {
    value: {
      price: 14.99,
      productId: "org.reactjs.native.example.social_media.nft_4",
    },
    name: "$14.99",
  },
  {
    value: {
      price: 19.99,
      productId: "org.reactjs.native.example.socialmedia.nft5",
    },
    name: "$19.99",
  },
  {
    value: {
      price: 24.99,
      productId: "org.reactjs.native.example.socialmedia.nft6",
    },
    name: "$24.99",
  },
  {
    value: {
      price: 29.99,
      productId: "org.reactjs.native.example.socialmedia.nft7",
    },
    name: "$29.99",
  },
  {
    value: {
      price: 39.99,
      productId: "org.reactjs.native.example.socialmedia.nft8",
    },
    name: "$39.99",
  },
  {
    value: {
      price: 49.99,
      productId: "org.reactjs.native.example.socialmedia.nft9",
    },
    name: "$49.99",
  },
  {
    value: {
      price: 59.99,
      productId: "org.reactjs.native.example.socialmedia.nft10",
    },
    name: "$59.99",
  },
  {
    value: {
      price: 69.99,
      productId: "org.reactjs.native.example.socialmedia.nft11",
    },
    name: "$69.99",
  },
  {
    value: {
      price: 79.99,
      productId: "org.reactjs.native.example.socialmedia.nft12",
    },
    name: "$79.99",
  },
  {
    value: {
      price: 89.99,
      productId: "org.reactjs.native.example.socialmedia.nft13",
    },
    name: "$89.99",
  },
  {
    value: {
      price: 99.99,
      productId: "org.reactjs.native.example.socialmedia.nft14",
    },
    name: "$99.99",
  },
  {
    value: {
      price: 119.99,
      productId: "org.reactjs.native.example.socialmedia.nft15",
    },
    name: "$119.99",
  },
  {
    value: {
      price: 139.99,
      productId: "org.reactjs.native.example.socialmedia.nft16",
    },
    name: "$139.99",
  },
  {
    value: {
      price: 159.99,
      productId: "org.reactjs.native.example.socialmedia.nft17",
    },
    name: "$159.99",
  },
  {
    value: {
      price: 179.99,
      productId: "org.reactjs.native.example.socialmedia.nft18",
    },
    name: "$179.99",
  },
  {
    value: {
      price: 199.99,
      productId: "org.reactjs.native.example.socialmedia.nft19",
    },
    name: "$199.99",
  },
  {
    value: {
      price: 249.99,
      productId: "org.reactjs.native.example.socialmedia.nft20",
    },
    name: "$249.99",
  },
  {
    value: {
      price: 299.99,
      productId: "org.reactjs.native.example.socialmedia.nft21",
    },
    name: "$299.99",
  },
  {
    value: {
      price: 349.99,
      productId: "org.reactjs.native.example.socialmedia.nft22",
    },
    name: "$349.99",
  },
  {
    value: {
      price: 399.99,
      productId: "org.reactjs.native.example.socialmedia.nft23",
    },
    name: "$399.99",
  },
  {
    value: {
      price: 449.99,
      productId: "org.reactjs.native.example.socialmedia.nft24",
    },
    name: "$449.99",
  },
  {
    value: {
      price: 499.99,
      productId: "org.reactjs.native.example.socialmedia.nft25",
    },
    name: "$499.99",
  },
  {
    value: {
      price: 599.99,
      productId: "org.reactjs.native.example.socialmedia.nft26",
    },
    name: "$599.99",
  },
  {
    value: {
      price: 699.99,
      productId: "org.reactjs.native.example.socialmedia.nft27",
    },
    name: "$699.99",
  },
  {
    value: {
      price: 799.99,
      productId: "org.reactjs.native.example.socialmedia.nft28",
    },
    name: "$799.99",
  },
  {
    value: {
      price: 899.99,
      productId: "org.reactjs.native.example.socialmedia.nft29",
    },
    name: "$899.99",
  },
  {
    value: {
      price: 999.99,
      productId: "org.reactjs.native.example.socialmedia.nft30",
    },
    name: "$999.99",
  },
];

const eventType = [
  {
    value: "concert",
    name: "Concert",
  },
  { value: "clinic", name: "Clinic" },
  { value: "workshop", name: "Workshop" },
];

const nftGenre = [
  { title: "Rock", value: "rock" },
  { title: "Pop", value: "pop" },
  { title: "Jazz", value: "jazz" },
  { title: "Singer Songwriter", value: "singer songwriter" },
  { title: "Alternative", value: "alternative" },
  { title: "Indie", value: "indie" },
  { title: "Fusion", value: "fusion" },
  { title: "Metal", value: "metal" },
  { title: "Punk", value: "punk" },
  { title: "Blues", value: "blues" },
  { title: "Country", value: "country" },
  { title: "Folk", value: "folk" },
  { title: "Instrumental", value: "instrumental" },
  { title: "Classical", value: "classical" },
  { title: "Hip-Hop", value: "hip-hop" },
  { title: "Funk", value: "funk" },
  { title: "R&B", value: "r&b" },
  { title: "EDM", value: "edm" },
  { title: "Latin", value: "katin" },
  { title: "K-Pop", value: "k-pop" },
  { title: "Desi", value: "desi" },
];

const format = "HH:mm";
const now = moment().hour(0).minute(0);

const CustomStepper = () => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [selectItem, setSelectedItem] = useState(1);
  const [inputList, setInputList] = useState([{ royalties: "", name: "" }]);
  const [switchState, setSwitchState] = useState(false);

  const [mediaType, setMediaType] = useState("song");
  const [NFTPrice, setNFTPrice] = useState(0);
  const [NFTGenre, setNFTGenre] = useState(0);
  const [NFTSpecs, setNFTSpecs] = useState({
    name: "",
    description: "",
    properties: "",
  });
  const [NFTQuanity, setNFTQuantity] = useState(1);
  const [originalFile, setOriginalFile] = useState("");
  const [sampleFile, setSampleFile] = useState("");
  const [originalFileUploading, setOriginalFileUploading] = useState(false);
  const [sampleFileUploading, setSampleFileUploading] = useState(false);
  const [albumName, setAlbumName] = useState("");
  const [artist, setArtist] = useState("");
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [EventDate, setEventDate] = useState();
  const [EventTime, setEventTime] = useState();
  const [EventType, setEventType] = useState(0);

  const [finishLoading, setFinishLoading] = useState(false);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { royalties: "", name: "" }]);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleSwitchChange = (event) => {
    setSwitchState(!switchState);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = (e, number = 1) => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    console.log("NEW NUMBER", number);
    setActiveStep((prevActiveStep) => prevActiveStep + number);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    const numberToPrev = mediaType === "ad" && activeStep === 2 ? 2 : 1;
    setActiveStep((prevActiveStep) => prevActiveStep - numberToPrev);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = () => {};

  const SelectedItem = (id) => {
    setSelectedItem(id);
  };

  const selectMediaType = (type) => {
    setMediaType(type);
    const numberToSkip = type === "ad" && activeStep === 0 ? 2 : 1;
    handleNext("", numberToSkip);
  };

  const handleFileUpload = async (file, name) => {
    if (name === "original_file") {
      setOriginalFileUploading(true);

      if (file.type.split("/")[0] !== "audio") {
        show_toast("Please upload audio file");
        setOriginalFileUploading(false);
        return;
      }
    }
    if (name === "sample_file") {
      setSampleFileUploading(true);

      if (mediaType !== "ad" && file.type.split("/")[0] !== "image") {
        show_toast("Please upload image file");
        setSampleFileUploading(false);
        return;
      }
    }
    const res = await UploadFile(file);
    if (name === "original_file") {
      setOriginalFile(res.data.Location);
      setOriginalFileUploading(false);
    }
    if (name === "sample_file") {
      setSampleFile(res.data.Location);
      setSampleFileUploading(false);
    }
  };

  const handleFinish = async () => {
    let nftObj;
    if (mediaType === "event") {
      nftObj = {
        genre: NFTGenre,
        price: selectItem === 1 ? NFTPrice.price : 0,
        productID: selectItem === 1 ? NFTPrice.productId : "",
        totalQuantity: NFTQuanity,
        availableQuantity: NFTQuanity,
        artist: artist,
        desc: NFTSpecs.description,
        imgFile: sampleFile,
        type: selectItem === 1 ? "regular" : "access",
        category: "event",
        eventTime: EventDate,
        eventType: EventType,
      };
    } else if (mediaType === "song") {
      nftObj = {
        genre: NFTGenre,
        price: selectItem === 1 ? NFTPrice.price : 0,
        productID: selectItem === 1 ? NFTPrice.productId : "",
        totalQuantity: NFTQuanity,
        availableQuantity: NFTQuanity,
        album: albumName,
        artist: artist,
        desc: NFTSpecs.description,
        song: NFTSpecs.name,
        imgFile: sampleFile,
        audioFile: originalFile,
        type: selectItem === 1 ? "regular" : "access",
        category: "song",
      };
    } else if (mediaType === "ad") {
      setFinishLoading(true);
      let fileType;

      if (
        ["jpg", "JPG", "png", "PNG", "jpeg", "JPEG"].includes(
          sampleFile.split(".")[sampleFile.split(".").length - 1]
        )
      ) {
        fileType = "image";
      } else if (
        [
          "mp3",
          "acc",
          "mp4",
          "MP3",
          "MP4",
          "ACC",
          "ogg",
          "OGG",
          "wav",
          "WAV",
        ].includes(sampleFile.split(".")[sampleFile.split(".").length - 1])
      ) {
        fileType = "audio";
      } else {
        fileType = "text";
      }

      const adObj = {
        subject: NFTSpecs.name,
        price: NFTPrice.price,
        desc: NFTSpecs.description,
        file: sampleFile,
        type: fileType,
      };
      const res = await CreateAd(adObj);
      if (res) {
        setFinishLoading(false);
        show_success("Ad Created!");
        setMediaType("song");
        setNFTPrice(0);
        setNFTGenre(0);
        setNFTSpecs({
          name: "",
          description: "",
          properties: "",
        });
        setNFTQuantity(1);
        setOriginalFile("");
        setSampleFile("");
        setOriginalFileUploading(false);
        setSampleFileUploading(false);
        setAlbumName("");
        setArtist("");
        setActiveStep(1);
      }
      return;
    }
    setFinishLoading(true);
    const response = await CreateNFT(nftObj);
    if (response) {
      setFinishLoading(false);
      show_success("NFT Created!");
      setMediaType("song");
      setNFTPrice(0);
      setNFTGenre(0);
      setNFTSpecs({
        name: "",
        description: "",
        properties: "",
      });
      setNFTQuantity(1);
      setOriginalFile("");
      setSampleFile("");
      setOriginalFileUploading(false);
      setSampleFileUploading(false);
      setAlbumName("");
      setArtist("");
      setActiveStep(1);
    }
  };

  useEffect(() => {
    const m = moment();
    setEventDate(m.format("YYYY-MM-DDTHH:mm:ss"));
    setEventTime(m.format(format));
  }, []);

  useEffect(() => {
    const condition =
      activeStep === 1 &&
      selectItem === 1 &&
      (NFTPrice.price === "" ||
        NFTPrice.price === 0 ||
        NFTPrice.price === undefined)
        ? true
        : activeStep === 2 &&
          mediaType !== "ad" &&
          (NFTSpecs.name === "" ||
            NFTSpecs.description === "" ||
            NFTGenre === 0 ||
            NFTQuanity < 1)
        ? true
        : activeStep === 2 &&
          mediaType === "ad" &&
          (NFTSpecs.name === "" ||
            NFTSpecs.description === "" ||
            NFTPrice === 0 ||
            NFTQuanity < 1)
        ? true
        : activeStep === 3 &&
          mediaType === "song" &&
          (originalFile === "" || sampleFile === "")
        ? true
        : activeStep === 3 && mediaType === "ad" && sampleFile === ""
        ? true
        : activeStep === 3 &&
          mediaType === "event" &&
          (EventDate === "" || EventTime === "" || sampleFile === "")
        ? true
        : activeStep === 4 &&
          mediaType === "song" &&
          (artist === "" || albumName === "")
        ? true
        : activeStep === 4 &&
          mediaType === "event" &&
          (artist === "" || albumName === "" || EventType === 0)
        ? true
        : false;
    condition ? setIsNextDisabled(true) : setIsNextDisabled(false);
  }, [
    activeStep,
    NFTPrice,
    NFTSpecs,
    originalFile,
    sampleFile,
    artist,
    albumName,
    NFTGenre,
    mediaType,
    EventDate,
    EventTime,
    NFTQuanity,
    EventType,
    selectItem,
  ]);

  return (
    <>
      <React.Fragment>
        {activeStep + 1 === 1 ? (
          <Box>
            <Grid
              container
              className={classes.gridStepersCreateSpacing}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  width: "100%",
                  borderBottom: "2px solid #FF1C51",
                  paddingBottom: "5.5px",
                  marginBottom: "13px",
                }}
                direction="row"
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "25px",
                      fontWeight: "500",
                      marginRight: "10px",
                      marginRight: "10px",
                      color: "#fff",
                    }}
                  >
                    Create
                  </Typography>
                </Box>
                <div style={{ zIndex: "1" }}>
                  <Link to={"/"}>
                    <CloseIcon
                      fontSize="large"
                      style={{ zIndex: 1, fill: "#fff" }}
                    />
                  </Link>
                </div>
              </Stack>
            </Grid>
            <Grid
              container
              spacing={12}
              className={classes.gridStepersSpacingCreateBox}
            >
              <Grid item xs={12} sm={12} lg={4} md={4}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box
                    className={classes.selectEvent}
                    style={
                      mediaType === "song"
                        ? {
                            borderColor: "transparent",
                            backgroundColor: "#FF1C51",
                          }
                        : {}
                    }
                    onClick={() => {
                      selectMediaType("song");
                    }}
                  >
                    <Typography className={classes.selectText}>
                      Create Song
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} lg={4} md={4}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box
                    className={classes.selectEvent}
                    style={
                      mediaType === "event"
                        ? {
                            borderColor: "transparent",
                            backgroundColor: "#FF1C51",
                          }
                        : {}
                    }
                    onClick={() => {
                      selectMediaType("event");
                    }}
                  >
                    <Typography className={classes.selectText}>
                      Create Event
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} lg={4} md={4}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box
                    className={classes.selectEvent}
                    style={
                      mediaType === "ad"
                        ? {
                            borderColor: "transparent",
                            backgroundColor: "#FF1C51",
                          }
                        : {}
                    }
                    onClick={() => {
                      selectMediaType("ad");
                    }}
                  >
                    <Typography className={classes.selectText}>
                      Create Ad
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ) : activeStep + 1 === 2 ? (
          <Box>
            <Grid container spacing={1} className={classes.gridStepersSpacing}>
              <Grid item xs={12} sm={12} lg={4} md={4}>
                <ExploreTitle title="Choose Audience" />
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.gridStepersSpacing}>
              {buttonStep.map((text, index) => {
                return (
                  <Grid item xs={12} sm={12} lg={6} md={6}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box
                        className={[
                          classes.selectType,
                          selectItem === text.id
                            ? classes.selectTypeActive
                            : "",
                        ]}
                        onClick={() => SelectedItem(text.id)}
                        key={index}
                      >
                        <Typography className={classes.selectSecondText}>
                          {text.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
            {selectItem === 1 && (
              <Grid
                container
                spacing={2}
                sx={{ marginBottom: "1em !important" }}
                className={classes.gridStepersSpacing}
              >
                <Grid item xs={12} sm={12} lg={4} md={4}>
                  <Box className={classes.subHeadingStepersSection}>
                    <Typography className={classes.subHeadingStepers}>
                      Choose {mediaType === "song" ? "Song" : "Ticket"} Pricing
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            )}
            <Grid container spacing={2} className={classes.gridStepersSpacing}>
              {selectItem === 1 ? (
                <Grid item xs={12} sm={12} lg={5} md={5}>
                  <FormControl
                    variant="standard"
                    fullWidth
                    className="steper-label"
                  >
                    <Select
                      inputProps={{ classes: { icon: classes.icon } }}
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={NFTPrice}
                      onChange={(e) => setNFTPrice(e.target.value)}
                      className="steper-select"
                      sx={{
                        background: "transparent",
                        border: "0px solid #ff1c51 !important",
                        borderRadius: "10px !important",
                        color: "#fff !important",
                        fontSize: "1em !important",
                        fontWeight: "500 !important",
                        "&:before": {
                          borderBottom: "1px solid #ff1c51",
                        },
                        "&:after": {
                          borderBottom: "1px solid #ff1c51",
                        },
                        "&:hover": {
                          "&& fieldset": {
                            border: "0px solid #ff1c51",
                            padding: "0px 5px",
                          },
                        },
                      }}
                      MenuProps={{ classes: { paper: classes.select } }}
                    >
                      <MenuItem value={0}>Choose Pricing</MenuItem>
                      {pricingData.map((data, index) => {
                        return (
                          <MenuItem value={data.value} key={index++}>
                            {data.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              ) : selectItem === 2 ? (
                <Grid
                  container
                  spacing={4}
                  sx={{ padding: "0px 40px", marginBottom: "70px" }}
                >
                  <Grid item xs={12} sm={12} lg={3} md={3}>
                    <FormControl
                      variant="standard"
                      fullWidth
                      className="steper-label"
                    >
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Starting Date
                      </InputLabel>
                      <BootstrapInput
                        type="datetime-local"
                        size="small"
                        fullWidth
                        inputProps={{
                          min: moment(new Date())
                            .format("YYYY-MM-DD HH:mm")
                            .replace(" ", "T"),
                        }}
                        InputProps={{ style: { color: "#fff" } }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={3} md={3}>
                    <FormControl
                      variant="standard"
                      fullWidth
                      className="steper-label"
                    >
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Expiration Date
                      </InputLabel>
                      <BootstrapInput
                        type="datetime-local"
                        size="small"
                        fullWidth
                        inputProps={{
                          min: moment(new Date())
                            .format("YYYY-MM-DD HH:mm")
                            .replace(" ", "T"),
                        }}
                        InputProps={{ style: { color: "#fff" } }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              ) : selectItem === 3 ? (
                <Grid
                  container
                  spacing={2}
                  sx={{ padding: "0px 40px", marginBottom: "70px" }}
                >
                  <Grid item xs={12} sm={12} lg={5} md={5}>
                    <FormControl
                      variant="standard"
                      fullWidth
                      className="steper-label"
                    >
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Minimum bid
                      </InputLabel>
                      <BootstrapInput
                        id="bootstrap-input"
                        fullWidth
                        placeholder="Enter the Minimum bid"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              ) : null}
            </Grid>
          </Box>
        ) : activeStep + 1 === 3 ? (
          mediaType === "ad" ? (
            <Box>
              <Grid
                container
                spacing={2}
                className={classes.gridStepersSpacing}
              >
                <Grid item xs={12} sm={12} lg={4} md={4}>
                  <ExploreTitle
                    title={mediaType === "ad" ? "Ad Description" : "Royalties"}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={6}
                sx={{ padding: "0px 40px", marginBottom: "70px" }}
              >
                {inputList.map((x, i) => {
                  return (
                    <>
                      <Grid item xs={12} sm={12} lg={6} md={6}>
                        <FormControl
                          variant="standard"
                          fullWidth
                          className="steper-label"
                        >
                          <InputLabel shrink htmlFor="bootstrap-input">
                            Subject
                          </InputLabel>
                          <BootstrapInput
                            id="bootstrap-input"
                            fullWidth
                            placeholder="Ad Title"
                            value={NFTSpecs.name}
                            onInput={(e) =>
                              setNFTSpecs({ ...NFTSpecs, name: e.target.value })
                            }
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={6} md={6}>
                        <FormControl
                          variant="standard"
                          fullWidth
                          className="steper-label"
                        >
                          <InputLabel shrink htmlFor="bootstrap-input">
                            Price
                          </InputLabel>

                          <Select
                            inputProps={{ classes: { icon: classes.icon } }}
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={NFTPrice}
                            onChange={(e) => setNFTPrice(e.target.value)}
                            className="steper-select"
                            sx={{
                              background: "transparent",
                              border: "0px solid transparent !important",
                              borderRadius: "10px !important",
                              color: "#fff !important",
                              fontSize: "1em !important",
                              fontWeight: "500 !important",
                              marginTop: "42px !important",
                              fontFamily: "poppins",
                              "&:before": {
                                borderBottom: "1px solid #ff1c51",
                              },
                              "&:after": {
                                borderBottom: "1px solid #ff1c51",
                              },
                              "&:hover": {
                                "&& fieldset": {
                                  border: "0px solid transparent",
                                  padding: "0px 5px",
                                },
                              },
                            }}
                            MenuProps={{ classes: { paper: classes.select } }}
                          >
                            <MenuItem style={{ color: "1d1d1d" }} value={0}>
                              Choose Pricing
                            </MenuItem>
                            {pricingData.map((data, index) => {
                              return (
                                <MenuItem value={data.value} key={index++}>
                                  {data.name}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                    </>
                  );
                })}

                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <FormControl
                    variant="standard"
                    fullWidth
                    className="steper-label"
                  >
                    <InputLabel shrink htmlFor="bootstrap-input">
                      Description
                    </InputLabel>
                    <BootstrapInput
                      id="bootstrap-input"
                      fullWidth
                      placeholder="Item description"
                      value={NFTSpecs.description}
                      onInput={(e) =>
                        setNFTSpecs({
                          ...NFTSpecs,
                          description: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                </Grid>
                {selectItem === 1 && (
                  <Grid item xs={12} sm={12} lg={6} md={6}>
                    <FormControl
                      variant="standard"
                      fullWidth
                      className="steper-label"
                    >
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Quantity
                      </InputLabel>
                      <BootstrapInput
                        id="bootstrap-input"
                        fullWidth
                        placeholder="NFT Quantity"
                        value={NFTQuanity}
                        type="number"
                        inputProps={{ min: 0 }}
                        onInput={(e) => setNFTQuantity(e.target.value)}
                      />
                    </FormControl>
                  </Grid>
                )}
              </Grid>
            </Box>
          ) : (
            <Box>
              <Grid
                container
                spacing={2}
                className={classes.gridStepersSpacing}
              >
                <Grid item xs={12} sm={12} lg={4} md={4}>
                  <ExploreTitle title="Royalties" />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={6}
                sx={{ padding: "0px 40px", marginBottom: "70px" }}
              >
                {inputList.map((x, i) => {
                  return (
                    <>
                      <Grid item xs={12} sm={12} lg={6} md={6}>
                        <FormControl
                          variant="standard"
                          fullWidth
                          className="steper-label"
                        >
                          <InputLabel shrink htmlFor="bootstrap-input">
                            Name
                          </InputLabel>
                          <BootstrapInput
                            id="bootstrap-input"
                            fullWidth
                            placeholder="John Doe"
                            value={NFTSpecs.name}
                            onInput={(e) =>
                              setNFTSpecs({ ...NFTSpecs, name: e.target.value })
                            }
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={6} md={6}>
                        <FormControl
                          variant="standard"
                          fullWidth
                          className="steper-label"
                        >
                          <InputLabel shrink htmlFor="bootstrap-input">
                            Genre
                          </InputLabel>
                          <Select
                            inputProps={{ classes: { icon: classes.icon } }}
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={NFTGenre}
                            onChange={(e) => setNFTGenre(e.target.value)}
                            className="steper-select"
                            sx={{
                              background: "transparent",
                              border: "0px solid transparent !important",
                              borderRadius: "10px !important",
                              color: "#fff !important",
                              fontSize: "1em !important",
                              fontWeight: "500 !important",
                              marginTop: "42px !important",
                              fontFamily: "poppins",
                              "&:before": {
                                borderBottom: "1px solid #ff1c51",
                              },
                              "&:after": {
                                borderBottom: "1px solid #ff1c51",
                              },
                              "&:hover": {
                                "&& fieldset": {
                                  border: "0px solid transparent",
                                  padding: "0px 5px",
                                },
                              },
                            }}
                            MenuProps={{ classes: { paper: classes.select } }}
                          >
                            <MenuItem style={{ color: "1d1d1d" }} value={0}>
                              Choose Genre
                            </MenuItem>
                            {nftGenre.map((data, index) => {
                              return (
                                <MenuItem value={data.value} key={index++}>
                                  {data.title}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                      {/* <Grid item xs={12} sm={12} lg={6} md={6}>
                    <Box className={classes.addNewFieldSection}>
                      <FormControl
                        variant="standard"
                        fullWidth
                        className="steper-label"
                      >
                        <InputLabel shrink htmlFor="bootstrap-input">
                          Royalties
                        </InputLabel>
                        <BootstrapInput
                          id="bootstrap-input"
                          fullWidth
                          placeholder="0.00"
                        />
                      </FormControl>
                      {i === 0 ? (
                        <IconButton
                          aria-label="display more actions"
                          edge="end"
                          onClick={handleAddClick}
                          className={classes.addFieldIconsButton}
                        >
                          <IoMdAddCircle className={classes.addFieldIcons} />
                        </IconButton>
                      ) : (
                        <IconButton
                          aria-label="display more actions"
                          edge="end"
                          onClick={() => handleRemoveClick(i)}
                          className={classes.addFieldIconsButton}
                        >
                          <HiMinusCircle className={classes.addFieldIcons} />
                        </IconButton>
                      )}
                    </Box>
                  </Grid> */}
                    </>
                  );
                })}

                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <FormControl
                    variant="standard"
                    fullWidth
                    className="steper-label"
                  >
                    <InputLabel shrink htmlFor="bootstrap-input">
                      Description
                    </InputLabel>
                    <BootstrapInput
                      id="bootstrap-input"
                      fullWidth
                      placeholder="Had fun writing this song"
                      value={NFTSpecs.description}
                      onInput={(e) =>
                        setNFTSpecs({
                          ...NFTSpecs,
                          description: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                </Grid>
                {/* {inputList.map((x, i) => {
                                      return (
                                          <Grid item xs={12} sm={12} lg={6} md={6}>
                                              <Box className={classes.addNewFieldSection}>
                                                  <FormControl variant="standard" fullWidth className='steper-label'>
                                                      <InputLabel shrink htmlFor="bootstrap-input">
                                                          Royalties
                                                      </InputLabel>
                                                      <BootstrapInput id="bootstrap-input" fullWidth placeholder='0.00' />
                                                  </FormControl>
                                                  {i === 0 ?
                                                      <IconButton aria-label="display more actions" edge="end" onClick={handleAddClick} className={classes.addFieldIconsButton}>
                                                          <IoMdAddCircle className={classes.addFieldIcons} />
                                                      </IconButton>
                                                      :
                                                      <IconButton aria-label="display more actions" edge="end" onClick={() => handleRemoveClick(i)} className={classes.addFieldIconsButton}>
                                                          <HiMinusCircle className={classes.addFieldIcons} />
                                                      </IconButton>}
                                              </Box>
                                          </Grid>
                                      )
                                  })} */}

                {/* <Grid item xs={12} sm={12} lg={6} md={6}>
              <FormControl
                variant="standard"
                fullWidth
                className="steper-label"
              >
                <InputLabel shrink htmlFor="bootstrap-input">
                  Properties (Optional)
                </InputLabel>
                <BootstrapInput
                  id="bootstrap-input"
                  fullWidth
                  placeholder="e.g. size"
                  value={NFTSpecs.properties}
                  onInput={(e) =>
                    setNFTSpecs({ ...NFTSpecs, properties: e.target.value })
                  }
                />
              </FormControl>
            </Grid> */}
                {selectItem === 1 && (
                  <Grid item xs={12} sm={12} lg={6} md={6}>
                    <FormControl
                      variant="standard"
                      fullWidth
                      className="steper-label"
                    >
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Quantity
                      </InputLabel>
                      <BootstrapInput
                        id="bootstrap-input"
                        fullWidth
                        placeholder="NFT Quantity"
                        value={NFTQuanity}
                        type="number"
                        inputProps={{ min: 0 }}
                        onInput={(e) => setNFTQuantity(e.target.value)}
                      />
                    </FormControl>
                  </Grid>
                )}
              </Grid>
            </Box>
          )
        ) : activeStep + 1 === 4 ? (
          <Box>
            <Grid container spacing={2} className={classes.gridStepersSpacing}>
              <Grid item xs={12} sm={12} lg={4} md={4}>
                <ExploreTitle
                  title={
                    mediaType === "song"
                      ? "Upload"
                      : mediaType === "ad"
                      ? "Upload Ad Thumnail"
                      : "Set Event Date"
                  }
                />
              </Grid>
            </Grid>

            {mediaType === "song" ? (
              <Grid
                container
                spacing={8}
                className={classes.gridStepersSpacing}
              >
                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <Box className={classes.boxUpload}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      {originalFileUploading && (
                        <CircularProgress
                          sx={{ color: "#FF1C51" }}
                        ></CircularProgress>
                      )}
                      {originalFile && (
                        <Box className={classes.iconButton1}>
                          {originalFile.name}
                          <GrCirclePlay
                            style={{ color: "#fff" }}
                            className={classes.socialIcons}
                          />
                        </Box>
                      )}
                      <Typography className={classes.uploadText}>
                        Original File
                      </Typography>
                      <Typography className={classes.uploadDetails}>
                        MP4 or MP3. Max 30mb.
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        component="label"
                        sx={{
                          backgroundColor: "#FF1C51",
                          padding: "4px 34px",
                          borderRadius: "30px",
                          fontFamily: "poppins",
                          textTransform: "capitalize",
                          fontSize: "18px",
                          fontWeight: "500",
                          boxShadow: "none",
                          "&:hover": {
                            backgroundColor: "#FF1C51 !important",
                            boxShadow: "none",
                          },
                        }}
                      >
                        {originalFile ? "Change" : "Upload"}
                        <input
                          onChange={(e) =>
                            handleFileUpload(e.target.files[0], "original_file")
                          }
                          onClick={(e) => (e.target.value = "")}
                          type="file"
                          hidden
                        />
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <Box className={classes.boxUpload}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      {sampleFileUploading && (
                        <CircularProgress
                          sx={{ color: "#FF1C51" }}
                        ></CircularProgress>
                      )}
                      {sampleFile && <img width="50%" src={sampleFile} />}
                      <Typography className={classes.uploadText}>
                        Upload Thumbnail
                      </Typography>
                      <Typography className={classes.uploadDetails}>
                        PNG, GIF, WEBP Max 30mb.
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        component="label"
                        sx={{
                          backgroundColor: "#FF1C51",
                          padding: "4px 34px",
                          borderRadius: "30px",
                          fontFamily: "poppins",
                          textTransform: "capitalize",
                          fontSize: "18px",
                          fontWeight: "500",
                          boxShadow: "none",
                          "&:hover": {
                            backgroundColor: "#FF1C51 !important",
                            boxShadow: "none",
                          },
                        }}
                      >
                        {sampleFile ? "Change" : "Upload"}
                        <input
                          type="file"
                          onChange={(e) =>
                            handleFileUpload(e.target.files[0], "sample_file")
                          }
                          onClick={(e) => (e.target.value = "")}
                          hidden
                        />
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            ) : mediaType === "ad" ? (
              <Grid
                container
                spacing={8}
                className={classes.gridStepersSpacing}
              >
                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <Box className={classes.boxUpload}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      {sampleFileUploading && (
                        <CircularProgress
                          sx={{ color: "#FF1C51" }}
                        ></CircularProgress>
                      )}
                      {["jpg", "JPG", "png", "PNG", "jpeg", "JPEG"].includes(
                        sampleFile.split(".")[sampleFile.split(".").length - 1]
                      ) && <img width="50%" src={sampleFile} />}
                      <Typography className={classes.uploadText}>
                        Upload File
                      </Typography>
                      <Typography className={classes.uploadDetails}>
                        PNG, GIF, WEBP, MP3, MP4, WAV. Max 30mb.
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        component="label"
                        sx={{
                          backgroundColor: "#FF1C51",
                          padding: "4px 34px",
                          borderRadius: "30px",
                          fontFamily: "poppins",
                          textTransform: "capitalize",
                          fontSize: "18px",
                          fontWeight: "500",
                          boxShadow: "none",
                          "&:hover": {
                            backgroundColor: "#FF1C51 !important",
                            boxShadow: "none",
                          },
                        }}
                      >
                        {sampleFile ? "Change" : "Upload"}
                        <input
                          type="file"
                          onChange={(e) =>
                            handleFileUpload(e.target.files[0], "sample_file")
                          }
                          onClick={(e) => (e.target.value = "")}
                          hidden
                        />
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            ) : (
              <Grid
                container
                spacing={8}
                className={classes.gridStepersSpacing}
              >
                <Grid xs={12} sm={12} lg={6} md={6} item>
                  <Box className={classes.boxUpload}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography className={classes.uploadText}>
                        Event Date
                      </Typography>
                    </Box>
                    <Box>
                      <Flatpickr
                        style={{
                          textAlign: "center",
                          background: "transparent",
                          color: "white",
                          border: "none",
                          fontSize: "1.1em",
                          borderBottom: "2px solid red",
                        }}
                        placeholder={"Choose Date and Time"}
                        data-enable-time
                        value={EventDate}
                        onChange={([date]) => {
                          const m = moment(date);
                          setEventDate(m.format("YYYY-MM-DDTHH:mm:ss"));
                          setEventTime(m.format(format));
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <Box className={classes.boxUpload}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      {sampleFileUploading && (
                        <CircularProgress
                          sx={{ color: "#FF1C51" }}
                        ></CircularProgress>
                      )}
                      {sampleFile && <img width="50%" src={sampleFile} />}
                      <Typography className={classes.uploadText}>
                        Upload Thumbnail
                      </Typography>
                      <Typography className={classes.uploadDetails}>
                        PNG, GIF, WEBP Max 30mb.
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        component="label"
                        sx={{
                          backgroundColor: "#FF1C51",
                          padding: "4px 34px",
                          borderRadius: "30px",
                          fontFamily: "poppins",
                          textTransform: "capitalize",
                          fontSize: "18px",
                          fontWeight: "500",
                          boxShadow: "none",
                          "&:hover": {
                            backgroundColor: "#FF1C51 !important",
                            boxShadow: "none",
                          },
                        }}
                      >
                        {sampleFile ? "Change" : "Upload"}
                        <input
                          type="file"
                          onChange={(e) =>
                            handleFileUpload(e.target.files[0], "sample_file")
                          }
                          onClick={(e) => (e.target.value = "")}
                          hidden
                        />
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Box>
        ) : (
          <Box>
            <Grid
              flex
              container
              spacing={2}
              style={{ justifyContent: "space-between" }}
              className={classes.gridStepersSpacing}
            >
              <Grid item xs={12} sm={12} lg={4} md={4}>
                <ExploreTitle title="Add details" />
              </Grid>
              {mediaType === "song" && (
                <Grid item xs={12} sm={12} lg={5} md={5}>
                  <ExploreTitle title="Preview" />
                </Grid>
              )}
            </Grid>

            <Grid container spacing={2} className={classes.gridStepersSpacing}>
              <Grid item xs={12} sm={12} lg={6} md={6}>
                <Grid
                  container
                  spacing={2}
                  className={classes.gridStepersSpacing}
                >
                  <Grid item xs={12} sm={12} lg={12} md={12} mb={5}>
                    <FormControl
                      variant="standard"
                      fullWidth
                      className="steper-label"
                    >
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Album
                      </InputLabel>
                      <BootstrapInput
                        id="bootstrap-input"
                        fullWidth
                        value={albumName}
                        onInput={(e) => setAlbumName(e.target.value)}
                        placeholder="Enter Album name"
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    sx={{ marginBottom: "40px" }}
                    item
                    xs={12}
                    sm={12}
                    lg={12}
                    md={12}
                  >
                    <FormControl
                      variant="standard"
                      fullWidth
                      className="steper-label"
                    >
                      <InputLabel shrink htmlFor="bootstrap-input">
                        Artist
                      </InputLabel>
                      <BootstrapInput
                        id="bootstrap-input"
                        fullWidth
                        placeholder="Enter artist name"
                        value={artist}
                        onInput={(e) => setArtist(e.target.value)}
                      />
                    </FormControl>
                  </Grid>
                  {mediaType === "event" && (
                    <Grid item xs={12} sm={12} lg={12} md={12}>
                      <FormControl
                        variant="standard"
                        fullWidth
                        className="steper-label"
                      >
                        <Select
                          inputProps={{ classes: { icon: classes.icon } }}
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={EventType}
                          onChange={(e) => setEventType(e.target.value)}
                          className="steper-select"
                          sx={{
                            background: "transparent",
                            border: "0px solid #ff1c51 !important",
                            borderRadius: "10px !important",
                            color: "#fff !important",
                            fontSize: "1em !important",
                            fontWeight: "500 !important",
                            "&:before": {
                              borderBottom: "1px solid #ff1c51",
                            },
                            "&:after": {
                              borderBottom: "1px solid #ff1c51",
                            },
                            "&:hover": {
                              "&& fieldset": {
                                border: "0px solid #ff1c51",
                                padding: "0px 5px",
                              },
                            },
                          }}
                          MenuProps={{ classes: { paper: classes.select } }}
                        >
                          <MenuItem value={0}>Choose Event Type</MenuItem>
                          {eventType.map((data, index) => {
                            return (
                              <MenuItem value={data.value} key={index++}>
                                {data.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                  )}
                </Grid>
              </Grid>
              {mediaType === "song" && (
                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      display={"flex"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      flexDirection={"column"}
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.18)",
                        borderRadius: "19px",
                        padding: "0px 8px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "rgba(25,25,25,0.35)",
                        },
                      }}
                    >
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        sx={{
                          width: "100%",
                          marginBottom: "-2px",
                          columnGap: "7px",
                          marginLeft: "13px",
                        }}
                      >
                        <Box
                          sx={{
                            width: "20px",
                            height: "20px",
                          }}
                        ></Box>

                        <Box>
                          <IconButton
                            aria-label="settings"
                            sx={{ paddingRight: 0 }}
                          >
                            <MoreVertIcon
                              sx={{
                                color: "#F0F3F6 !important",
                                fontSize: "30px !important",
                              }}
                            />
                          </IconButton>
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        className={classes.img}
                        sx={{ position: "relative" }}
                      >
                        {/* <img src={Group} alt="" className={classes.imgex} /> */}
                        <Box
                          style={{
                            width: "143px",
                            height: "173px",
                            background: `url(${sampleFile})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            borderRadius: "5px",
                          }}
                        ></Box>
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: "0px",
                            width: "100%",
                            textAlign: "center",
                            padding: "0.5em 0em",
                            background:
                              "linear-gradient(180deg,transparent,rgba(0,0,0,.297) 15%,rgba(0,0,0,.438) 30%,#000)",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: "10px",
                              fontWeight: "500",
                            }}
                          >
                            {NFTSpecs.name}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"end"}
                        alignItems={"center"}
                        sx={{ width: "100%", columnGap: "35px" }}
                      >
                        {/* <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Typography sx={{ fontWeight: "900", color: "#fff" }}>
                            $ {NFTPrice.price}
                          </Typography>
                        </Box> */}
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <IconButton aria-label="settings">
                            <FavoriteIcon sx={{ color: "#fff" }} />
                          </IconButton>
                          <Typography sx={{ fontWeight: "900", color: "#fff" }}>
                            0
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        )}
        {console.log("STEP", activeStep)}
        {activeStep > 0 && (
          <Grid container spacing={2} sx={{ marginBottom: "2em" }}>
            <Grid
              style={activeStep === 0 ? { visibility: "hidden" } : {}}
              item
              xs={12}
              sm={12}
              lg={6}
              md={6}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Button
                  variant="contained"
                  className={classes.createPageNextButton}
                  onClick={handleBack}
                >
                  Previous
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6} md={6}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {finishLoading ? (
                  <CircularProgress
                    sx={{ color: "#FF1C51" }}
                  ></CircularProgress>
                ) : (
                  <Button
                    variant="contained"
                    className={classes.createPageNextButton}
                    disabled={isNextDisabled}
                    onClick={
                      activeStep === 3 && mediaType === "ad"
                        ? handleFinish
                        : activeStep === steps.length - 1
                        ? handleFinish
                        : handleNext
                    }
                  >
                    {activeStep === 3 && mediaType === "ad"
                      ? "Finish"
                      : activeStep === steps.length - 1
                      ? "Finish"
                      : "Next"}
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        )}
      </React.Fragment>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps} sx={{ zIndex: 99 }}>
              <StepLabel {...labelProps}> </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};

export default CustomStepper;
