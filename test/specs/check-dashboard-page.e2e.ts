import { browserWrapper } from '../../common/element-wrapper';
import { dashBoardPageConstant, Details, userCredantions } from '../../constants';
import { DashBoardPage } from '../pageobjects/dash-board-page';
import { rpLoginPage } from '../pageobjects/login-page';
import { MainPage } from '../pageobjects/main-page';

const mainPage = new MainPage();
const dashBoardPage = new DashBoardPage();

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

  it('should navigate to Dash board page', async () => {
    await mainPage.dashBoardButton.click();
    const title = await dashBoardPage.title.getTrimText();
    expect(title).toEqual(dashBoardPageConstant.title, 'Page has incorrect title');
  });

  it('should have correct quantity of tables', async () => {
    const countOfTables = await dashBoardPage.tables.getElementsArray();
    expect(countOfTables.length).toEqual(12, 'Count of tables incorrect');
  });

  it('should have correct sum of total and details on overall statistic ', async () => {
    const totalCount = await dashBoardPage.totalStatistic.getTrimText();
    const elementaryTotalCount = parseInt(totalCount);
    const detailLocator = await dashBoardPage.detailsResult(Details.amount);
    const detailCount = await detailLocator.getTrimText();
    const expectedResult = await detailCount.map(el => parseInt(el));
    const elementaryExpectedResult = expectedResult.reduce((a, b) => a + b, 0);
    expect(elementaryTotalCount).toEqual(elementaryExpectedResult, 'Count of tables incorrect');
  });

  it('should have correct behavior name of test case', async () => {
    const detailLocator = await dashBoardPage.detailsResult(Details.details);
    const actualResult = await detailLocator.getTrimText();
    expect(actualResult).toEqual(['PASSED', 'FAILED', 'SKIPPED'], 'Test case behavior has incorrect name');
  });
});
