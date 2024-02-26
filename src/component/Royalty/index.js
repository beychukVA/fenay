import React, { useState, useEffect } from "react";
import { CreateRoyalties, GetRoyalties } from "../../Services/Royalty";
import { show_success, show_toast } from "../../helpers/toast";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import { useStyles } from "../../constant/customStyle";
const Royalty = ({
  isMyProfile,
  selectedNft,
  setSelectedNft,
  selectedNftPrice,
  setSelectedNftPrice,
  royaltyModal,
  setRoyaltyModal,
}) => {
  const [open, setOpen] = useState(false);
  const [royalties, setRoyalties] = useState([]);
  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState("");
  const [job, setJob] = useState("");
  const [paypal, setPaypal] = useState("");
  const [royaltySet, setRoyaltySet] = useState(false);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
    setRoyaltyModal(false);
  };

  const addAnother = () => {
    let royaltyObj = {};
    royaltyObj["user_name"] = name;
    royaltyObj["percentage"] = percentage + "%";
    royaltyObj["job"] = job;
    royaltyObj["paypal"] = paypal;
    setRoyalties((d) => [...d, royaltyObj]);
    setName("");
    setPercentage("");
    setJob("");
    setPaypal("");
  };

  useEffect(() => {
    if (royaltyModal) {
      openRoyaltyModal(selectedNft);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [royaltyModal]);

  const openRoyaltyModal = async (item) => {
    if (isMyProfile) {
      setRoyaltySet(false);
      try {
        const res = await GetRoyalties(item._id);
        setRoyalties(res[0].royalties);
        setRoyaltySet(true);
        setOpen(true);
      } catch (err) {
        setOpen(true);
      }
    }
  };

  const saveRoyalties = async () => {
    let royaltiesObj = {};
    royaltiesObj["nft_id"] = selectedNft._id;
    royaltiesObj["price"] = selectedNftPrice;
    royaltiesObj["type"] = "song";
    royaltiesObj["royalties"] = royalties;
    if (royalties.length) {
      // eslint-disable-next-line no-unused-vars
      const res = await CreateRoyalties(royaltiesObj);
      setRoyalties([]);
      handleClose();
      show_success("Royalties Added");
    } else {
      show_toast("Please enter royalties");
    }
    console.log(royaltiesObj);
  };

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      open={open}
      maxWidth={"lg"}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: {
          borderRadius: 20,
          backgroundColor: "#1D1D1D",
          border: "2px solid #707070",
          width: "60%",
        },
      }}
    >
      <DialogContent>
        <Box>
          <Box
            display={"flex"}
            sx={{
              borderBottom: "2px solid #FF1C51",
              paddingBottom: "5.5px",
              width: "100%",
              marginBottom: "13px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: "600",
                marginRight: "10px",
                color: "#fff",
              }}
            >
              Add Royalties
            </Typography>
          </Box>
          <Box>
            <Grid
              container
              spacing={3}
              sx={{
                marginBottom: "1em !important",
                padding: "0px !important",
              }}
              className={classes.gridStepersSpacing}
            >
              {!royaltySet && (
                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <Box>
                    <TextField
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      sx={{
                        border: "solid 1px #FF1C51",
                        borderRadius: "5px",
                        width: "100%",
                        input: { color: "white" },
                      }}
                    />
                  </Box>
                  <br />
                  <Box>
                    <TextField
                      value={percentage}
                      onChange={(e) => setPercentage(e.target.value)}
                      placeholder="Percentage"
                      type={"number"}
                      sx={{
                        border: "solid 1px #FF1C51",
                        borderRadius: "5px",
                        width: "100%",
                        input: { color: "white" },
                      }}
                    />
                  </Box>
                  <br />
                  <Box>
                    <TextField
                      value={job}
                      onChange={(e) => setJob(e.target.value)}
                      placeholder="Job"
                      sx={{
                        border: "solid 1px #FF1C51",
                        borderRadius: "5px",
                        width: "100%",
                        input: { color: "white" },
                      }}
                    />
                  </Box>
                  <br />
                  <Box>
                    <TextField
                      value={paypal}
                      onChange={(e) => setPaypal(e.target.value)}
                      placeholder="Paypal Email"
                      sx={{
                        border: "solid 1px #FF1C51",
                        borderRadius: "5px",
                        width: "100%",
                        input: { color: "white" },
                      }}
                    />
                  </Box>
                  <br />
                  <Box>
                    <Button
                      variant="contained"
                      onClick={() => addAnother()}
                      sx={{
                        backgroundColor: "#FF1C51",
                        padding: "0.5em 2em",
                        borderRadius: "30px",
                        fontFamily: "poppins",
                        textTransform: "capitalize",
                        fontSize: "15px",
                        fontWeight: "500",
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: "#FF1C51 !important",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Add Another
                    </Button>
                  </Box>
                </Grid>
              )}

              <Grid
                item
                xs={12}
                sm={12}
                lg={!royaltySet ? 6 : 12}
                md={!royaltySet ? 6 : 12}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <Box>
                    {royalties.map((royalty) => (
                      <Box
                        style={{
                          background: "#fff",
                          padding: "0.5em",
                          borderRadius: "5px",
                          marginBottom: "0.5em",
                          display: "flex",
                          justifyContent: "space-between",
                          color: "#000",
                        }}
                      >
                        <div>{royalty.user_name}</div>
                        <div>{royalty.percentage}</div>
                      </Box>
                    ))}
                  </Box>
                  {!royaltySet ? (
                    <Button
                      onClick={() => saveRoyalties()}
                      variant="contained"
                      sx={{
                        backgroundColor: "#FF1C51",
                        padding: "0.5em 2em",
                        borderRadius: "30px",
                        fontFamily: "poppins",
                        textTransform: "capitalize",
                        fontSize: "15px",
                        fontWeight: "500",
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: "#FF1C51 !important",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Finish &amp; Set Royalties
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleClose()}
                      variant="contained"
                      sx={{
                        backgroundColor: "#FF1C51",
                        padding: "0.5em 2em",
                        borderRadius: "30px",
                        fontFamily: "poppins",
                        textTransform: "capitalize",
                        fontSize: "15px",
                        fontWeight: "500",
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: "#FF1C51 !important",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Close
                    </Button>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </DialogContent>
      <IconButton onClick={handleClose} className={classes.customizedButton}>
        <CloseIcon fontSize={"large"} />
      </IconButton>
    </Dialog>
  );
};

export default Royalty;
