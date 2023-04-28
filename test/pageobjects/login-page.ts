import { UIElement } from "../../common/element-wrapper";
import { LoginPage, uiConstants, User } from "../../constants";

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

  public open() {
    return browser.url(`http://localhost:8080/ui/#login`);
  }

  async login(user: User) {
    await this.loginPanel.waitForElementDisplayed(uiConstants.timeouts.defaultWait);
    await this.loginPanel.setValue(user.userName);
    await this.passwordInput.setValue(user.password);
    await this.loginButton.click();
  }
}

export default new RPLoginPage();
