import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loggedIn: false,
  email: null,
  status: "idle",
  error: null,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state?.users?.push(action.payload);
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setLoginEmail: (state, action) => {
      state.email = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { addUser, setUsers, setLoginEmail, setIsLoggedIn } =
  recipeSlice.actions;

export default recipeSlice.reducer;
