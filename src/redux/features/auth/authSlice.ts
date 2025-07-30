import { AuthState } from "@/types/Auth";
import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunks";

const initState: AuthState = {
  user: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    logout(state) {
      (state.user = null);
      },
      setUser(state, action) {
          state.user = action.payload
       }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
