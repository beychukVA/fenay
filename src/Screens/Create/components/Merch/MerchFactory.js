import React from "react";
import { MerchStepsEnum } from "../lib/MerchStepsEnum";
import { MerchDetailsStep } from "./Steps/MerchDetailsStep";
import { MerchRoyalitiesStep } from "./Steps/MerchRoyalitiesStep";

class MerchComponentsFactory {
  list = {
    [MerchStepsEnum.MERCH_DETAILS]: MerchDetailsStep,
    [MerchStepsEnum.MERCH_ROYALITIES]: MerchRoyalitiesStep,
  };

  getComponent({ step, setStep, data, setData }) {
    const Component = this.list[step];

    if (Component) {
      return <Component {...{ step, setStep, data, setData }} />;
    }

    return null;
  }
}

export const merchComponentsFactory = new MerchComponentsFactory();
