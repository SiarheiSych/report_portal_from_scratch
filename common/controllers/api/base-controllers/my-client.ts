import { BaseClient } from './base-client';
import { WidgetsController } from '../widget';
import { DashBoardController } from '../dash-board';

export class MyClient extends BaseClient {
  public readonly widgets: WidgetsController;
  public readonly dashBoard: DashBoardController;

  constructor(protected token?: string) {
    super();
    this.widgets = new WidgetsController(token);
    this.dashBoard = new DashBoardController(token);
  }
}
