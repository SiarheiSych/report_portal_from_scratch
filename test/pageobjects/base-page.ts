import { BrowserHelper } from '../../common/element-wrapper';
import { ElementHelper } from '../../common/element-wrapper/lib/elements';

let elementHelper: ElementHelper;
let browserHelper: BrowserHelper;
export abstract class BasePage {
  private _container: any;
  protected get container() {
    return this._container;
  }

  protected set container(value) {
    this._container = value;
  }

  async open(url): Promise<void> {
    await browserHelper.CreatePage(url);
  }
  async waitLoaded() {
    await elementHelper.isElementDisplayed(this.container);
  }
}
