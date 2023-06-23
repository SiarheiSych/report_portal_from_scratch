import { ElementHelper } from '../../common/element-wrapper';
import { User } from '../../constants';
import { BasePage } from './base-page';
import { MainPage } from './main-page';

let elementHelper: ElementHelper;
class RPLoginPage extends BasePage {
  private loginInputNameFieldLocator = '[class^="inputOutside__input"]';
  private inputPasswordFieldLocator = 'input[name="password"]';
  private submitButtonLocator = '[class^="bigButton__big-button"]';

  
  get loginInputField() {
    return ElementHelper.getElement(this.loginInputNameFieldLocator);
  }

  public async login(user: User) {
    await this.waitLoaded();
    await ElementHelper.setValue(this.loginInputNameFieldLocator, user.username);
    await ElementHelper.setValue(this.inputPasswordFieldLocator, user.password);
    await ElementHelper.clickOnElement(this.submitButtonLocator);
    return new MainPage();
  }

  async waitLoaded() {
    await elementHelper.isElementDisplayed(this.loginInputField);
  }
}

export const rpLoginPage = new RPLoginPage();
