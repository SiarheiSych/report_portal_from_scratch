import { ElementsArrayHelper } from '../../common/element-wrapper/lib/elements-array-helper';
import { UIElement } from '../../common/element-wrapper/lib/elements';
import { BasePage } from './base-page';
import { Buttons } from '../../constants';

export class MainPage extends BasePage {
  pageUrl: 'ui/#sergei_advanced';
  private settingsPanelLocator = '.sidebarButton__btn-title-mobile--j8jhQ';
  private tableHeaderLocator = '.headerCell__title-short--3_s1A';
  private pageBreadCrumbs = '.dashboardPageToolbar__buttons--1giLD';
  private cardButtonLocator = '.ghostButton__color-topaz--2GTla';
  private tableContainerLocator = '.pageLayout__page-content--2R36V';
  private tableTitleLocator = '.dashboardGridList__headline--3xz62';
  private sharedDashboardContainer = '.dashboardGridList__dashboard-grid-body--2_iXc';
  private dashboardButtonLocator = '.gridCell__align-left--2beIG';
  private sideBarLocator = '.layout__sidebar-container--gX2bY';

  get container() {
    return UIElement.getInstance('.pageLayout__page-layout--1YfSw');
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

  get tableTitle() {
    return ElementsArrayHelper.getInstance(this.tableContainerLocator, { childSelector: this.tableTitleLocator });
  }

  get tables() {
    return ElementsArrayHelper.getInstance(this.tableContainerLocator, { childSelector: this.sharedDashboardContainer });
  }

  get dashBoardButton() {
    return UIElement.getInstance(this.tableContainerLocator, { childSelector: this.dashboardButtonLocator });
  }

  async switchToLargeCard() {
    const buttonLocator = UIElement.getInstance(this.pageBreadCrumbs, { childSelector: 'button' });
    return await buttonLocator.click();
  }

  async switchToSmallCard() {
    const buttonLocator = ElementsArrayHelper.getInstance(this.pageBreadCrumbs, { childSelector: 'button' });
    const smallCardButton = await buttonLocator.getElementsArray();
    return smallCardButton[1].click();
  }

  async projectTable() {
    const projectTable = await this.tables.getElementsArray();
    const projectTables = projectTable[1];
    return projectTables;
  }

  async sideBarButton(ind: Buttons) {
    const buttonLocator = ElementsArrayHelper.getInstance(this.sideBarLocator, { childSelector: '.sidebar__top-block--6oCNs a' });
    const asdasd = await buttonLocator.getElementsArray();
    const button = await asdasd[ind];
    return await button.click();
  }
}
