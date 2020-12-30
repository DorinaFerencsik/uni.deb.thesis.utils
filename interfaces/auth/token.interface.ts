export interface IAccessToken {
  accessToken: string,
}

export interface IToken extends IAccessToken {
  refreshToken: string,
}

