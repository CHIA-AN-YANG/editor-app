
export interface Page {
  id: string;
  name: string;
  thumbnail?: string;
  elements: PageElement[];
}
export interface PageElement {
  code: string;
  name: string;
  data: fabric.IObjectOptions;
}

export const DEFAULT_PAGE_NAME = 'Untitled Page';

export const initialPage: Page = {
  id: 'page-initial',
  name: DEFAULT_PAGE_NAME,
  elements: []
};