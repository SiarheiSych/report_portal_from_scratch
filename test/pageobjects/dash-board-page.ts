import { BrowserHelper, ElementHelper } from '../../common/element-wrapper';
import { BasePage } from './base-page';

export class DashBoardPage extends BasePage {
  private containerLocator = '#app div[class^="pageLayout__page-layout"]';
  private logoLocator = '[class^="layout__corner-area--DwLCT"]';
  private widgetsDescLocator = '[class^="widget__widget-container"]';
  private tablesNameLocator = '[class^="dashboardItemPage__shared-caption"]';
  private totalStatisticsLocator = '[class^="totalStatistics__total--19V2J"]';
  private totalStatisticsDetailLocator = '[class^="totalStatistics__details--3-s7k"]';
  private amountsLocator = '[class^="totalStatistics__amount--1mzKv"]';
  private detailsLocator = '[class^="totalStatistics__label--12nUA"]';

  constructor() {
    super();
    this.logoLocator;
  }

  get container() {
    return ElementHelper.getElement(this.containerLocator);
  }

  get tablesName() {
    return ElementHelper.getElement(this.tablesNameLocator);
  }

  get totalStatistic() {
    return ElementHelper.getElement(this.totalStatisticsLocator);
  }

  get totalStatisticsDetail() {
    return ElementHelper.getElement(this.totalStatisticsDetailLocator);
  }

  get amounts() {
    return ElementHelper.getElement(this.amountsLocator);
  }

  get details() {
    return ElementHelper.getElement(this.detailsLocator);
  }

  async getLogo() {
    return ElementHelper.getText(this.logoLocator);
  }

  async getWidget(ind: number) {
    return this.getListOfWidgets[ind];
  }

  async getListOfWidgets() {
    return ElementHelper.getElementArray(this.widgetsDescLocator);
  }

  async dragAndDropWidgets(ind: number, coordinateX: number, coordinateY: number) {
    const locator = await this.getWidget(ind);
    await ElementHelper.dragAndDropElement(locator, coordinateX, coordinateY);
  }

  async waitLoaded() {
    await BrowserHelper.page.waitForSelector(this.containerLocator, { visible: true, timeout: 5000 });
    await BrowserHelper.page.waitForSelector(this.logoLocator, { visible: true, timeout: 10000 });
  }

  async findWidgetByName(name: string) {
    const locator = `//div[contains(@class, "react-grid-item") and contains(., "${name}")]`;
    return await ElementHelper.getElement(locator)
  }
}

export const dashBoardPage = new DashBoardPage();
