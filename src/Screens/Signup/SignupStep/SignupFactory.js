import React from "react";
import { SignupStepsEnum } from "./lib/SignupStepsEnum";
import { AccountCompleteStep } from "./Steps/AccountCompleteStep";
import { AccountInformationStep } from "./Steps/AccountInformationStep";
import { AccountTypeStep } from "./Steps/AccountTypeStep";
import { AccountVerificationStep } from "./Steps/AccountVerificationStep";

class SignupComponentsFactory {
  list = {
    [SignupStepsEnum.ACCOUNT_TYPE]: AccountTypeStep,
    [SignupStepsEnum.ACCOUNT_INFORMATION]: AccountInformationStep,
    [SignupStepsEnum.ACCOUNT_VERIFICATION]: AccountVerificationStep,
    [SignupStepsEnum.ACCOUNT_COMPLETE]: AccountCompleteStep,
  };

  getComponent({ step, setStep, data, setData }) {
    const Component = this.list[step];

    if (Component) {
      return <Component {...{ step, setStep, data, setData }} />;
    }

    return null;
  }
}

export const signupComponentsFactory = new SignupComponentsFactory();
