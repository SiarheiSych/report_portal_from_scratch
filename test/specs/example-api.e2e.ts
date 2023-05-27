import { expect } from 'chai';
import { errorHandler } from '../../common/controllers/api/base-controllers/helpers';
import { MyClient } from '../../common/controllers/api/base-controllers/my-client';
import { DashBoardBodyRequest } from '../../common/models';
import { apiConst, mockBodyForPutRequest, requestConstants, userCredantions } from '../../constants';

let myClient: MyClient;
const projectName = 'sergei_advanced';

let dashBoardId: number;
describe('Check POST,PUT,GET,DELETE methods for different endpoints', () => {
  before('get client', async () => {
    myClient = await MyClient.loginAs(userCredantions);
  });
  describe('Check get method for widgets', () => {
    describe('Positive scenario', () => {
      it('should have correct response for get widgets', async () => {
        const widgets = await myClient.widgets.getWidgets(projectName, true);
        expect(widgets.status).equal(requestConstants.statusCodes.success);
      });

      it('should have correct content from get widgets endpoint', async () => {
        const widgets = await myClient.widgets.getWidgets(projectName, true);
        expect(widgets.data.content).to.deep.equal([apiConst.widgetContent]);
      });
    });
    describe('Negative scenario', () => {
      it('should return error code with unexisting project name', async () => {
        const widgets = await errorHandler(myClient.widgets.getWidgets('aaa', true));
        expect(widgets.status).equal(requestConstants.statusCodes.forbidden);
      });

      it('should return error message with unexisting project name', async () => {
        const widgets = await errorHandler(myClient.widgets.getWidgets('aaa', true));
        expect(widgets.data.message).equal(apiConst.error.enoughPermission);
      });
    });
  });
  describe('Check post method for dashboard', () => {
    const body: DashBoardBodyRequest = {
      description: 'Check if API works correctly',
      name: 'THIRD API DASHBOARD',
      share: true
    };
    describe('Positive scenario', () => {
      it('should not be null for post dash board ', async () => {
        const dashBoard = await myClient.dashBoard.postDashBoard(projectName, body, false);
        dashBoardId = dashBoard.id;
        expect(`Should have new dashBoardId: ${dashBoardId}`).not.to.be.null;
      });
    });
    describe('Negative Scenario', () => {
      let postDashBoardResponse;
      it('should not create the same dash board with existing name and return correct status code', async () => {
        postDashBoardResponse = await errorHandler(myClient.dashBoard.postDashBoard(projectName, body, true));
        expect(postDashBoardResponse.status).equal(requestConstants.statusCodes.conflict);
      });

      it('should not create the same dash board with existing name', async () => {
        expect(postDashBoardResponse.data.message).to.deep.equal(`Resource '${body.name}' already exists. You couldn't create the duplicate.`);
      });
    });
  });
  describe('Check get method for dashboard', () => {
    let fullResponse;
    describe('Positive scenario', () => {
      it('should have correct status for get dashboard', async () => {
        const getDashBoardResponse = await myClient.dashBoard.getDashBoard(projectName, true);
        fullResponse = getDashBoardResponse.data.content;
        expect(getDashBoardResponse.status).equal(requestConstants.statusCodes.success);
      });

      it(`should contain dashBoardId:${dashBoardId} in this project`, async () => {
        const actualDashBoardsId = fullResponse.map(el => el.id);
        expect(actualDashBoardsId).contain(dashBoardId);
      });
    });
  });
  describe('Check put method for dashboard', () => {
    let putDashBoardResponse;
    const dashBoardIdForUpdate = 17;
    describe('Positive scenario', () => {
      it('should return correct status code', async () => {
        putDashBoardResponse = await myClient.dashBoard.putDashBoard(projectName, dashBoardIdForUpdate, mockBodyForPutRequest, true);
        expect(putDashBoardResponse.status).equal(requestConstants.statusCodes.success);
      });

      it(`should contain dashBoardId:${dashBoardIdForUpdate} in this project`, async () => {
        const actualMessage = putDashBoardResponse.data.message;
        expect(actualMessage).to.deep.equal(`Dashboard with ID = '${dashBoardIdForUpdate}' successfully updated`);
      });
    });

    describe('Negative scenario', () => {
      const unexistingDashBoardId = 123;
      let putDashBoardResponse;
      it('should return an error with unexisting dashBoard ID', async () => {
        putDashBoardResponse = await errorHandler(myClient.dashBoard.putDashBoard(projectName, unexistingDashBoardId, mockBodyForPutRequest, true));
        expect(putDashBoardResponse.status).equal(requestConstants.statusCodes.notFound);
      });

      it('should return error message with unexisting dashBoard ID', async () => {
        const actualMessage = putDashBoardResponse.data.message;
        expect(actualMessage).to.deep.equal(
          `Dashboard with ID '${unexistingDashBoardId}' not found on project '${projectName}'. Did you use correct Dashboard ID?`
        );
      });
    });
  });
  describe('Check delete method for dashboard', () => {
    describe('Positive scenario', () => {
      it('should delete dashboard', async () => {
        const dashBoard = await myClient.dashBoard.deleteDashBoard(projectName, dashBoardId, false);
        expect(dashBoard.message).equal(`Dashboard with ID = '${dashBoardId}' successfully deleted.`);
      });
    });
    describe('Negative scenario', () => {
      let deleteDashBoardResponse;
      it('should not delete dashboard which was deleted', async () => {
        deleteDashBoardResponse = await errorHandler(myClient.dashBoard.deleteDashBoard(projectName, dashBoardId, true));
        expect(deleteDashBoardResponse.status).equal(requestConstants.statusCodes.notFound);
      });
      it('should have correct error message', async () => {
        const actualMessage = deleteDashBoardResponse.data.message;
        expect(actualMessage).equal(`Dashboard with ID '${dashBoardId}' not found on project '${projectName}'. Did you use correct Dashboard ID?`);
      });
    });
  });
});

