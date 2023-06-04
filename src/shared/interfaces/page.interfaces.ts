
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