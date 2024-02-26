import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  TextareaAutosize,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { BackstagePassStepsEnum } from "../../lib/BackstagePassStepsEnum";
import { BackstagePassCreatedDialog } from "../BackstagePassCreatedDialog";

const pricing = [
  {
    value: "$4.99",
    label: "4.99",
  },
  {
    value: "$9.99",
    label: "9.99",
  },
  {
    value: "$19.99",
    label: "19.99",
  },
];

const passes = [
  {
    value: "5",
    label: "5",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "15",
    label: "15",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "30",
    label: "30",
  },
  {
    value: "100",
    label: "100",
  },
];

export const BackstagePassDetailsStep = ({ setStep, setData, data }) => {
  const matches = useMediaQuery("(max-width:768px)");
  const [isBackstagePassCreatedDialogOpne, setBackstagePassCreatedDialogOpne] =
    useState(false);

  const [values, setValues] = useState({
    backstagePass: data?.backstagePass || "",
    numberPasses: data?.numberPasses || "",
    price: data?.price || "",
    description: data?.description || "",
  });

  const canNext =
    !values?.backstagePass ||
    !values?.numberPasses ||
    !values?.price ||
    !values?.description;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setData((prev) => ({ ...prev, [prop]: event.target.value }));
  };

  useEffect(() => setData((prev) => ({ ...prev, ...values })), []);

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
      {/** Pass details */}
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "28px",
          lineHeight: "34px",
          color: "#fff",
          letterSpacing: "0.2px",
          marginBottom: "48px",
        }}
      >
        Pass details
      </Typography>
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
            id="outlined-backstage-pass-input"
            label="Backstage pass"
            type="text"
            variant="outlined"
            value={values?.backstagePass}
            onChange={handleChange("backstagePass")}
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
        <Box
          sx={{
            marginBottom: "48px",
            marginLeft: matches ? "0" : "16px",
            width: { xs: "100%", lg: "366px" },
            "& .MuiFormControl-root": {
              width: "100%",
            },
            "& #outlined-number-passes-input": {
              padding: "0",
            },
          }}
        >
          <TextField
            id="outlined-number-passes-input"
            label="Number Passes"
            select
            placeholder="Choose option"
            value={values?.numberPasses}
            variant="outlined"
            onChange={handleChange("numberPasses")}
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
                color: "#FF8200 !important",
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
              padding: "14px 20px",
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
            }}
          >
            {passes.map((option) => (
              <MenuItem
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255, 130, 0, 0.16)",
                  },
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
      {/** Inputs 2 */}
      <Box
        sx={{
          marginBottom: "48px",
          width: "100%",
          maxWidth: "746px",
          "& .MuiFormControl-root": {
            width: "100%",
          },
          "& #outlined-price-input": {
            padding: "0",
          },
        }}
      >
        <TextField
          id="outlined-price-input"
          label="Choose price"
          placeholder="Choose option"
          select
          value={values?.price}
          variant="outlined"
          onChange={handleChange("price")}
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
              color: "#FF8200 !important",
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
            padding: "14px 20px",
            border: "1px solid #6B6A6A",
            borderRadius: "10px",
            background: "#2C2C3D",
          }}
        >
          {pricing.map((option) => (
            <MenuItem
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "rgba(255, 130, 0, 0.16)",
                },
              }}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {/** Inputs 3 */}
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "140%",
          color: "#D5D4D8",
          letterSpacing: "0.2px",
          marginBottom: "6px",
        }}
      >
        Description
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          maxWidth: "746px",
          height: "181px",
          background: "#2C2C3D",
          border: "1px solid #6B6A6A",
          borderRadius: "10px",
          padding: "15px 20px",
          marginBottom: "48px",
        }}
      >
        <FormControl
          sx={{
            width: "100%",
            height: "100%",
            // margin: "0 10px",
            "textarea::placeholder": {
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "140%",
              color: "rgba(255, 255, 255, 0.6)",
            },
          }}
          variant="outlined"
        >
          <TextareaAutosize
            maxRows={7}
            minRows={1}
            value={values?.description}
            placeholder="Pass description"
            onChange={handleChange("description")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              border: "none",
              outline: "none",
              borderRadius: "0",
              background: "inherit",
              color: "#9E9E9E",
              resize: "none",
              padding: "0 5px 0 0",
            }}
          />
        </FormControl>
      </Box>
      <Button
        disabled={canNext}
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
        onClick={() =>
          setStep(BackstagePassStepsEnum.BACKSTAGE_PASS_ROYALITIES)
        }
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
          Next
        </Typography>
      </Button>
      <BackstagePassCreatedDialog
        isBackstagePassCreatedDialogOpne={isBackstagePassCreatedDialogOpne}
        setBackstagePassCreatedDialogOpne={setBackstagePassCreatedDialogOpne}
      />
    </Box>
  );
};
