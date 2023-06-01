import { Page, PageElement } from '@interfaces/page.interfaces';
import { SAVE_ELEMENTS } from './editElement.actions';
import { PageActionTypes, SELECT_PAGE, SELECT_ELEMENT, CREATE_PAGE, CHANGE_PAGE_NAME, DELETE_PAGE } from './page.actions';



interface State {
  pages: Page[];
}

const initialPage: Page = {
  id: 'initialPageId',
  name: 'Initial Page',
  elements: []
};

const initialState: State = {
  pages: [initialPage]
};

const pageReducer = (state = initialState, action: PageActionTypes): State => {
  switch (action.type) {
    case CREATE_PAGE:
      return {
        pages: [...state.pages, action.payload]
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