import { puppeteer } from 'puppeteer';

export interface User {
  username: string;
  password: string;
}



export interface IBrowser {
  GetBrowserInstance(): Promise<puppeteer.Browser>;
  CreatePage(URL: string, options: puppeteer.DirectNavigationOptions): Promise<puppeteer.Page>;
}
