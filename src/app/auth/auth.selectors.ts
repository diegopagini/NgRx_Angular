import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

export const selectAuthState = createFeatureSelector<AuthState>("auth");
// This way we don't have to use pipe(map(auth) => !!auth.user)
export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

// Selectors are use it to improve the performance. Is like use the distinctUntilChange() rxjs operator
export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);
