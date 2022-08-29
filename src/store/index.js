import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slices/count";
import usersSlice from "./slices/users";

export const store = configureStore({
  reducer: {
    count: countSlice,
    users: usersSlice,
  },
});
