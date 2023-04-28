import { UIElement } from "../../common/element-wrapper/lib/elements";
import { BasePage } from "./basepage";

export class MainPage extends BasePage {
  pageUrl: "ui/#sergei_advanced/dashboard";

  get container() {
    return UIElement.getInstance(".layout__layout--bNQ7A");
  }

  get title() {
    return UIElement.getInstance('[title="All Dashboards"]');
  }

  get settingsButton() {
    return UIElement.getInstance(".sidebarButton__btn-title-mobile--j8jhQ");
  }

  waitLoaded(timeout?: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  navigate(): Promise<string | void> {
    throw new Error("Method not implemented.");
  }
}
