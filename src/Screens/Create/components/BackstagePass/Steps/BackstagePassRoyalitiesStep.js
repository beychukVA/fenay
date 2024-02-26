import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PlusIcon from "../../../../../assets/PlusIcon.svg";
import CloseXIcon from "../../../../../assets/CloseXIcon.svg";
import { BackstagePassCreatedDialog } from "../BackstagePassCreatedDialog";

export const BackstagePassRoyalitiesStep = ({ setStep, setData, data }) => {
  const matches = useMediaQuery("(max-width:768px)");
  const [isBackstagePassCreatedDialogOpne, setBackstagePassCreatedDialogOpne] =
    useState(false);
  const refName = useRef();
  const refPercentage = useRef();
  const refJob = useRef();
  const refPaypalEmail = useRef();
  const [royalitiesSelected, setRoyalitiesSelected] = useState(null);
  const [values, setValues] = useState({
    name: "",
    percentage: "",
    job: "",
    paypalEmail: "",
  });

  const canAddRoyalities =
    !values?.name ||
    !values?.percentage ||
    !values?.job ||
    !values?.paypalEmail;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleAddAnother = () => {
    setData((prev) => ({
      ...prev,
      royalities: [
        ...prev?.royalities,
        {
          id: prev?.royalities?.length + 1,
          name: values?.name,
          percentage: values?.percentage,
          job: values?.job,
          paypalEmail: values?.paypalEmail,
        },
      ],
    }));
    setValues({
      name: "",
      percentage: "",
      job: "",
      paypalEmail: "",
    });
  };

  const handleRoyalitiesSelected = (royality) => {
    if (!royalitiesSelected || royalitiesSelected?.id !== royality?.id) {
      setRoyalitiesSelected(royality);
      setValues((prev) => ({
        ...prev,
        name: royality?.name,
        percentage: royality?.percentage,
        job: royality?.job,
        paypalEmail: royality?.paypalEmail,
      }));
      return;
    }
    setRoyalitiesSelected(null);
    setValues({
      name: "",
      percentage: "",
      job: "",
      paypalEmail: "",
    });
  };

  const handleUpdateRoyality = () => {
    setData((prev) => {
      const updatedRoyalities = [...prev.royalities]?.map((royality) => {
        if (royality?.id === royalitiesSelected?.id) {
          return {
            ...royality,
            name: values?.name,
            percentage: values?.percentage,
            job: values?.job,
            paypalEmail: values?.paypalEmail,
          };
        }
        return royality;
      });
      return { ...prev, royalities: updatedRoyalities };
    });
  };

  const handleRemoveRoyality = (removeRoyality) => {
    setData((prev) => {
      const updatedRoyalities = [...prev.royalities]?.filter(
        (royality) => royality?.id !== removeRoyality?.id
      );
      return { ...prev, royalities: updatedRoyalities };
    });
    setRoyalitiesSelected(null);
    setValues({
      name: "",
      percentage: "",
      job: "",
      paypalEmail: "",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      {/** Royalities */}
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "28px",
          lineHeight: "34px",
          color: "#fff",
          letterSpacing: "0.2px",
          marginBottom: "32px",
        }}
      >
        Royalities
      </Typography>
      {data?.royalities?.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            marginBottom: "48px",
          }}
        >
          {data?.royalities?.map((royality) => (
            <Button
              onClick={() => handleRoyalitiesSelected(royality)}
              sx={{
                position: "relative",
                zIndex: "0",
                background:
                  royalitiesSelected?.id === royality?.id
                    ? "#FF8200"
                    : "transparent",
                border: "1px solid #FF8200",
                borderRadius: "37px",
                padding: "13px 29px",
                marginBottom: "24px",
                "&:not(:last-child)": {
                  marginRight: "24px",
                },
                transition: "all 250ms ease",
                "&:hover": {
                  background: "rgba(255, 130, 0, 0.8)",
                },
              }}
            >
              <Typography
                sx={{
                  position: "relative",
                  zIndex: "1",
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "140%",
                  color:
                    royalitiesSelected?.id === royality?.id
                      ? "#000"
                      : "#D5D4D8",
                  letterSpacing: "0.2px",
                  textTransform: "none",
                }}
              >
                {`${royality?.name} -${royality?.percentage}%`}
              </Typography>
              {royalitiesSelected?.id === royality?.id && (
                <Box
                  onClick={() => handleRemoveRoyality(royality)}
                  sx={{
                    position: "absolute",
                    top: "-14px",
                    right: "-14px",
                    zIndex: "2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "18px",
                    height: "18px",
                    padding: "3px",
                    borderRadius: "50%",
                    background: "#EA3B56",
                  }}
                >
                  <Box
                    sx={{
                      width: "14px",
                      height: "14px",
                      background: `url(${CloseXIcon})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </Box>
              )}
            </Button>
          ))}
        </Box>
      )}
      {/** Inputs 1 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: matches ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <FormControl
          sx={{
            marginBottom: "48px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            ref={refName}
            id="outlined-name-input"
            label="Name"
            type="text"
            variant="outlined"
            value={values?.name}
            onChange={handleChange("name")}
            sx={{
              "& label.MuiFormLabel-filled": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& label.Mui-focused": {
                color: "#FF8200",
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
              },
              "& input": {
                padding: "0",
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
            }}
          />
        </FormControl>
        <FormControl
          sx={{
            marginBottom: "48px",
            marginLeft: matches ? "0" : "16px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            ref={refPercentage}
            id="outlined-percentage-input"
            label="Percentage"
            type="text"
            variant="outlined"
            value={values?.percentage}
            onChange={handleChange("percentage")}
            sx={{
              "& label.MuiFormLabel-filled": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& label.Mui-focused": {
                color: "#FF8200",
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& input": {
                padding: "0 !important",
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#9E9E9E !important",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
            }}
          />
        </FormControl>
      </Box>
      {/** Inputs 2 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: matches ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <FormControl
          sx={{
            marginBottom: "24px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            ref={refJob}
            id="outlined-job-input"
            label="Job"
            type="text"
            variant="outlined"
            value={values?.job}
            onChange={handleChange("job")}
            sx={{
              "& label.MuiFormLabel-filled": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& label.Mui-focused": {
                color: "#FF8200",
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
              },
              "& input": {
                padding: "0",
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
            }}
          />
        </FormControl>
        <FormControl
          sx={{
            marginBottom: "24px",
            marginLeft: matches ? "0" : "16px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            ref={refPaypalEmail}
            id="outlined-paypal-email-input"
            label="Paypal email"
            type="text"
            variant="outlined"
            value={values?.paypalEmail}
            onChange={handleChange("paypalEmail")}
            sx={{
              "& label.MuiFormLabel-filled": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& label.Mui-focused": {
                color: "#FF8200",
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& input": {
                padding: "0 !important",
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#9E9E9E !important",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
            }}
          />
        </FormControl>
      </Box>
      <Button
        disabled={canAddRoyalities}
        sx={{
          background: "transparent",
          border: "1px solid #FF8200",
          borderRadius: "4px",
          padding: "12px",
          transition: "all 250ms ease",
          marginBottom: "48px",
          "&:hover": {
            background: "rgba(255, 130, 0, 0.1)",
          },
          "&.MuiButton-root.Mui-disabled": {
            border: "1px solid rgba(255, 255, 255, 0.3)",
          },
        }}
        onClick={() => handleAddAnother()}
      >
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "140%",
            color: canAddRoyalities ? "rgba(255, 255, 255, 0.3)" : "#FF8200",
            letterSpacing: "0.2px",
            textTransform: "none",
            marginRight: "19px",
          }}
        >
          Add another
        </Typography>
        <Box
          sx={{
            width: "24px",
            height: "24px",
            padding: "3px",
            borderRadius: "50%",
            background: canAddRoyalities
              ? "rgba(255, 255, 255, 0.3)"
              : "#FF8200",
          }}
        >
          <Box
            sx={{
              width: "18px",
              height: "18px",
              background: `url(${PlusIcon})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Box>
      </Button>
      {data?.royalities?.length > 0 ? (
        royalitiesSelected === null ? (
          <Button
            // disabled={values?.type === "Single" ? canSingleNext : canAlbumNext}
            sx={{
              background: "#FF8200",
              borderRadius: "50px",
              padding: "16px 71.5px",
              transition: "all 250ms ease",
              "&:hover": {
                background: "rgba(255, 130, 0, 0.8)",
              },
              "&.MuiButton-root.Mui-disabled": {
                background: "rgba(255, 255, 255, 0.3)",
              },
            }}
            onClick={() => setBackstagePassCreatedDialogOpne(true)}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#000",
                textTransform: "none",
              }}
            >
              Set royalities
            </Typography>
          </Button>
        ) : (
          <Button
            // disabled={values?.type === "Single" ? canSingleNext : canAlbumNext}
            sx={{
              background: "#FF8200",
              borderRadius: "50px",
              padding: "16px 71.5px",
              transition: "all 250ms ease",
              "&:hover": {
                background: "rgba(255, 130, 0, 0.8)",
              },
              "&.MuiButton-root.Mui-disabled": {
                background: "rgba(255, 255, 255, 0.3)",
              },
            }}
            onClick={() => handleUpdateRoyality()}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#000",
                textTransform: "none",
              }}
            >
              Update
            </Typography>
          </Button>
        )
      ) : (
        <></>
      )}
      <BackstagePassCreatedDialog
        isBackstagePassCreatedDialogOpne={isBackstagePassCreatedDialogOpne}
        setBackstagePassCreatedDialogOpne={setBackstagePassCreatedDialogOpne}
      />
    </Box>
  );
};
