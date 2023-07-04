import { User } from '../../constants';

export interface Token {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  jti: string;
}

export interface TokenRequestBody extends User {
  grant_type?: string;
  username: string;
  password: string;
}

