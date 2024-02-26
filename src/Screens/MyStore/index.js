import React, { useState, useMemo } from "react";
import { styled } from "@mui/material/styles";
import {
  Autocomplete,
  Box,
  InputAdornment,
  Typography,
  useMediaQuery,
  TextField,
  Button,
} from "@mui/material";
import { useStyles } from "../../constant/customStyle";
import HeaderComponent from "../../component/Header";
import FooterComponent from "../../component/Footer";
import IconSearch from "../../assets/IconSearch.svg";
import { AssetsTab } from "./components/Tabs/AssetsTab";
import { StatsTab } from "./components/Tabs/StatsTab";
import { BackstagePassTab } from "./components/Tabs/BackstagePassTab";
import { EventsDetail } from "./components/EventsDetail";
import { LiveStreaming } from "./components/LiveStreaming";
import MerchImgExample from "../../assets/MerchImgExample.png";
import { LiveStreamingResultDialog } from "./components/LiveStreamingResultDialog";
import { EditAssetsEvent } from "./components/EditAssetsEvent";

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

const tabs = [
  {
    id: 1,
    name: "Assets",
  },
  {
    id: 2,
    name: "Stats",
  },
  {
    id: 3,
    name: "Backstage Pass",
  },
];

const assets = [
  {
    id: Math.random(),
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
    sales: [10, 50, 10, 200, 12, 76, 54],
    visit: [43, 23, 29, 23, 23, 2, 34],
    saved: [54, 33, 77, 22, 45, 23, 66],
    quantity: 2,
    total_view: 132,
    total_sale: 98,
    total_likes: 98,
    type: "event",
  },
  {
    id: Math.random(),
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
    sales: [10, 50, 10, 50, 12, 76, 54],
    visit: [43, 23, 29, 23, 23, 2, 34],
    saved: [54, 33, 77, 22, 45, 23, 66],
    quantity: 2,
    total_view: 132,
    total_sale: 98,
    total_likes: 98,
    type: "asset",
    owner: "Carey Frank",
  },
  {
    id: Math.random(),
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
    sales: [10, 50, 100, 50, 12, 76, 54],
    visit: [43, 23, 29, 23, 23, 2, 34],
    saved: [54, 33, 77, 22, 45, 23, 66],
    quantity: 2,
    total_view: 132,
    total_sale: 98,
    total_likes: 98,
    type: "merch",
    category: "T-shirt",
  },
  {
    id: Math.random(),
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
    sales: [10, 50, 10, 50, 12, 76, 54],
    visit: [43, 23, 29, 23, 23, 2, 34],
    saved: [54, 33, 77, 22, 45, 23, 66],
    quantity: 2,
    total_view: 132,
    total_sale: 98,
    total_likes: 98,
    type: "event",
  },
  {
    id: Math.random(),
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
    sales: [10, 50, 10, 50, 12, 76, 54],
    visit: [43, 23, 29, 23, 23, 2, 34],
    saved: [54, 33, 77, 22, 45, 23, 66],
    quantity: 2,
    total_view: 132,
    total_sale: 98,
    total_likes: 98,
    type: "asset",
    owner: "Carey Frank",
  },
  {
    id: Math.random(),
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
    sales: [10, 50, 10, 50, 12, 76, 54],
    visit: [43, 23, 29, 23, 23, 2, 34],
    saved: [54, 33, 77, 22, 45, 23, 66],
    quantity: 2,
    total_view: 132,
    total_sale: 98,
    total_likes: 98,
    type: "merch",
    category: "T-shirt",
  },
  {
    id: Math.random(),
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
    sales: [10, 50, 10, 50, 12, 76, 54],
    visit: [43, 23, 29, 23, 23, 2, 34],
    saved: [54, 33, 77, 22, 45, 23, 66],
    quantity: 2,
    total_view: 132,
    total_sale: 98,
    total_likes: 98,
    type: "event",
  },
  {
    id: Math.random(),
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
    sales: [10, 50, 10, 50, 12, 76, 54],
    visit: [43, 23, 29, 23, 23, 2, 34],
    saved: [54, 33, 77, 22, 45, 23, 66],
    quantity: 2,
    total_view: 132,
    total_sale: 98,
    total_likes: 98,
    type: "asset",
    owner: "Carey Frank",
  },
  {
    id: Math.random(),
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
    sales: [10, 50, 10, 50, 12, 76, 54],
    visit: [43, 23, 29, 23, 23, 2, 34],
    saved: [54, 33, 77, 22, 45, 23, 66],
    quantity: 2,
    total_view: 132,
    total_sale: 98,
    total_likes: 98,
    type: "merch",
    category: "T-shirt",
  },
  {
    id: Math.random(),
    img: MerchImgExample,
    title: "Fermentum et orci.",
    date: "Aug 12, 2022 21:45",
    price: "$13.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu sagittis, erat lacus maecenas elit. Laoreet interdum.",
    sales: [10, 50, 10, 50, 12, 76, 54],
    visit: [43, 23, 29, 23, 23, 2, 34],
    saved: [54, 33, 77, 22, 45, 23, 66],
    quantity: 2,
    total_view: 132,
    total_sale: 98,
    total_likes: 98,
    type: "event",
  },
];

