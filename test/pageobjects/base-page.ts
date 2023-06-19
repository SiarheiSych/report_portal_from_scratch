import { Browser } from '../../common/element-wrapper';
import { uiConstants, Page } from '../../constants';
import { MyHelpers } from '../../common/element-wrapper/lib/elements';

let browser: Browser;
let elementHelper: MyHelpers;

export abstract class BasePage implements Page {
  abstract pageUrl: string;
  private _container: any;
  protected get container() {
    return this._container;
  }

  protected set container(value) {
    this._container = value;
  }

  async waitLoaded(timeout = uiConstants.timeouts.defaultWait) {
    await elementHelper.seeElement(this.container, timeout);
  }

  async navigate(): Promise<string | void> {
    await browser.CreatePage(this.pageUrl);
    return this.waitLoaded();
  }
}
