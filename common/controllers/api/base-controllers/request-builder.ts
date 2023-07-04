import { Cookie } from '@wdio/protocols';
import type { AxiosRequestConfig, ResponseType } from 'axios';
import Axios from 'axios';
import { Authorization, requestConstants } from '../../../../constants';
import { getLogger } from '../../../utils';

import { ajvValidate } from './request-validator';

const logger = getLogger('[Request]');

Axios.interceptors.request.use(request => {
  logger.info(`Request body: ${JSON.stringify(request.data)}`);
  return request;
});

export class RequestBuilder {
  private requestOptions: AxiosRequestConfig = {};
  private bodyObj: unknown;

  public setBaseUrl(options?: { url?: string }): this {
    this.requestOptions.baseURL = options?.url;
    return this;
  }

  public setHeaders(headers?: { [key: string]: string }): this {
    this.requestOptions.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Connection': 'keep-alive',
      'Accept': 'application/json, text/plain, */*',
      ...this.requestOptions.headers,
      ...headers
    };
    return this;
  }

  protected setResponseType(responseType: ResponseType): this {
    this.requestOptions.responseType = responseType;
    return this;
  }

  public setAuthorization(options: Authorization): this {
    return this.setHeaders({
      authorization: `${options?.tokenType ?? requestConstants.authorization.bearer} ${options.token}`
    });
  }

  public setCookies(cookies: Cookie[]): this {
    const cookieString = cookies.map(cookie => `${cookie.name}=${cookie.value}`);
    return this.setHeaders({
      cookie: cookieString.join(';')
    });
  }

  public setTimeout(timeOut?: number): this {
    this.requestOptions.timeout = timeOut ? timeOut : requestConstants.defaultTimeout;
    return this;
  }

  public setParams<T>(params: T): this {
    this.requestOptions.params = params;
    return this;
  }

  public setData<T>(data?: T): this {
    this.requestOptions.data = data ? data : {};
    return this;
  }

  public setBody(body: unknown): this {
    this.bodyObj = body;
    return this;
  }

  get<T>(path: string) {
    return Axios.get<T>(path, this.requestOptions);
  }

  post<T, S = void>(path: string, requestSchema?: S) {
    if (requestSchema) {
      ajvValidate(requestSchema, this.bodyObj);
    }
    return Axios.post<T>(path, this.bodyObj, this.requestOptions);
  }

  put<T, S = void>(path: string, requestSchema?: S) {
    if (requestSchema) {
      ajvValidate(requestSchema, this.bodyObj);
    }
    return Axios.put<T>(path, this.bodyObj, this.requestOptions);
  }

  patch<T, S = void>(path: string, requestSchema?: S) {
    if (requestSchema) {
      ajvValidate(requestSchema, this.bodyObj);
    }
    return Axios.patch<T>(path, this.bodyObj, this.requestOptions);
  }

  delete<T>(path: string) {
    return Axios.delete<T>(path, this.requestOptions);
  }

  options<T>(path: string) {
    return Axios.options<T>(path, this.requestOptions);
  }

  protected setDefaultOptions(): this {
    this.setBaseUrl();
    this.setHeaders();
    this.setTimeout();
    return this;
  }
}
