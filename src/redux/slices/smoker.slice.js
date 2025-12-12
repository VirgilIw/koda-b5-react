import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  smokers: [],
};

const smokerSlice = createSlice({
  initialState,
  name: "smoker",
  reducers: {
    addFormSmoker: (prevState, action) => {
      prevState.smokers = [...prevState.smokers, action.payload];
    },
    removeFormSmoker: (prevState) => {
      prevState.smokers = [];
    },
  },
});

export const { addFormSmoker, removeFormSmoker } = smokerSlice.actions;
export default smokerSlice.reducer; // mau dipakai di store
