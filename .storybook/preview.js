import { RouterContext } from "next/dist/shared/lib/router-context"; // next 12
// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: "^on.*" },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
