
import { UIElement } from '../../common/element-wrapper/libs/elements'
import { LoginPage, User } from '../../common/constant/lib/models';
import { uiConstants } from '../../common/constant/lib/ui-constants';


class RPLoginPage implements LoginPage {
  get loginPanel() {
    return UIElement.getInstance('[placeholder="Login"]');
  }

  get passwordInput() {
    return UIElement.getInstance('[placeholder="Password"]');
  }

  get loginButton() {
    return UIElement.getInstance('[type="submit"]');
  }

   async login(user: User) {
    await this.loginPanel.waitForElementDisplayed(uiConstants.timeouts.defaultWait);
    await this.loginPanel.setValue(user.userName);
    await this.passwordInput.setValue(user.password);
    await this.loginButton.click();
  }
}

export const rpLoginPage = new RPLoginPage();