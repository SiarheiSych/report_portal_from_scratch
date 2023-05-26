import { AxiosResponse } from 'axios';
import { BaseController } from '../../../constants';
import { WidgetsAllNameResponse } from '../../models/widgets';
import { JsonRequest } from './base-controllers/json-builder';

const apiUrlPath = 'http://localhost:8080/api';

export class WidgetsController extends BaseController {
  async getWidgets(cleanupId: string, fullResponse?: false): Promise<WidgetsAllNameResponse>;
  async getWidgets(cleanupId: string, fullResponse?: true): Promise<AxiosResponse<WidgetsAllNameResponse>>;

  async getWidgets(projectName: string, fullResponse?: boolean) {
    const response: AxiosResponse<WidgetsAllNameResponse> = await new JsonRequest()
      .setAuthorization({ token: this.token, tokenType: 'Bearer' })
      .get<WidgetsAllNameResponse>(`${apiUrlPath}/v1/${projectName}/widget/names/all`);
    return fullResponse ? response : response.data;
  }
}
