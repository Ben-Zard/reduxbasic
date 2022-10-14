import { createSlice } from "@reduxjs/toolkit";
import { loginState} from "./interface";

const initialloginState: loginState = { isLoggedIn: false };
const LoginSlice = createSlice({
    name: "login",
    initialState: initialloginState,
    reducers: {
      login(state: loginState) {
        state.isLoggedIn = true;
      },
      logout(state: loginState) {
          state.isLoggedIn = false;
          },
    },
  });

  export const LoginActions = LoginSlice.actions;
  export default LoginSlice;