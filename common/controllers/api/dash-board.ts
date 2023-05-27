import { AxiosResponse } from 'axios';
import { DashBoardBodyRequest, DashBoardIdResponse, DashBoardResponse, DeleteDashBoardResponse, UpdateDashBoardResponse } from '../../models';
import { BaseController, JsonRequest } from './base-controllers';

const apiUrlPath = 'http://localhost:8080/api';

export class DashBoardController extends BaseController {
  async getDashBoard(cleanupId: string, fullResponse?: false): Promise<DashBoardResponse>;
  async getDashBoard(cleanupId: string, fullResponse?: true): Promise<AxiosResponse<DashBoardResponse>>;

  async getDashBoard(projectName: string, fullResponse?: boolean) {
    const response: AxiosResponse<DashBoardResponse> = await new JsonRequest()
      .setAuthorization({ token: this.token, tokenType: 'Bearer' })
      .get<DashBoardResponse>(`${apiUrlPath}/v1/${projectName}/dashboard`);
    return fullResponse ? response : response.data;
  }

  async postDashBoard(projectName: string, body: DashBoardBodyRequest, fullResponse?: false): Promise<DashBoardIdResponse>;
  async postDashBoard(projectName: string, body: DashBoardBodyRequest, fullResponse?: true): Promise<AxiosResponse<DashBoardIdResponse>>;

  async postDashBoard(projectName: string, body: DashBoardBodyRequest, fullResponse?: boolean) {
    const response: AxiosResponse<DashBoardIdResponse> = await new JsonRequest()
      .setAuthorization({ token: this.token, tokenType: 'Bearer' })
      .setBody(body)
      .post<DashBoardIdResponse>(`${apiUrlPath}/v1/${projectName}/dashboard`);
    return fullResponse ? response : response.data;
  }

  async putDashBoard(projectName: string, dashBoardId: number, body, fullResponse?: false): Promise<UpdateDashBoardResponse>;
  async putDashBoard(projectName: string, dashBoardId: number, body, fullResponse?: true): Promise<AxiosResponse<UpdateDashBoardResponse>>;
  async putDashBoard(projectName: string, dashBoardId: number, body, fullResponse?: boolean) {
    const response: AxiosResponse<UpdateDashBoardResponse> = await new JsonRequest()
      .setAuthorization({ token: this.token, tokenType: 'Bearer' })
      .setBody(body)
      .put<UpdateDashBoardResponse>(`${apiUrlPath}/v1/${projectName}/dashboard/${dashBoardId}`);
    return fullResponse ? response : response.data;
  }

  async deleteDashBoard(projectName: string, dashBoardId: number, fullResponse?: false): Promise<DeleteDashBoardResponse>;
  async deleteDashBoard(projectName: string, dashBoardId: number, fullResponse?: true): Promise<AxiosResponse<DeleteDashBoardResponse>>;
  async deleteDashBoard(projectName: string, dashBoardId: number, fullResponse?: boolean) {
    const response: AxiosResponse<DeleteDashBoardResponse> = await new JsonRequest()
      .setAuthorization({ token: this.token, tokenType: 'Bearer' })
      .delete<DeleteDashBoardResponse>(`${apiUrlPath}/v1/${projectName}/dashboard/${dashBoardId}`);
    return fullResponse ? response : response.data;
  }
}
