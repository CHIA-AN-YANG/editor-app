

import { Page } from '@interfaces/page.interfaces';
import { CanvasActionTypes, EDIT_ELEMENT, EDIT_ELEMENT_FINISH, SAVE_ELEMENTS } from './editElement.actions';
import { CHANGE_PAGE_NAME, PageActionTypes, SELECT_PAGE } from './page.actions';

const INITIAL = 'initial';

interface State {
  page: Page | null;
  selectedElement: {
    editorAction: string;
    newAction: boolean;
    elementId?: string;
    editorParameters?: { [key: string]: number | string | boolean };
  } | null;
}

const initialPage: Page = {
  id: 'initialPageId',
  name: 'Initial Page',
  elements: []
};

const initialState: State = {
  page: initialPage,
  selectedElement: null
};

const selectedPageReducer = (state = initialState, action: PageActionTypes | CanvasActionTypes): State => {
  switch (action.type) {
    case SELECT_PAGE:
      return {
        page: action.payload,
        selectedElement: null
      };
    case CHANGE_PAGE_NAME:
      return state.page ? {
        ...state,
        page: {
          ...state.page,
          name: action.payload || 'Untitled Page'
        }
      } : { ...state }
    case EDIT_ELEMENT:
      return {
        ...state,
        selectedElement: {
          ...action.payload,
          newAction: true
        }
      };
    case EDIT_ELEMENT_FINISH:
      return {
        ...state,
        selectedElement: {
          editorAction: INITIAL,
          elementId: state.selectedElement?.elementId,
          newAction: false
        }
      };
    case SAVE_ELEMENTS:
      return state.page ? {
        ...state,
        page: {
          ...state.page,
          elements: action.payload
        },
      } : { ...state }
    default:
      return state;
  }
};

export default selectedPageReducer;