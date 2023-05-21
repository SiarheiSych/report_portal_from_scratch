import { BaseController, pageUrls } from '../../constants';
import { WidgetsAllNameRequestParams, WidgetsAllNameResponse } from '../models/widgets';
import { JsonRequest } from './json-builder';

export class widgetsController extends BaseController {
  public apiUrlPath: string;

  constructor(protected readonly token?: string) {
    super(token);
    this.apiUrlPath = `http://localhost:8080/api/`;
  }

  async getWidgets(projectName: string) {
    const token1 =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQwODgyMTEsInVzZXJfbmFtZSI6InNlcmdlaSIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJqdGkiOiI5ZmY1ZTNmNC1hODcyLTQ2NjItYjFjZC04ODgzOGI3OTNiNjkiLCJjbGllbnRfaWQiOiJ1aSIsInNjb3BlIjpbInVpIl19.1a_FdF1NzwjecZ8BgCGuQSG1JBTDANoj-uwEFzUyr3o';

    return new JsonRequest()
      .setBaseUrl()
      .setAuthorization({ token: token1, tokenType: 'Bearer' })

      .get<WidgetsAllNameResponse>(`v1/${projectName}/widget/names/all`);
  }
}
