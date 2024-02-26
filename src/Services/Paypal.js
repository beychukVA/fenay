import axios from "axios";
import qs from "qs";

export const get_token = () => {
  var data = qs.stringify({
    grant_type: "client_credentials",
  });
  var config = {
    method: "post",
    url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    headers: {
      Authorization:
        "Basic QVI1U3VCX09nZDJYcTQ3eWFLR1IzYy1QNFgzWmlITnpiS1pYQ0J3cEtjX1pQN0piLWhiSHc0dEFqQjBiYWZxMU5Dd0N2eU9FU1VaWHBpdTc6RU8wMjFpeUVLdHE2cFUtUjloRU5wYURoeVdxYXZ5cThLYWpRSkJYSllQUHRCeVZfTlktWGRFSW5DVjlnX0lGb2FvM2kzMHduTlJnM2JJMlI=",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const get_signup_url = (token, tracking_id) => {
  var axios = require("axios");
  var data = JSON.stringify({
    tracking_id: tracking_id,
    partner_config_override: {
      return_url: "http://localhost:4005/settings",
    },
    operations: [
      {
        operation: "API_INTEGRATION",
        api_integration_preference: {
          rest_api_integration: {
            integration_method: "PAYPAL",
            integration_type: "THIRD_PARTY",
            third_party_details: {
              features: ["PAYMENT", "REFUND"],
            },
          },
        },
      },
    ],
    products: ["EXPRESS_CHECKOUT"],
    legal_consents: [
      {
        type: "SHARE_DATA_CONSENT",
        granted: true,
      },
    ],
  });

  var config = {
    method: "post",
    url: "https://api-m.sandbox.paypal.com/v2/customer/partner-referrals",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
