import { ElementsArrayHelper } from '../../common/element-wrapper/lib/elements-array-helper';
import { UIElement } from '../../common/element-wrapper/lib/elements';
import { BasePage } from './basepage';
import { pageUrls } from '../../constants';

export class MainPage extends BasePage {
  pageUrl = pageUrls.mainPage
  private settingsPanelLocator = '.sidebarButton__btn-title-mobile--j8jhQ';
  private tableHeaderLocator = '.headerCell__title-short--3_s1A';
  private dashboardLocator = 'a.gridCell__grid-cell--3e2mS';
  get container() {
    return UIElement.getInstance('.layout__layout--bNQ7A');
  }

  get title() {
    return UIElement.getInstance('[title="All Dashboards"]');
  }

  get tableHeader() {
    return ElementsArrayHelper.getInstance(this.tableHeaderLocator);
  }

  get settingsButton() {
    return ElementsArrayHelper.getInstance(this.settingsPanelLocator);
  }

  get dashBoard() {
    return UIElement.getInstance(this.dashboardLocator);
  }
}
