import { PageActionTypes, CREATE_PAGE, SELECT_PAGE_START, SELECT_PAGE_END, DELETE_PAGE } from '@store/actions/page.actions';
import { Page, initialPage } from '../models/page.model';

interface State {
  pages: Page[];
  isPageLoading: boolean;
  nextPageId?: string;
}

const initialState: State = {
  pages: [initialPage],
  isPageLoading: false
};

const pageReducer = (state = initialState, action: PageActionTypes): State => {
  switch (action.type) {
    case CREATE_PAGE:
      return {
        pages: [...state.pages, action.payload],
        isPageLoading: false
      };
    case SELECT_PAGE_START:
      return {
        ...state,
        isPageLoading: true,
        nextPageId: action.payload.pageId
      };
    case SELECT_PAGE_END:
      const newPages = state.pages.map(page => (
        (page.id === action.payload.currentPage?.id) ? action.payload.currentPage : page
      ))
      return {
        pages: [...newPages],
        isPageLoading: false,
        nextPageId: undefined
      };

    case DELETE_PAGE:
      const remainingPageId = state.pages.findIndex(page => page.id === action.payload.id);
      return {
        pages: [...state.pages.splice(remainingPageId, 1)],
        isPageLoading: false
      };
    default:
      return state;
  }
};

export default pageReducer;