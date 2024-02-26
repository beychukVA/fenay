import React from "react";
import { SongStepsEnum } from "../lib/SongStepsEnum";
import { SongAudienceStep } from "./Steps/SongAudienceStep";
import { SongDetailsStep } from "./Steps/SongDetailsStep";
import { SongRoyalitiesStep } from "./Steps/SongRoyalitiesStep";

class SongComponentsFactory {
  list = {
    [SongStepsEnum.SONG_AUDIENCE]: SongAudienceStep,
    [SongStepsEnum.SONG_DETAILS]: SongDetailsStep,
    [SongStepsEnum.SONG_ROYALITIES]: SongRoyalitiesStep,
  };

  getComponent({ step, setStep, data, setData }) {
    const Component = this.list[step];

    if (Component) {
      return <Component {...{ step, setStep, data, setData }} />;
    }

    return null;
  }
}

export const songComponentsFactory = new SongComponentsFactory();
