// import { createSelector } from "@reduxjs/toolkit";
export const selectUserData = (state) => state.auth.userData;
export const selectUserToken = (state) => state.auth.token;
export const selectUserIsSignedIn = (state) => state.auth.isSignedIn;
export const selectUserIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.isError;
