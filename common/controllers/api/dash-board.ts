import { AxiosResponse } from 'axios';
import { DashBoardBodyRequest, DashBoardIdResponse, DashBoardResponse } from '../../models';
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

  async postDashBoard(projectName: string, body: DashBoardBodyRequest, fullResponse?: boolean) {
    const response: AxiosResponse<DashBoardIdResponse> = await new JsonRequest()
      .setAuthorization({ token: this.token, tokenType: 'Bearer' })
      .setBody(body)
      .post<DashBoardIdResponse>(`${apiUrlPath}/v1/${projectName}/dashboard`);
    return fullResponse ? response : response.data;
  }
}
