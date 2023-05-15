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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Content {}
