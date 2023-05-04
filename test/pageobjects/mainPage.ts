import { ElementsArrayHelper } from "../../common/element-wrapper/lib/elements-array-helper";
import { UIElement } from "../../common/element-wrapper/lib/elements";
import { BasePage } from "./basepage";

export class MainPage extends BasePage {
  pageUrl: "ui/#sergei_advanced/dashboard";
  private settingsPanelLocator = ".sidebarButton__btn-title-mobile--j8jhQ";
  private tableHeaderLocator = ".headerCell__title-short--3_s1A";
  get container() {
    return UIElement.getInstance(".layout__layout--bNQ7A");
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
}
