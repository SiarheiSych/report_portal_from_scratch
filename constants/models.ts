export interface User {
  userName: string;
  password: string;
}

export interface Page {
  pageUrl: string;
  waitLoaded: () => void;
  navigate: () => Promise<string | void>;
}

export interface LoginPage {
  login(user: User): Promise<void>;
}

export class BaseController {
  constructor(protected readonly token?: string) {}
}

export type Authorization = {
  token: string;
  tokenType?: 'Bearer';
};
