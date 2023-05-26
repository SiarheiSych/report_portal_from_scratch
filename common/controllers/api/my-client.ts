import { BaseClient } from './base-controllers/base-client';
import { WidgetsController } from './widget';

export class MyClient extends BaseClient {
  public readonly widgets: WidgetsController;

  constructor(protected token?: string) {
    super();
    this.widgets = new WidgetsController(token);
  }
}
