export class BaseController {
  constructor(protected readonly token?: string) {}
}

export type Authorization = {
  token: string;
  tokenType?: 'Bearer';
};
