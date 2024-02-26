import React from "react";
import { BackstagePassStepsEnum } from "../lib/BackstagePassStepsEnum";
import { BackstagePassDetailsStep } from "./Steps/BackstagePassDetailsStep";
import { BackstagePassRoyalitiesStep } from "./Steps/BackstagePassRoyalitiesStep";

class BackstagePassComponentsFactory {
  list = {
    [BackstagePassStepsEnum.BACKSTAGE_PASS_DETAILS]: BackstagePassDetailsStep,
    [BackstagePassStepsEnum.BACKSTAGE_PASS_ROYALITIES]:
      BackstagePassRoyalitiesStep,
  };

  getComponent({ step, setStep, data, setData }) {
    const Component = this.list[step];

    if (Component) {
      return <Component {...{ step, setStep, data, setData }} />;
    }

    return null;
  }
}

export const backstagePassComponentsFactory =
  new BackstagePassComponentsFactory();
