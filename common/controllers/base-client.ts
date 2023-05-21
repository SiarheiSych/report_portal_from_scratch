// import { IpreoAccountAuthentication, SamAuth, TokenRequestBody } from '@capital-access-e2e/auth';

import { widgetsController } from './widget';

export class BaseClient {
  public readonly widgets: widgetsController;
  constructor() {
    this.widgets = new widgetsController();
  }

  static async loginAs<T>(this: new () => T) {
    return new this();
  }
}
