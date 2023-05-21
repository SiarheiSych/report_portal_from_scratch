import { AxiosResponse } from 'axios';
import { BaseClient } from '../../common/controllers/base-client';
import { browserWrapper } from '../../common/element-wrapper';
import { WidgetsAllNameResponse } from '../../common/models/widgets';
import { userCredantions } from '../../constants';
import { rpLoginPage } from '../pageobjects/login-page';

let widgets: AxiosResponse<WidgetsAllNameResponse>;

describe('My Login application', () => {
//   before('Login to app', async () => {
//     await rpLoginPage.open();
//     await browserWrapper.setWindowSize(windowSize.width, windowSize.height);
//     await rpLoginPage.login(userCredantions);
//   });

  it('should have correct name of setting button breadcrumb', async () => {
    let client = new BaseClient();
    client = await BaseClient.loginAs();
    await client.widgets.getWidgets('sergei_advanced');
    console.log(widgets);
  });
});
