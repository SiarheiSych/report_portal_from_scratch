import { browserWrapper } from '../../common/element-wrapper';
import { mainPageConstant, userCredantions } from '../../constants';
import { rpLoginPage } from '../pageobjects/login-page';
import { MainPage } from '../pageobjects/mainPage';

const mainPage = new MainPage();

const windowSize = {
  width: 1200,
  height: 700
};
describe('My Login application', () => {
  before('Login to app', async () => {
    await rpLoginPage.open();
    await browserWrapper.setWindowSize(windowSize.width, windowSize.height);
    await rpLoginPage.login(userCredantions);
  });

  it('should have correct name of setting button breadcrumb', async () => {
    const settingButtonName = await mainPage.settingsButton.getAllTextsList();
    const expectedResult = Object.values(mainPageConstant.buttons.settingsButton).map(el => el);
    settingButtonName.forEach((el, ind) => {
    expect(el).toEqual(expectedResult[ind]);
    });
  });
});
