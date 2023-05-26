import { MyClient } from '../../common/controllers/api/my-client';
import { requestConstants, userCredantions } from '../../constants';

let myClient: MyClient;

describe('My Login application', () => {
  it('should have correct name of setting button breadcrumb', async () => {
    myClient = await MyClient.loginAs(userCredantions);
    const widgets = await myClient.widgets.getWidgets('sergei_advanced', true);
    expect(widgets.status).toEqual(requestConstants.statusCodes.success);
  });
});
