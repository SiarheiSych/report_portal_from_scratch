import { expect } from 'chai';
import { MyClient } from '../../common/controllers/api/base-controllers/my-client';
import { DashBoardBodyRequest } from '../../common/models';
import { requestConstants, userCredantions } from '../../constants';

let myClient: MyClient;
const body: DashBoardBodyRequest = {
  description: 'Check if API works correctly',
  name: 'THIRD API DASHBOARD',
  share: true
};
describe('My Login application', () => {
  it('should have correct name of setting button breadcrumb', async () => {
    myClient = await MyClient.loginAs(userCredantions);
    const widgets = await myClient.widgets.getWidgets('sergei_advanced', true);
    expect(widgets.status).equal(requestConstants.statusCodes.success);
  });

  it('should have correct name of setting button breadcrumb', async () => {
    const dashBoard = await myClient.dashBoard.getDashBoard('sergei_advanced', true);
    expect(dashBoard.status).equal(requestConstants.statusCodes.success);
  });

  it('should have correct name of setting button breadcrumb', async () => {
    const dashBoard = await myClient.dashBoard.postDashBoard('sergei_advanced', body, false);
    expect(dashBoard).not.to.be.null;
  });
});
