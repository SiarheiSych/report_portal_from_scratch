export interface WidgetsAllNameRequestParams {
  projectName: string;
  filter_eq_shared?: boolean;
}

export interface WidgetsAllNameResponse {
  content: Content[];
  page: Page;
}

export interface Page {
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface DashBoardResponse {
  content: Content[];
  page: Page;
}

export interface Content {
  owner: string;
  share: boolean;
  id: number;
  name: string;
  widgets: Widgets[];
}

export interface Widgets {
  widgetName: string;
  widgetId: number;
  widgetType: string;
  widgetSize: WidgetSize;
  widgetPosition: WidgetPosition;
  share: boolean;
  widgetOptions: WidgetOptions;
}

export interface WidgetSize {
  width: number;
  height: number;
}

export interface WidgetPosition {
  positionX: number;
  positionY: number;
}

export interface WidgetOptions {
  zoom: boolean;
  timeLine: string;
  viewMode: string;
  includeMethods: boolean;
  launchNameFilter: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
//  export interface Content {}
export interface DashBoardIdResponse {
  id: number;
}

export interface DashBoardBodyRequest {
  description: string;
  name: string;
  share: boolean;
}

export interface UpdateDashBoardResponse {
  message:string
}

export interface DeleteDashBoardResponse {
  message:string
}