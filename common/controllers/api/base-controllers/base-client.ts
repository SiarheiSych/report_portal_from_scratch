/* eslint-disable */
// @ts-nocheck

import { TokenRequestBody } from '../../../models/auth';
import { Auth } from './auth';

export class BaseClient {

  static unauthorized<T>(this: new () => T) {
    return new this();
  }

  static async loginAs<T>(this: new () => T, credentials: TokenRequestBody) {
    const token = await Auth.getUserToken(credentials);
    return new this(token.access_token);
  }
}
