import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import liveMessageSlice from "./liveMessageSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search:searchSlice,
    chat:chatSlice,
    liveMessage:liveMessageSlice
  },
});

export default store;
