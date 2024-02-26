import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
} from "@mui/material";
import { useStyles } from "../constant/customStyle";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import AdModal from "../component/PostModal/AdModal";
import AdItem from "../Screens/Community/component/AdItem/AdItem";
import { loadScript } from "@paypal/paypal-js";
import { paypalKey } from "../constant/constants";

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

const TabComponentConnect = ({ ConnectUsers, FetchAds }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const [AdModalStatus, setAdModalStatus] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [paypalScript, setPaypalScript] = useState(null);


  useEffect(() => {
    const paypalMerchants = ConnectUsers.map(a => a.user.user_paypal).filter(b => b !== "");
    const paypalScriptInit = async () => {
      const paypal_script = await loadScript({
        "client-id":
          paypalKey,
        "merchant-id": [...new Set(paypalMerchants)],
      });
      setPaypalScript(paypal_script);
    };

    paypalScriptInit();
  }, [])


  const clickAdHandler = (id) => {
    navigate("/profile?id=" + id);
    // window.location.reload();
  };

  return (
    <Box style={{position: "relative"}} className={classes.tabFeedBox}>
       <Button
        onClick={() => setAdModalStatus(true)}
        variant="contained"
        sx={{
          position: "absolute",
          right: "30px",
          marginBottom: "20px",
          backgroundColor: "#FF1C51",
          padding: "5px 15px",
          borderRadius: "30px",
          fontFamily: "poppins",
          textTransform: "capitalize",
          fontSize: "17px",
          fontWeight: "400",
          boxShadow: "none",
          float: "right",
          "&:hover": {
            backgroundColor: "#FF1C51 !important",
            boxShadow: "none",
          },
        }}
      >
        <AddIcon style={{ color: "#fff" }} /> <span> Create Ad </span>
      </Button> 

      <AdModal
        AdModalStatus={AdModalStatus}
        setAdModalStatus={setAdModalStatus}
        fetchAds={FetchAds}
        refresh={true}
      />
      <Grid container spacing={2} className={classes.exploreSpaceSelect}>
      </Grid>
      <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
        {ConnectUsers.map((item, index) => (
          <Box key={index} onClick={() => clickAdHandler(item.userId)} style={{margin: "1em 0em", background: "#1d1d1d", cursor: "pointer", padding: "1em", borderRadius: "10px"}}>
            <Box style={{display:"flex"}}>
              <Box style={{marginRight: "1em"}}>
                {item.type === "image" ? <Box style={{width: "100px", height: "100px", backgroundImage: `url(${item.file})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></Box> : ""}
              </Box>
              <Box>
                <Box style={{fontSize: "1.2em", display: "flex", alignItems: "center"}}>{item.subject} </Box>
                <Box style={{fontSize: "1em", marginTop: "0.5em", color: "#a8a8a8"}}>{item.desc}</Box>
              </Box>
            </Box>
            <Box>
              <AdItem merchantId={item.user.user_paypal} price={item.price ?? 0} paypalScript={paypalScript} id={item._id} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TabComponentConnect;
