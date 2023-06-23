import { BrowserHelper } from '../../common/element-wrapper';
import { baseUrl, dashBoardPageConstant, userCredantions } from '../../constants';
import { DashBoardPage, mainPage, rpLoginPage } from '../pageobjects';

let browserHelper: BrowserHelper;
let dashBoardPage = new DashBoardPage();

describe('Test for checking DashBoardPage', () => {
  describe('Dashboard page', () => {
    before(async () => {
      await browserHelper.CreatePage(baseUrl);
    });

    it('Open dashboard page', async () => {
      await rpLoginPage.login(userCredantions);
      await mainPage.waitLoaded();
      dashBoardPage = await mainPage.dashBoardPage();
      const logoText = await dashBoardPage.getLogo();
      expect(logoText).to.equal(dashBoardPageConstant.header);
    });

    it('Should move widgets', async () => {
      const widgetPosition = 1;
      const firstPosition = await dashBoardPage.findWidgetByName('TEST CASES GROWTH TREND CHART');
      const widget = await dashBoardPage.getWidget(widgetPosition);
      await dashBoardPage.dragAndDropWidgets(widget, 200, 300);
      await dashBoardPage.findWidgetByName('TEST CASES GROWTH TREND CHART');
      const secondPosition = await dashBoardPage.findWidgetByName('TEST CASES GROWTH TREND CHART');
      expect(firstPosition).not.to.equal(secondPosition);
    });
  });
});
