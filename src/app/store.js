import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";

const store = configureStore({
  reducer: {
    // renaming the counterSlice to counterReducer
    counter: counterReducer,
    // renaming the postSlice to postReducer
    posts: postReducer,
  },
});

export default store;
