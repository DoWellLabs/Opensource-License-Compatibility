import React from "react";
import { LicenseCompatibility } from "../components/compatibility/LicenseCompatibility";

export default {
  title: "Home Page",
  component: LicenseCompatibility,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Compatibility = {
    args: {
    //   primary: true,
      label: 'License Compatibility',
    },
  };

