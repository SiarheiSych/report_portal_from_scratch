import { Page } from "../../common/constant/lib/models";
import { uiConstants } from "../../common/constant/lib/ui-constants";
import { browserWrapper } from "../../common/element-wrapper/libs/browser";
import { UIElement } from "../../common/element-wrapper/libs/elements";

export abstract class BasePage implements Page {
    protected headerLocator: string;
    abstract pageUrl: string;
    protected container : UIElement
  
    async waitLoaded(timeout = uiConstants.timeouts.defaultWait) {
      await this.container.waitForElementDisplayed(timeout);
    }
  
    async navigate(): Promise<string | void> {
      await browserWrapper.navigate(this.pageUrl);
      return this.waitLoaded();
    }
}