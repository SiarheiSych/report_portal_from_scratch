import { browserWrapper } from '../../common/element-wrapper';
import { mainPageConstant, userCredantions } from '../../constants';
import { rpLoginPage } from '../pageobjects/login-page';
import { MainPage } from '../pageobjects/main-page';

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
      expect(el).toEqual(expectedResult[ind], 'Buttons have invalid name');
    });
  });

  it('should switch to Large card ', async () => {
    await mainPage.switchToLargeCard();
    const tableTitle = await mainPage.tableTitle.getTrimText();
    expect(tableTitle).toEqual(['MY DASHBOARDS', 'SHARED DASHBOARDS'],'Large card was not appeared or Large card has invalid quantity of tables' );
  });

  it('should have correct quantity of tables in Large card', async () => {
    const length = await mainPage.tables.getElementsArray();
    expect(length.length).toEqual(2,'Incorrect quantity of tables');
  });

  it('should swith to Small card', async () => {
    await mainPage.switchToSmallCard();
    const length = await mainPage.tables.getElementsArray();
    expect(length.length).toEqual(0, 'Something wrong with Small card');
  });
});
