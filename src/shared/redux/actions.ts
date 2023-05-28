// Action types
export const SELECT_PAGE = 'SELECT_PAGE';
export const SELECT_ELEMENT = 'SELECT_ELEMENT';

// Action interfaces
interface SelectPageAction {
  type: typeof SELECT_PAGE;
  payload: string;
}

interface SelectElementAction {
  type: typeof SELECT_ELEMENT;
  payload: string | null;
}

// Action creators
export const selectPage = (pageId: string): SelectPageAction => {
  return {
    type: SELECT_PAGE,
    payload: pageId
  };
};

export const selectElement = (elementId: string | null): SelectElementAction => {
  return {
    type: SELECT_ELEMENT,
    payload: elementId
  };
};

// Export action types
export type ActionTypes = SelectPageAction | SelectElementAction;