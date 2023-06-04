import { DEFAULT_PAGE_NAME, Page } from '../models/page.model';

// Action types
export const CREATE_PAGE = 'CREATE_PAGE';
export const SELECT_PAGE_START = 'SELECT_PAGE_START';
export const SELECT_PAGE_END = 'SELECT_PAGE_END';
export const CHANGE_PAGE_NAME = 'CHANGE_PAGE_NAME';
export const DELETE_PAGE = 'DELETE_PAGE';
export const SELECT_ELEMENT = 'SELECT_ELEMENT';
export const SAVE_PAGE_THUMBNAIL = 'SAVE_PAGE_THUMBNAIL';



// Action interfaces
interface CreatePageAction {
  type: typeof CREATE_PAGE;
  payload: Page;
}
interface SelectElementAction {
  type: typeof SELECT_ELEMENT;
  payload: string | null;
}

interface SelectPageStartAction {
  type: typeof SELECT_PAGE_START;
  payload: { pageId: string };
}

interface SelectPageEndAction {
  type: typeof SELECT_PAGE_END;
  payload: { currentPage: Page | null, nextPage?: Page };
}
interface DeletePageAction {
  type: typeof DELETE_PAGE;
  payload: { id: string };
}

interface ChangePageNameAction {
  type: typeof CHANGE_PAGE_NAME;
  payload: string;
}

interface SavePageThumbnailAction {
  type: typeof SAVE_PAGE_THUMBNAIL;
  payload: string;
}

// Action creators
export const createPage = (): CreatePageAction => {
  const timestamp = Date.now().toString();
  const pageId = 'page-' + timestamp;
  const pageName = DEFAULT_PAGE_NAME;

  return {
    type: CREATE_PAGE,
    payload: { id: pageId, name: pageName, elements: [] }
  };
};
export const selectPageStart = (pageId: string): SelectPageStartAction => {
  return {
    type: SELECT_PAGE_START,
    payload: { pageId }
  };
};

export const selectPageEnd = (currentPage: Page | null, nextPage?: Page): SelectPageEndAction => {
  return {
    type: SELECT_PAGE_END,
    payload: { currentPage: currentPage || null, nextPage }
  };
};

export const selectElement = (elementId: string | null): SelectElementAction => {
  return {
    type: SELECT_ELEMENT,
    payload: elementId
  };
};

export const deletePage = (id: string): DeletePageAction => ({
  type: DELETE_PAGE,
  payload: { id }
});

export const changePageName = (newName: string): ChangePageNameAction => ({
  type: CHANGE_PAGE_NAME,
  payload: newName
});

export const changePageThumbnail = (newThumbnail: string): SavePageThumbnailAction => ({
  type: SAVE_PAGE_THUMBNAIL,
  payload: newThumbnail
});

// Export action types
export type PageActionTypes = CreatePageAction
  | SelectElementAction
  | SelectPageStartAction
  | SelectPageEndAction
  | DeletePageAction
  | ChangePageNameAction
  | SavePageThumbnailAction