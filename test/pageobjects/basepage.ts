import { UIElement, browserWrapper } from "../../common/element-wrapper";
import { Page, uiConstants } from "../../common/constant";

export abstract class BasePage implements Page {
  protected headerLocator: string;
  abstract pageUrl: string;
  protected container: UIElement;

  async waitLoaded(timeout = uiConstants.timeouts.defaultWait) {
    await this.container.waitForElementDisplayed(timeout);
  }

  async navigate(): Promise<string | void> {
    await browserWrapper.navigate(this.pageUrl);
    return this.waitLoaded();
  }
}
