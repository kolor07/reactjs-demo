import { createSelector } from "reselect";

export const loginSelector = (state) => {
  console.log(">>> state in loginSelector", state);
  return state.currentUser;
};
