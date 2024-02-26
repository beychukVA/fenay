import React, { useState, useEffect } from "react";
import { paypalFee } from "../../../../constant/constants";

const AdItem = ({ id, merchantId, paypalScript, price }) => {
  useEffect(() => {
    if (paypalScript && merchantId !== "") {
      const paypalButtonInit = async () => {
        await paypalScript
          .Buttons({
            createOrder: function (data, actions) {
              return actions.order.create({
                purchase_units: [
                  {
                    reference_id: "REFID-1",
                    payee: {
                      merchant_id: merchantId
                    },
                    amount: {
                      currency_code: "USD",
                      value: price,
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
                  },
                ],
              });
            },
          })
          .render(`#button_${id}`);
      };

      paypalButtonInit();
    }
  }, [paypalScript]);

  function _createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "1.00",
          },
        },
      ],
    });
  }
  async function _onApprove(data, actions) {
    let order = await actions.order.capture();
    console.log(order);
    return order;
  }
  function _onError(err) {
    console.log(err);
  }

  return <div id={`button_${id}`}></div>;
};

export default AdItem;
