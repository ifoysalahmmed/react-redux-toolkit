import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    // renaming the counterSlice to counterReducer
    counter: counterReducer,
  },
});

export default store;
