import { AuthState } from "@/types/Auth";
import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunks";

const initState: AuthState = {
  user: null,
  error: null,
  loading: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    logout(state) {
      (state.user = null), (state.token = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: any) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
