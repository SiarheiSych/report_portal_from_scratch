import { BrowserHelper } from './browser';

export class ElementHelper {
  async setOfflineMode(state) {
    await BrowserHelper.page.setOfflineMode(state);
  }

  async refreshPage() {
    await BrowserHelper.page.reload();
  }

  async wait(timeMs) {
    await new Promise<void>(resolve => {
      setTimeout(() => resolve(), timeMs);
    });
  }

  static async getElement(selector: string) {
    return await BrowserHelper.page.$x(selector);
  }

  public static async getAttributeValue(selector: string, properties: string) {
    return await BrowserHelper.page.$eval(selector, element => element.getAttribute(properties));
  }

  public static async scrollToElement(selector) {
    const [span] = await ElementHelper.getElement(selector);
    return await BrowserHelper.page.evaluate(element => {
      element.scrollIntoView();
    }, span);
  }

  static async getElementArray(selector: string) {
    return await BrowserHelper.page.$$(selector);
  }

  static async getCount(selector: string) {
    try {
      await BrowserHelper.page.waitForSelector(selector);
      return await BrowserHelper.page.$$eval(selector, element => element.length);
    } catch (error) {
      throw new Error(`Can't get count for the selecor: ${selector}`);
    }
  }

  static async clickOnElement(selector: string) {
    try {
      await BrowserHelper.page.waitForSelector(selector);
      await BrowserHelper.page.click(selector);
    } catch (error) {
      throw new Error(`Could not click on selector: ${selector}`);
    }
  }

  static async setValue(selector: string, value: string) {
    await BrowserHelper.page.click(selector, { clickCount: 3 });
    await BrowserHelper.page.keyboard.press('Backspace');
    await BrowserHelper.page.type(selector, value);
  }

  public static async dragAndDropElement(selector: string, x: number, y: number) {
    const preBoundingBox = await BrowserHelper.page.$(selector);
    const boundingBox = await preBoundingBox.boundingBox();
    await BrowserHelper.page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);
    await BrowserHelper.page.mouse.down();
    await BrowserHelper.page.mouse.move(x, y);
    await BrowserHelper.page.mouse.up();
  }

  public static async getText(selector: string) {
    try {
      await BrowserHelper.page.waitForSelector(selector);
      return await BrowserHelper.page.$eval(selector, element => element.innerHTML);
    } catch (error) {
      throw new Error(`Cannot get text from the selector: ${selector}`);
    }
  }
  public async isElementDisplayed(element) {
    const isVisibleHandle = await BrowserHelper.page.evaluateHandle(el => {
      const style = window.getComputedStyle(el);
      return style && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
    }, element);
    const visible = await isVisibleHandle.jsonValue();
    const box = await element.boxModel();
    if (visible && box) {
      return true;
    }
    return false;
  }
}
