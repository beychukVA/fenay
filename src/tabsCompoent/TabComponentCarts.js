import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CutomCartCard from "../component/CartsCard";
import { useStyles } from "../constant/customStyle";
import { show_success } from "../helpers/toast";
import { DeleteCart } from "../Services/DeleteCart";
import { CreateNFTEvent } from "../Services/Events";
import { GetCart } from "../Services/GetCart";
import { CreateSong } from "../Services/Songs";
import { loadScript } from "@paypal/paypal-js";
import { paypalKey, paypalFee } from "../constant/constants";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const TabComponentCarts = ({ modalState }) => {
  const matches = useMediaQuery("(max-width:768px)");
  const [paypalScript, setPaypalScript] = useState(null);

  const classes = useStyles();
  const [cartData, setCartData] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(async () => {
    const response = await GetCart();
    setCartData(response.data);
    if (response.status_msg !== "Cart Empty" || response.data.length === 0) {
      setShowCheckout(true);

      const paypalMerchants = response.data.items.map(
        (item) => item.paypalMerchant
      );
      const paypalScriptInit = async () => {
        const paypal_script = await loadScript({
          "client-id": paypalKey,
          "merchant-id": [...new Set(paypalMerchants)],
        });
        setPaypalScript(paypal_script);
      };

      paypalScriptInit();
    }
  }, []);

  useEffect(() => {
    if(paypalScript){
    const paypalButtonInit = async () => {
      console.log("ORDER",cartData, {
        purchase_units: cartData.items.map(item => (
          {
            reference_id: item.itemId,
            payee: {
              merchant_id: item.paypalMerchant
            },
            amount: {
              currency_code: "USD",
              value: item.price,
            },
            payment_instruction: {
              disbursement_mode: "INSTANT",
              platform_fees: [
                {
                  amount: {
                    currency_code: "USD",
                    value: paypalFee,
                  },
                },
              ],
            },
          }
        )),
      });
      await paypalScript
        .Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: cartData.items.map(item => (
                {
                  reference_id: item.itemId,
                  payee: {
                    merchant_id: item.paypalMerchant
                  },
                  amount: {
                    currency_code: "USD",
                    value: item.price,
                  },
                  payment_instruction: {
                    disbursement_mode: "INSTANT",
                    platform_fees: [
                      {
                        amount: {
                          currency_code: "USD",
                          value: paypalFee,
                        },
                      },
                    ],
                  },
                }
              )),
            });
          },
          onApprove: function (data,actions){
            _onApprove(data, actions);
          },
          onCancel: () => _onError("Canceled"),
          onError: (err) => _onError(err)
        })
        .render(`#checkout_${cartData._id}`);
    };

      paypalButtonInit();
    }
  }, [paypalScript]);

  function _createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: cartData.bill,
          },
        },
      ],
    });
  }
  async function _onApprove(data, actions) {
    let order = await actions.order.capture();
    console.log(order);
    await checkOutHandle();
    return order;
  }
  function _onError(err) {
    console.log(err);
  }

  const deleteCartHandle = async (id) => {
    const res = await DeleteCart(id);
    const response = await GetCart();
    if (response.data.length === 0) {
      setShowCheckout(false);
    }
    setCartData(response.data);
    return res;
  };

  const checkOutHandle = async () => {
    for (let i = 0; i < cartData.items.length; i++) {
      if (cartData.items[i].category === "song") {
        let res = await CreateSong(cartData.items[i]);
        console.log("NFT CREATE", res);
      }
      if (cartData.items[i].category === "event") {
        let res = await CreateNFTEvent(cartData.items[i]);
        console.log("NFT CREATE", res);
      }
    }
    const response = await GetCart();
    setCartData(response.data);
    show_success("Checkout Successful");
    return true;
  };

  const onClose = () => {
    modalState(false);
  };
  return (
    <Grid container spacing={2} sx={{ marginTop: 1 }}>
      {Object.keys(cartData).length > 0 ? (
        cartData?.items.length > 0 &&
        cartData?.items.map((item, index) => (
          <Grid item xs={12} md={12} key={index}>
            <CutomCartCard
              isEvent={item.audioFile ? true : false}
              image={item.imgFile}
              author={item.album}
              description={item.artist}
              price={item.price}
              deleteCart={() => deleteCartHandle(item.itemId)}
            />
          </Grid>
        ))
      ) : (
        <Grid item xs={12} md={12}>
          <Typography>Cart is empty</Typography>
        </Grid>
      )}
      <Grid item xs={12} md={12}>
        <Box sx={{ marginTop: 0 }}>
          <Divider sx={{ background: "#FFFFFF", height: 1 }} />
        </Box>
      </Grid>
      <Grid item xs={12} md={12}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography className={classes.dilogLabel}>Total</Typography>
          <Typography className={classes.dilogLabel}>
            $ {cartData?.bill?.toFixed(2)}
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: 1, justifyContent: matches ? "center" : "flex-end" }}
      >
        {cartData?.items && showCheckout && (
          <Grid item xs={4} md={4}>
            {/* <PayPalButton
              createOrder={(data, actions) => _createOrder(data, actions)}
              onApprove={(data, actions) => _onApprove(data, actions)}
              onCancel={() => _onError("Canceled")}
              onError={(err) => _onError(err)}
            /> */}
            <div id={`checkout_${cartData._id}`}></div>
          </Grid>
        )}
        {/* <Grid item xs={4} md={4}>
          <Button
            onClick={() => checkOutHandle()}
            variant="contained"
            size="large"
            className={classes.checkButton}
          >
            Checkout
          </Button>
        </Grid>  */}
      </Grid>
      {/* <Box sx={{ marginBottom: 3, marginTop: 5 }}>
        <Button variant="contained" size="large" className={classes.checkButton}>Check</Button>
        <Button variant="text" className={classes.closeButton} sx={{ marginLeft: 5 }} onClick={onClose}>Close</Button>
      </Box> */}
    </Grid>
  );
};
export default TabComponentCarts;
