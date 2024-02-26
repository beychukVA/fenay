import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  TextField,
  Typography,
  useMediaQuery,
  Dialog,
  DialogContent,
} from "@mui/material";
import { useStyles } from "../../../../constant/customStyle";
import DatePickerIcon from "../../../../assets/DatePickerIcon.svg";
import CloseXIcon from "../../../../assets/CloseXIcon.svg";

const gender = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

export const AccountTab = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:768px)");
  const [isSwitchAccount, setSwitchAccount] = useState(false);
  const [isDeleteAccount, setDeleteAccount] = useState(false);
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    gender: "",
    birthday: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "140%",
          color: "#fff",
          letterSpacing: "0.2px",
          marginBottom: "48px",
        }}
      >
        Account
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
            id="outlined-name-input"
            label="Name"
            type="text"
            variant="outlined"
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
              border: "1px solid #515151",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
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
            id="outlined-username-input"
            label="Username"
            type="text"
            variant="outlined"
            onChange={handleChange("username")}
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
              border: "1px solid #515151",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
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
            marginBottom: "48px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            variant="outlined"
            onChange={handleChange("email")}
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
              border: "1px solid #515151",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
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
            id="outlined-phone-input"
            label="Phone"
            type="tel"
            variant="outlined"
            onChange={handleChange("phone")}
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
              border: "1px solid #515151",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          />
        </FormControl>
      </Box>
      {/** Inputs 3 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: matches ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginBottom: "48px",
            width: { xs: "100%", lg: "366px" },
            "& .MuiFormControl-root": {
              width: "100%",
            },
            "& #outlined-gender-input": {
              padding: "0",
            },
          }}
        >
          <TextField
            id="outlined-gender-input"
            label="Gender"
            select
            value={values?.gender}
            variant="outlined"
            onChange={handleChange("gender")}
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
              border: "1px solid #515151",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          >
            {gender.map((option) => (
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
        <FormControl
          sx={{
            marginBottom: "48px",
            marginLeft: matches ? "0" : "16px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-birthday-input"
            label="Birthday"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("birthday")}
            sx={{
              "input[type=date]::-webkit-calendar-picker-indicator": {
                background: "transparent",
              },
              "input[type=date]": {
                background: `url(${DatePickerIcon}) no-repeat 100% 50%`,
              },
              "& label.MuiInputLabel-root": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#D5D4D8 !important",
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
              padding: "15px 20px",
              border: "1px solid #515151",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          />
        </FormControl>
      </Box>
      <Button
        sx={{
          width: "175px",
          height: "52px",
          padding: "16px 71px",
          background: "rgba(255, 130, 0, 1)",
          borderRadius: "50px",
          transition: "all 250ms ease",
          "&:hover": {
            background: "rgba(255, 130, 0, 0.8)",
          },
          marginBottom: "64px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#000",
            textTransform: "capitalize",
          }}
        >
          Save
        </Typography>
      </Button>
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "140%",
          color: "#fff",
          letterSpacing: "0.2px",
          textTransform: "capitalize",
          marginBottom: "32px",
        }}
      >
        Related
      </Typography>
      <Typography
        onClick={() => setSwitchAccount(true)}
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "20px",
          color: "#fff",
          transition: "all 250ms ease",
          cursor: "pointer",
          "&:hover": {
            color: "rgba(255, 255, 255, 0.8)",
          },
          marginBottom: "20px",
        }}
      >
        Switch account type
      </Typography>
      <Typography
        onClick={() => setDeleteAccount(true)}
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "140%",
          color: "rgba(255, 45, 45, 1)",
          transition: "all 250ms ease",
          cursor: "pointer",
          "&:hover": {
            color: "rgba(255, 45, 45, 0.8)",
          },
          marginBottom: "20px",
        }}
      >
        Delete account
      </Typography>
      <Dialog
        classes={{ paper: classes.paper }}
        open={isSwitchAccount}
        maxWidth={"lg"}
        onClose={() => setSwitchAccount(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        PaperProps={{
          style: {
            width: "541px",
            borderRadius: "8px",
            background: "rgba(31, 34, 42, 0.44)",
            backdropFilter: "blur(25px)",
            border: "1px solid rgba(255, 255, 255, 0.31)",
          },
        }}
      >
        <DialogContent
          sx={{
            position: "relative",
            padding: "32px 159px 46px 32px !important",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "24px",
              right: "24px",
              width: "32px",
              height: "32px",
              transition: "all 250ms ease",
              WebkitMask: `url(${CloseXIcon}) center center / 32px 32px no-repeat`,
              mask: `url(${CloseXIcon}) center center / 32px 32px no-repeat`,
              cursor: "pointer",
              "&:not(:hover)": {
                background: "rgba(255, 255, 255, 1)",
              },
              "&:hover": {
                background: "rgba(255, 255, 255, 0.6)",
              },
            }}
            onClick={() => setSwitchAccount(false)}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "140%",
                color: "#fff",
                marginBottom: "14px",
              }}
            >
              Switch account type
            </Typography>
            <Box
              sx={{
                width: "100%",
                padding: "16px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                marginBottom: "14px",
                transition: "all 250ms ease",
                cursor: "pointer",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "14px",
                  color: "#fff",
                }}
              >
                Switch to Fan account
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                padding: "16px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                marginBottom: "14px",
                transition: "all 250ms ease",
                cursor: "pointer",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "14px",
                  color: "#fff",
                }}
              >
                Switch to Artist account
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
      <Dialog
        classes={{ paper: classes.paper }}
        open={isDeleteAccount}
        maxWidth={"lg"}
        onClose={() => setDeleteAccount(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        PaperProps={{
          style: {
            width: "541px",
            borderRadius: "8px",
            background: "rgba(31, 34, 42, 0.44)",
            backdropFilter: "blur(25px)",
            border: "1px solid rgba(255, 255, 255, 0.31)",
          },
        }}
      >
        <DialogContent
          sx={{
            position: "relative",
            padding: "32px 132px 30px 32px !important",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "24px",
              right: "24px",
              width: "32px",
              height: "32px",
              transition: "all 250ms ease",
              WebkitMask: `url(${CloseXIcon}) center center / 32px 32px no-repeat`,
              mask: `url(${CloseXIcon}) center center / 32px 32px no-repeat`,
              cursor: "pointer",
              "&:not(:hover)": {
                background: "rgba(255, 255, 255, 1)",
              },
              "&:hover": {
                background: "rgba(255, 255, 255, 0.6)",
              },
            }}
            onClick={() => setDeleteAccount(false)}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              Account deletion
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
                borderRadius: "10px",
                padding: "15px 24px 15px 20px",
                background: "rgba(255, 255, 255, 0.1)",
                cursor: "pointer",
                transition: "all 250ms ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.2)",
                },
                marginBottom: "20px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "140%",
                  letterSpacing: "0.2px",
                  color: "#fff",
                  marginBottom: "4px",
                }}
              >
                Deactivating your account is temporary
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "140%",
                  letterSpacing: "0.2px",
                  color: "rgba(255, 255, 255, 0.6)",
                  marginBottom: "4px",
                }}
              >
                Your profile, photos, posts, musics, comments, linkes will be
                hiddenuntil you enable it by logging back in.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
                borderRadius: "10px",
                padding: "15px 24px 15px 20px",
                background: "rgba(255, 255, 255, 0.1)",
                cursor: "pointer",
                transition: "all 250ms ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.2)",
                },
                marginBottom: "34px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "140%",
                  letterSpacing: "0.2px",
                  color: "#fff",
                  marginBottom: "4px",
                }}
              >
                Deleting your account is permanent
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "140%",
                  letterSpacing: "0.2px",
                  color: "rgba(255, 255, 255, 0.6)",
                  marginBottom: "4px",
                }}
              >
                Your profile, photos, posts, musics, comments, linkes,
                supporters will be permanently deleted.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button
                sx={{
                  border: "1px solid #FF8200",
                  borderRadius: "30px",
                  padding: "15px 23px",
                  transition: "all 250ms ease",
                  background: "rgba(255, 130, 0, 1)",
                  "&:hover": {
                    background: "rgba(255, 130, 0, 0.8)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "140%",
                    letterSpacing: "0.2px",
                    textTransform: "capitalize",
                    color: "#fff",
                    whiteSpace: "nowrap",
                  }}
                >
                  Deactivate account
                </Typography>
              </Button>
              <Button
                sx={{
                  border: "1px solid #FF8200",
                  borderRadius: "30px",
                  padding: "15px 32px",
                  background: "transparent",
                  transition: "all 250ms ease",
                  "&:hover": {
                    background: "rgba(255, 45, 45, 1)",
                  },
                  marginLeft: "16px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "140%",
                    letterSpacing: "0.2px",
                    textTransform: "capitalize",
                    color: "#fff",
                    whiteSpace: "nowrap",
                  }}
                >
                  Delete account
                </Typography>
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
