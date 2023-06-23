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

  static async getElement(elLocator: string) {
    return await BrowserHelper.page.$x(elLocator);
  }

  public static async getAttributeValue(locator: string, properties: string) {
    return await BrowserHelper.page.$eval(locator, element => element.getAttribute(properties));
  }

  public static async scrollToElement(locator) {
    const [span] = await ElementHelper.getElement(locator);
    return await BrowserHelper.page.evaluate(element => {
      element.scrollIntoView();
    }, span);
  }

  static async getElementArray(elLocator: string) {
    return await BrowserHelper.page.$$(elLocator);
  }

  static async clickOnElement(elLocator: string) {
    await BrowserHelper.page.locator(elLocator).click();
  }

  static async setValue(locator: string, value: string) {
    await BrowserHelper.page.click(locator, { clickCount: 3 });
    await BrowserHelper.page.keyboard.press('Backspace');
    await BrowserHelper.page.type(locator, value);
  }

  public static async dragAndDropElement(locator: string, x: number, y: number) {
    const preBoundingBox = await BrowserHelper.page.$(locator);
    const boundingBox = await preBoundingBox.boundingBox();
    await BrowserHelper.page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);
    await BrowserHelper.page.mouse.down();
    await BrowserHelper.page.mouse.move(x, y);
    await BrowserHelper.page.mouse.up();
  }
  
  public static async getText(locator: string, isInnerText = false) {
    const element = await BrowserHelper.page.$(locator);
    if (isInnerText) {
        return element?.getProperty('innerHTML')
    } else {
        return element?.contentFrame()
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