export const MyStore = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:768px)");
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [inputAssetsValue, setInputAssetsValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [searchedAssets, setsearchedAssets] = useState(assets);
  // eslint-disable-next-line no-unused-vars
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [openAssetsSearch, setOpenAssetsSearch] = useState(false);
  const [isOpenAssetSearch, setOpenAssetSearch] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [currentAsset, setCurrentAsset] = useState(null);
  const [isLiveStreaming, setLiveStreaming] = useState(false);
  const [liveStreamingResult, setLiveStreamingResult] = useState({});
  const [showLiveStreamingResult, setShowLiveStreamingResult] = useState(false);
  const [assetsFilter, setAssetsFilter] = useState("All assets");
  const [isEditAssetsEvent, setEditAssetsEvent] = useState(false);

  const filteredAssets = useMemo(() => {
    if (assetsFilter === "All assets") {
      return assets.filter((asset) => asset?.type === "asset");
    }
    if (assetsFilter === "Upcoming Events") {
      return assets.filter((asset) => asset?.type === "event");
    }
    if (assetsFilter === "Merch") {
      return assets.filter((asset) => asset?.type === "merch");
    }
    return assets;
  }, [assetsFilter]);

  const handleInputAssetsChange = async (event, newInputValue) => {
    if (newInputValue !== "undefined") {
      setInputAssetsValue(newInputValue);
    }
  };

  const handleSelectAsset = (option) => {};

  const handleAssetsOpen = () => setOpenAssetsSearch(true);
  const handleAssetsSearchOpen = () => setOpenAssetSearch(true);
  const handleAssetsSearchClose = () => {
    setInputAssetsValue("");
    setOpenAssetSearch(false);
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
          minHeight: "calc(100vh - 336px)",
          width: isLeftSidebarOpen
            ? "100%"
            : { xs: "100%", md: "calc(100% - 235px)" },
          padding: isLeftSidebarOpen
            ? {
                xs: "44px 15px 137px 15px !important",
                lg: "44px 38px 137px 46px !important",
              }
            : {
                xs: "44px 15px 137px 15px !important",
              },
          background: "rgba(0, 0, 0, 0.25)",
          zIndex: "0",
        }}
      >
        {/** My Store, Search, Create */}
        {currentAsset ? (
          isLiveStreaming ? (
            <LiveStreaming
              event={currentAsset}
              setLiveStreaming={setLiveStreaming}
              setCurrentAsset={setCurrentAsset}
              setLiveStreamingResult={setLiveStreamingResult}
              setShowLiveStreamingResult={setShowLiveStreamingResult}
              setAssetsFilter={setAssetsFilter}
            />
          ) : isEditAssetsEvent ? (
            <EditAssetsEvent
              event={currentAsset}
              setEditAssetsEvent={setEditAssetsEvent}
            />
          ) : (
            <EventsDetail
              event={currentAsset}
              setCurrentAsset={setCurrentAsset}
              setLiveStreaming={setLiveStreaming}
              setAssetsFilter={setAssetsFilter}
              setEditAssetsEvent={setEditAssetsEvent}
            />
          )
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "'center",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "27px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "140%",
                  letterSpacing: "0.2px",
                  color: "#fff",
                }}
              >
                My Store
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: { xs: "auto", sm: "0" },
                }}
              >
                <Autocomplete
                  sx={{
                    border: isOpenAssetSearch ? "1px solid #515151" : "none",
                    borderRadius: "4px",
                    width: isOpenAssetSearch ? "365px" : "55px",
                    transition: "width 500ms ease",
                  }}
                  onBlur={() => handleAssetsSearchClose()}
                  onFocus={() => handleAssetsSearchOpen()}
                  id="combo-box-demo"
                  open={openAssetsSearch}
                  onOpen={handleAssetsOpen}
                  onClose={() => setOpenAssetsSearch(false)}
                  inputValue={inputAssetsValue}
                  onInputChange={handleInputAssetsChange}
                  options={searchedAssets}
                  getOptionLabel={(option) => option.title}
                  renderOption={(props, option) => (
                    <Box
                      onClick={() => handleSelectAsset(option)}
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
                        isOpenAssetSearch ? "Search assets..." : ""
                      }`}
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start">
                            <Box
                              onClick={() => handleAssetsSearchOpen()}
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
                                marginTop: isOpenAssetSearch ? "0" : "20px",
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                {filteredAssets.length > 0 && (
                  <Button
                    sx={{
                      padding: "8px 24px",
                      background: "#FF8200",
                      borderRadius: "40px",
                      height: "38px",
                      marginLeft: isOpenAssetSearch ? "24px" : "0",
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
                        fontSize: "16px",
                        lineHeight: "140%",
                        letterSpacing: "0.2px",
                        color: "#000",
                        textTransform: "none",
                      }}
                    >
                      Create
                    </Typography>
                  </Button>
                )}
              </Box>
            </Box>
            {/** Tabs */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: "24px",
              }}
            >
              {tabs.map((tab) => (
                <Box
                  key={tab?.id}
                  onClick={() => setSelectedTab(tab)}
                  sx={{
                    padding: "10px",
                    transition: "all 500ms ease",
                    cursor: "pointer",
                    borderBottom:
                      selectedTab?.id === tab?.id
                        ? "1px solid #FF8200"
                        : "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Typography
                    sx={{
                      transition: "all 500ms ease",
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: selectedTab?.id === tab?.id ? "700" : "600",
                      fontSize: "13px",
                      lineHeight: "16px",
                      color: selectedTab?.id === tab?.id ? "#FF8200" : "#fff",
                    }}
                  >
                    {tab?.name}
                  </Typography>
                </Box>
              ))}
            </Box>
            {/** Tabs Content */}
            {selectedTab?.id === 1 && (
              <AssetsTab
                assets={filteredAssets}
                setCurrentAsset={setCurrentAsset}
                setAssetsFilter={setAssetsFilter}
              />
            )}
            {selectedTab?.id === 2 && <StatsTab />}
            {selectedTab?.id === 3 && <BackstagePassTab />}
          </>
        )}
        <LiveStreamingResultDialog
          liveStreamingResult={liveStreamingResult}
          showLiveStreamingResult={showLiveStreamingResult}
          setShowLiveStreamingResult={setShowLiveStreamingResult}
        />
      </Box>
      <FooterComponent />
    </Box>
  );
};
