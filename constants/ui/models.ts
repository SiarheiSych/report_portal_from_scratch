import {puppeteer} from "puppeteer";

export interface User {
  username: string;
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

export interface IBrowser {
  GetBrowserInstance(): Promise<puppeteer.Browser>;
  CreatePage(URL: string, options: puppeteer.DirectNavigationOptions): Promise<puppeteer.Page>;
}
