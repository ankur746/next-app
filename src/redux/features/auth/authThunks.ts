import { loginApi } from "@/service/authService";
import { AuthResponse } from "@/types/Auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk<
  AuthResponse,
  { username: string; password: string }
>("auth/loginUser", async ({ username, password }, thunkAPI) => {
  try {
    const response = await loginApi({ username, password });
    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue((err as any)?.message);
  }
});
