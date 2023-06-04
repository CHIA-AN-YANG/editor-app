import { Page, PageElement } from '../interfaces/page.interfaces';

// Action types
export const CREATE_PAGE = 'CREATE_PAGE';
export const SELECT_PAGE = 'SELECT_PAGE';
export const CHANGE_PAGE_NAME = 'CHANGE_PAGE_NAME';
export const SAVE_SELECTED_PAGE = 'SAVE_SELECTED_PAGE';
export const DELETE_PAGE = 'DELETE_PAGE';
export const SELECT_ELEMENT = 'SELECT_ELEMENT';



// Action interfaces
interface CreatePageAction {
  type: typeof CREATE_PAGE;
  payload: Page;
}
interface SelectPageAction {
  type: typeof SELECT_PAGE;
  payload: Page;
}

interface SaveSelectedPageAction {
  type: typeof SAVE_SELECTED_PAGE;
  payload: Page;
}
interface SelectElementAction {
  type: typeof SELECT_ELEMENT;
  payload: string | null;
}

interface DeletePageAction {
  type: typeof DELETE_PAGE;
  payload: { id: string };
}

interface ChangePageNameAction {
  type: typeof CHANGE_PAGE_NAME;
  payload: string;
}


// Action creators
export const createPage = (): CreatePageAction => {
  const timestamp = Date.now().toString();
  const pageId = 'page-' + timestamp;
  const pageName = 'Untitled Page';

  return {
    type: CREATE_PAGE,
    payload: { id: pageId, name: pageName, elements: [] }
  };
};
export const selectPage = (page: Page): SelectPageAction => {
  return {
    type: SELECT_PAGE,
    payload: page
  };
};

export const saveSelectedPage = (page: Page): SaveSelectedPageAction => {
  return {
    type: SAVE_SELECTED_PAGE,
    payload: page
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

// Export action types
export type PageActionTypes = CreatePageAction
  | SelectPageAction
  | SelectElementAction
  | SaveSelectedPageAction
  | DeletePageAction
  | ChangePageNameAction;