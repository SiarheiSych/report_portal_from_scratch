import { getLogger } from '../../../utils';
import { RequestBuilder } from './request-builder';
import { Token, TokenRequestBody } from '../../../models/auth';

const logger = getLogger('[AUTH]');

export class Auth {
  private static apiTokenURL = 'http://localhost:8080/uat';

  static async getUserToken(credentials: TokenRequestBody): Promise<Token> {
    logger.info(`Requesting token from '${Auth.apiTokenURL}' for the user '${credentials.username}'`);

    const token = await Auth.getToken(credentials);
    return token;
  }

  private static async getToken(credentials: TokenRequestBody) {
    const tokenResponse = await new RequestBuilder()
      .setHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Connection: 'keep-alive',
        Accept: 'application/json, text/plain, */*',
        Authorization: 'Basic dWk6dWltYW4='
      })
      .setBody(
        new URLSearchParams({
          grant_type: 'password',
          username: credentials.username,
          password: credentials.password
        }).toString()
      )
      .post<Token>(`${this.apiTokenURL}/sso/oauth/token`);
    return tokenResponse.data;
  }
}
