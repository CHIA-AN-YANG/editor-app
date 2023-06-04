import { Page, initialPage } from '../models/page.model';
import { PageActionTypes, CREATE_PAGE, SAVE_SELECTED_PAGE, DELETE_PAGE } from '../actions/page.actions';

interface State {
  pages: Page[];
}

const initialState: State = {
  pages: [initialPage]
};

const pageReducer = (state = initialState, action: PageActionTypes): State => {
  switch (action.type) {
    case CREATE_PAGE:
      return {
        pages: [...state.pages, action.payload]
      };
    case SAVE_SELECTED_PAGE:
      const newPages = state.pages.map(page => (
        page.id === action.payload.id ? action.payload : page
      ))
      return {
        pages: [...newPages]
      };

    case DELETE_PAGE:
      const remainingPageId = state.pages.findIndex(page => page.id === action.payload.id);
      return {
        pages: [...state.pages.splice(remainingPageId, 1)]
      };
    default:
      return state;
  }
};

export default pageReducer;