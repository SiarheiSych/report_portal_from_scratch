import { browserWrapper } from '../../common/element-wrapper';
import { mainPageConstant, userCredantions } from '../../constants';
import { rpLoginPage } from '../pageobjects/login-page';
import { MainPage } from '../pageobjects/mainPage';

let mainPage = new MainPage();
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

  it('should have correct title', async () => {
    await mainPage.waitLoaded();
    const title = await mainPage.title.getText();
    expect(title).toEqual(mainPageConstant.title.toLocaleUpperCase());
  });

  it('should have correct name of setting button breadcrumb', async () => {
    const actualColumnList = await mainPage.tableHeader.getAllTextsList();
    const expectedResult = Object.values(mainPageConstant.columnName).map(el => el);
    actualColumnList.forEach((el, ind) => {
      expect(el).toEqual(expectedResult[ind]);
    });
  });
});
