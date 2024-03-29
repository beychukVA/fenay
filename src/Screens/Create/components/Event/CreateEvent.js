import React, { useState, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { EventStepsEnum } from "../lib/EventStepsEnum";
import { eventComponentsFactory } from "./EventFactory";
import { ReviewAccountBanner } from "../ReviewAccountBanner";
import ArrowLeftWhite from "../../../../assets/ArrowLeftWhite.svg";

export const CreateEvent = ({ setShowMenu }) => {
  const [step, setStep] = useState(EventStepsEnum.EVENT_AUDIENCE);
  const [data, setData] = useState({
    songAudience: "",
    pricing: "",
    HowManyToRelease: "",
    thumbnail: "",
    eventName: "",
    eventType: "",
    eventDate: "",
    description: "",
    liveVRLink: "",
    liveVideoLink: "",
    royalities: [],
    backgstagePass: "",
  });

  const values = Object.values(EventStepsEnum);
  const dots = [...values, ...values];
  let stepIndex = useMemo(() => {
    let index = values?.findIndex((value) => value === step);
    if (data?.royalities?.length > 0 && EventStepsEnum.EVENT_ROYALITIES)
      index++;
    return index;
  }, [data?.royalities?.length, step, values]);

  console.log("DATA: ", data);

  const checkBackStep = () => {
    switch (step) {
      case EventStepsEnum.EVENT_AUDIENCE:
        setShowMenu(true);
        break;
      case EventStepsEnum.EVENT_DETAILS:
        setStep(EventStepsEnum.EVENT_AUDIENCE);
        break;
      case EventStepsEnum.EVENT_ROYALITIES:
        setStep(EventStepsEnum.EVENT_DETAILS);
        break;

      default:
        setShowMenu(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <Box
        onClick={() => checkBackStep()}
        sx={{
          marginRight: "118px",
          width: "fit-content",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          cursor: "pointer !important",
          color: "#fff",
          transition: "all 250ms ease",
          "&:hover": {
            color: "rgba(255, 255, 255, 0.8)",
          },
          "&:hover div": {
            background: "rgba(255, 255, 255, 0.8)",
          },
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
            WebkitMask: `url(${ArrowLeftWhite}) center center / 24px 24px no-repeat`,
            mask: `url(${ArrowLeftWhite}) center center / 24px 24px no-repeat`,
            backgroundSize: "cover",
            transition: "all 250ms ease",
            background: "#fff",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "140%",
            color: "inherit",
            letterSpacing: "0.2px",
            marginLeft: "16px",
            transition: "all 250ms ease",
          }}
        >
          Back
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        {/** Review Banner */}
        <ReviewAccountBanner />
        {/**Steps */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginBottom: "48px",
          }}
        >
          {dots?.map((dot, index) => {
            const isActive = index === stepIndex || index === stepIndex + 1;
            const prev = index === stepIndex;
            const next = index === stepIndex + 1;
            const activeDotColor = isActive
              ? "#FFDCB7"
              : "rgba(255, 220, 183, 0.35)";
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: prev ? "24px" : "40px",
                  marginLeft: prev && index !== 0 ? "16px" : "0",
                  height: "24px",
                  background: prev || next ? "#FFDCB7" : "transparent",
                  borderRadius: prev
                    ? "33px 0 0 33px"
                    : next
                    ? "0 33px 33px 0"
                    : "0",
                }}
              >
                <Box
                  sx={{
                    width: "24px",
                    height: "24px",
                    background: activeDotColor,
                    borderRadius: "50%",
                    paddingRight: "16px",
                  }}
                />
              </Box>
            );
          })}
        </Box>
        {/** Step Content */}
        {eventComponentsFactory.getComponent({
          step,
          data,
          setData,
          setStep,
        })}
      </Box>
    </Box>
  );
};
