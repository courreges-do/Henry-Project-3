import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  user: {},
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.login = action.payload.login;
      state.user = action.payload.admittedUser;
    },
    logout: (state) => {
      state.login = false;
      state.user = {};
    },
  },
});

export const { setCredentials, logout } = usersSlice.actions;
