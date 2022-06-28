export enum AuthState {
  LOGGED_IN = 'LoggedIn',
  ACCESS_TOKEN_EXPIRED = 'NeedsRefresh',
  ANONYMOUS = 'Anonymous',
  INVALID_CREDENTIALS = 'InvalidCredentials',
  AUTHENTICATE = "Authenticate",
}
