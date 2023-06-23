import { BasePage } from './base-page';
import { BrowserHelper, ElementHelper } from '../../common/element-wrapper';
import { DashBoardPage } from './dash-board-page';

export class MainPage extends BasePage {
  private containerLocator = '#app div[class^="pageLayout__page-layout"]';
  private logoLocator = '[class^="layout__corner-area--DwLCT"]';
  private dashBoardLocator = '[class^="sidebar__top-block"] .sidebar__sidebar-btn--1kGbJ:nth-child(1)';

  constructor() {
    super();
    this.containerLocator;
  }

  get container() {
    return ElementHelper.getElement(this.containerLocator);
  }

  public async dashBoardPage() {
    await ElementHelper.clickOnElement(this.dashBoardLocator);
    return new DashBoardPage();
  }

  async waitLoaded() {
    await BrowserHelper.page.waitForSelector(this.containerLocator, { visible: true, timeout: 5000 });
    await BrowserHelper.page.waitForSelector(this.logoLocator, { visible: true, timeout: 10000 });
  }
}


export const mainPage = new MainPage();