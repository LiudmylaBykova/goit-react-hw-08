import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  requestGetCurrentUser,
  requestLogOut,
  requestSignIn,
  requestSignUp,
  setToken,
} from "./operations";

export const apiRegisterUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignUp(formData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignIn(formData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setToken(token);
    try {
      const data = await requestGetCurrentUser();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiLogoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      await requestLogOut();

      return;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const INITIAL_STATE = {
  userData: null,
  token: null,
  isSignedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,

  extraReducers: (builder) => {
    builder
      //Regisrer
      .addCase(apiRegisterUser.pending, handlePending)
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      .addCase(apiRegisterUser.rejected, handleRejected)

      //Login
      .addCase(apiLoginUser.pending, handlePending)
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      .addCase(apiLoginUser.rejected, handleRejected)

      //Refresh
      .addCase(apiRefreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isError = false;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.userData = action.payload;
        state.isSignedIn = true;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isError = true;
      })
      //Logout
      .addCase(apiLogoutUser.pending, handlePending)
      .addCase(apiLogoutUser.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(apiLogoutUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
