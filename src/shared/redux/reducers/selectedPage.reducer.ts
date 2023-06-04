

import { DEFAULT_PAGE_NAME, Page, initialPage } from '../models/page.model';
import { CanvasActionTypes, EDIT_ELEMENT, SAVE_ELEMENTS } from '../actions/element.actions';
import { PageActionTypes, SELECT_PAGE_END, CHANGE_PAGE_NAME, SAVE_PAGE_THUMBNAIL } from '@store/actions/page.actions';


interface State {
  page: Page | null;
  selectedElement: {
    editorAction: string;
    elementId?: string;
    editorParameters?: { [key: string]: number | string | boolean };
  } | null;
}

const initialState: State = {
  page: initialPage,
  selectedElement: null
};

const selectedPageReducer = (state = initialState, action: PageActionTypes | CanvasActionTypes): State => {
  switch (action.type) {
    case SELECT_PAGE_END:
      return {
        page: action.payload.nextPage || state.page,
        selectedElement: null
      };
    case CHANGE_PAGE_NAME:
      return state.page ? {
        ...state,
        page: {
          ...state.page,
          name: action.payload || DEFAULT_PAGE_NAME
        }
      } : { ...state }
    case EDIT_ELEMENT:
      return {
        ...state,
        selectedElement: {
          ...action.payload,
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
    case SAVE_PAGE_THUMBNAIL:
      return state.page ? {
        ...state,
        page: {
          ...state.page,
          thumbnail: action.payload
        }
      } : { ...state }
    default:
      return state;
  }
};

export default selectedPageReducer;