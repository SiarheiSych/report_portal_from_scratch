import { browserWrapper, ElementsArrayHelper, UIElement } from '../../common/element-wrapper';
import { Details, uiConstants } from '../../constants';
import { MainPage } from './main-page';

export class DashBoardPage extends MainPage {
  pageUrl = `${this.pageUrl}/14`;
  private containerLocator = '.react-grid-layout';
  private titleLocator = '.pageBreadcrumbs__page-breadcrumbs--29rem';
  private tablesLocator = '.widgetsGrid__widget-view--dVnmj';
  private tablesNameLocator = '.widgetHeader__widget-name-block--7fZoV';
  private totalStatisticsLocator = '.totalStatistics__total--19V2J';
  private totalStatisticsDetailLocator = '.totalStatistics__details--3-s7k';
  private amountsLocator = '.totalStatistics__amount--1mzKv';
  private detailsLocator = '.totalStatistics__label--12nUA';

  get container() {
    return UIElement.getInstance(this.containerLocator);
  }

  get title() {
    return UIElement.getInstance(this.titleLocator);
  }

  get tables() {
    return ElementsArrayHelper.getInstance(this.containerLocator, { childSelector: this.tablesLocator });
  }

  get nameOfTables() {
    return ElementsArrayHelper.getInstance(this.containerLocator, { childSelector: this.tablesNameLocator });
  }

  get totalStatistic() {
    return UIElement.getInstance(this.totalStatisticsLocator, { childSelector: this.amountsLocator });
  }

  async detailsResult(kind: Details) {
    if (kind == Details.amount) {
      return ElementsArrayHelper.getInstance(this.totalStatisticsDetailLocator, { childSelector: this.amountsLocator });
    } else {
      return ElementsArrayHelper.getInstance(this.totalStatisticsDetailLocator, { childSelector: this.detailsLocator });
    }
  }
  async waitLoaded(timeout = uiConstants.timeouts.defaultWait) {
    await this.container.waitForElementDisplayed(timeout);
  }

  async navigate(): Promise<string | void> {
    await browserWrapper.navigate(this.pageUrl);
    return this.waitLoaded();
  }
}
