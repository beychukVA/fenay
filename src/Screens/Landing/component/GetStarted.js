import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import { useStyles } from "../../../constant/customStyle";
import { useNavigate } from "react-router-dom";
import { nftGuidePDFUrl } from "../../../constant/constants";

export default function GetStarted() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [currentTitle, setCurrentTitle] = React.useState("What is Finay?");
  const hiddenRef = React.useRef();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  let navigate = useNavigate();

  const scrollHandler = () => {
    if (
      window.pageYOffset + window.innerHeight >=
      hiddenRef.current.offsetTop
    ) {
      setCurrentTitle("Why Finay?");
      console.log(`Hidden element is now visible`);
    }
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box display="flex" style={{ gap: "1em" }}>
        <Button
          //   onClick={handleClickOpen('paper')}
          onClick={() => navigate("/login")}
          className={classes.bannerButton}
          variant="contained"
        >
          <span>Get Started</span>
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        onScroll={scrollHandler}
        fullWidth={true}
        fullScreen={fullScreen}
        maxWidth="lg"
      >
        <DialogTitle id="scroll-dialog-title">
          <span>What is Finay?</span>
          <Button onClick={handleClose} sx={{ position: "absolute", right: 0 }}>
            x
          </Button>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <Box>
            {/* <Typography variant="h6" component="h2" color="#fff">
              What is Finay?
            </Typography> */}
            <Typography sx={{ mt: 2 }} color="lightgray">
              Finay is an all-in-one platform for sales, ticketing, membership,
              and NFTs. We believe that you shouldn’t have to be a household
              name to be successful in the music industry. With just a few
              devoted fans, you should experience the support you need and
              deserve.
            </Typography>

            <Box
              mt={3}
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                [theme.breakpoints.up("md")]: {
                  width: "60%",
                },
              }}
            >
              <img
                src={require("../../../assets/finay-banner.png")}
                alt="Finay"
                style={{ width: "100%" }}
              />
            </Box>

            <Typography sx={{ mt: 2 }} color="lightgray">
              We believe in equitable compensation for artists, so we cut out
              the middlemen and keep our fees the lowest in the business. Plus,
              you can earn commissions off of your work in perpetuity–including
              remixes!
            </Typography>
            <Typography sx={{ mt: 2 }} color="lightgray">
              Of course, none of this is possible without the fans, so Finay
              allows you to connect with your fans in new and deeper ways, like
              creating exclusive gated content for subscribers, testing out new
              music, selling tickets, and creating unique NFTs that let them own
              an original piece of your music.
            </Typography>
            <Typography sx={{ mt: 2 }} color="lightgray">
              Created by musicians, for musicians, Finay will be your partner
              and your promoter as you learn to take advantage of new and
              emerging technologies to support your passion.
            </Typography>
            <Typography sx={{ mt: 2, mb: 2 }} color="lightgray">
              We believe in equitable compensation for artists, so we cut out
              the middlemen and keep our fees the lowest in the business. Plus,
              you can earn commissions off of your work in perpetuity–including
              remixes!
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <p>Sell Music and Tickets</p>
                    </TableCell>
                    <TableCell>
                      <p>Create a Subscription Plan for Fans</p>
                    </TableCell>
                    <TableCell>
                      <p>Mint NFTs</p>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <p>
                        Get paid what you deserve by selling music and tickets
                        directly to your fans with no middleman.
                      </p>
                      <br />
                      <p>
                        Other platforms, record labels and distributors often
                        take 5-30% in fees off of every sale.
                        <br />
                        <b />
                        On Finay, you pay a flat fee of just 2.5% on website
                        sales.* Plus, you have the option of earning commission
                        anytime your content is resold in the future.
                      </p>
                    </TableCell>
                    <TableCell>
                      <p>
                        Connect directly with your fans using our Backstage Pass
                        feature. Give your fans exclusive behind the scenes
                        access to interviews, tutorials, never before seen
                        footage, new mixes, collectibles, and much more.
                      </p>
                      <br />
                      <p>
                        With Backstage Pass, you&rsquo;re in control&ndash;you
                        set the fees and determine what exclusive content you
                        want to offer to your supporters. The content you offer
                        is limited only by your creativity.
                      </p>
                    </TableCell>
                    <TableCell>
                      <p>
                        Finay makes it easy to get in on the ground floor of the
                        technology that is revolutionizing the music
                        industry.&nbsp;
                      </p>
                      <br />
                      <p>
                        NFTs (Non-Fungible Tokens) create new opportunities for
                        artists to earn directly from their fans without a
                        third-party distributor, manager, or record label. And
                        you don&rsquo;t need any special knowledge to
                        participate!
                      </p>
                      <br />
                      <p>
                        Learn more about NFTs{" "}
                        <a
                          href={nftGuidePDFUrl}
                          target="_blank"
                          style={{ color: "#fff" }}
                          rel="noreferrer"
                        >
                          here
                        </a>{" "}
                      </p>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Typography variant="h6" component="h2" color="#fff" mt={3} mb={2}>
            WHY FINAY?
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }}>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <p>Features</p>
                  </TableCell>
                  <TableCell>
                    <p>Finay</p>
                  </TableCell>
                  <TableCell>
                    <p>Patreon</p>
                  </TableCell>
                  <TableCell>
                    <p>Paypal</p>
                  </TableCell>
                  <TableCell>
                    <p>Ticketmaster</p>
                  </TableCell>
                  <TableCell>
                    <p>Tune Go</p>
                  </TableCell>
                  <TableCell>
                    <p>The Musician&rsquo;s Marketplace</p>
                  </TableCell>
                  <TableCell>
                    <p>OneOf</p>
                  </TableCell>
                  <TableCell>
                    <p>NFTTone</p>
                  </TableCell>
                  <TableCell>
                    <p>Opulous</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Fees</p>
                  </TableCell>
                  <TableCell>
                    <p>2.5% on transactions on the website.*</p>
                    <br />
                  </TableCell>
                  <TableCell>
                    <p>5%+ on transactions</p>
                  </TableCell>
                  <TableCell>
                    <p>3.49% on transactions + fixed fee</p>
                  </TableCell>
                  <TableCell>
                    <p>10% transaction fee</p>
                  </TableCell>
                  <TableCell>
                    <p>
                      Starting at $12/month membership, $9/year per song,
                      $30/year per album, plus promotion fees
                    </p>
                  </TableCell>
                  <TableCell>
                    <p>$199 annual fee</p>
                  </TableCell>
                  <TableCell>
                    <p>?</p>
                  </TableCell>
                  <TableCell>
                    <p>8% on every transaction</p>
                  </TableCell>
                  <TableCell>
                    <p>?</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Gated Content</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>?</p>
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Support for independent artists</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Indirectly</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>TBA</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Sell tickets</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Indirectly</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Easily track benefits and merch</p>
                  </TableCell>
                  <TableCell>
                    <p>?</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Direct fan engagement</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Build a membership</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Lazy Minting</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>Platform</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>N/A</p>
                  </TableCell>
                  <TableCell>
                    <p>Likely, but unclear until launch</p>
                  </TableCell>
                  <TableCell>
                    <p>Likely, but unclear until launch</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Mobile App</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>User Minting&nbsp;</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Likely, but unclear until launch</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Smart Royalty Contracts</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Support for Multiple Wallets</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <br />
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>TBA</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Supports fiat currency</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Simple, accessible UI</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Do they have their token?</p>
                  </TableCell>
                  <TableCell>
                    <p>Coming Soon</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No&nbsp;</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Access NFTs</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Video NFTs</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Samples/Beats</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>Yes</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                  <TableCell>
                    <p>No</p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => navigate("/signup")}
            // className={classes.bannerButton}
            variant="contained"
          >
            Sign Up
          </Button>
          <Button
            onClick={() => navigate("/login")}
            // className={classes.bannerButton}
            variant="contained"
          >
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
