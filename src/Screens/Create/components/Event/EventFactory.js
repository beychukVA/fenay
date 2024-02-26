import React from "react";
import { EventStepsEnum } from "../lib/EventStepsEnum";
import { EventAudienceStep } from "./Steps/EventAudienceStep";
import { EventDetailsStep } from "./Steps/EventDetailsStep";
import { EventRoyalitiesStep } from "./Steps/EventRoyalitiesStep";

class EventComponentsFactory {
  list = {
    [EventStepsEnum.EVENT_AUDIENCE]: EventAudienceStep,
    [EventStepsEnum.EVENT_DETAILS]: EventDetailsStep,
    [EventStepsEnum.EVENT_ROYALITIES]: EventRoyalitiesStep,
  };

  getComponent({ step, setStep, data, setData }) {
    const Component = this.list[step];

    if (Component) {
      return <Component {...{ step, setStep, data, setData }} />;
    }

    return null;
  }
}

export const eventComponentsFactory = new EventComponentsFactory();
