export class BaseController {
  constructor(protected readonly token?: string) {}
}

export type Authorization = {
  token: string;
  tokenType?: 'Bearer';
};

export interface ErrorResponse {
  status: number;
  statusText: string;
  data: Data;
}

export interface Data {
  message: string;
  errorCode: number;
}
