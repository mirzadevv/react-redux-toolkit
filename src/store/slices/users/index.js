import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (obj, { dispatch, getState }) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users?_limit=${obj.limit}`
    ).then((res) => res.json());
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersList: [],
    status: null,
  },

  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.usersList = action.payload;
      state.status = "success";
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// export const { increment, decrement, incrementByAmount } = usersSlice.actions;
export default usersSlice.reducer;