import { ActionTypes, SELECT_PAGE, SELECT_ELEMENT, CREATE_PAGE, CHANGE_PAGE_NAME, DELETE_PAGE } from './actions';

interface Element {
  id: string;
  name: string;
}

interface Page {
  id: string;
  name: string;
  thumbnail?: string;
}

interface State {
  pages: {
    pageOrder: string[];
    page: Page[];
  };
  elements: Element[];
  selectedPage: Page | null;
  selectedElement: string | null;
}

const initialPage: Page = {
  id: 'initialPageId',
  name: 'Initial Page',
};

const initialState: State = {
  pages: {
    pageOrder: [initialPage.id],
    page: [initialPage]
  },
  elements: [],
  selectedPage: initialPage,
  selectedElement: null
};

const rootReducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case CREATE_PAGE:
      return {
        ...state,
        pages: {
          ...state.pages,
          pageOrder: [...state.pages.pageOrder, action.payload.id],
          page: [...state.pages.page, { id: action.payload.id, name: action.payload.name }]
        }
      };
    case SELECT_PAGE:
      return {
        ...state,
        selectedPage: state.pages.page.find(el => el.id === action.payload) || state.pages.page[0]
      };
    case SELECT_ELEMENT:
      return {
        ...state,
        selectedElement: action.payload
      };
    case DELETE_PAGE:
      const updatedPageOrder = state.pages.pageOrder.filter(id => id !== action.payload.id);
      const remainingPage = state.pages.page.filter(page => page.id !== action.payload.id);
      return {
        ...state,
        pages: {
          ...state.pages,
          pageOrder: updatedPageOrder,
          page: remainingPage
        }
      };
    case CHANGE_PAGE_NAME:
      const updatedPage = state.pages.page.map(page => {
        if (page.id === action.payload.id) {
          return { ...page, name: action.payload.newName };
        }
        return page;
      });
      return {
        ...state,
        pages: {
          ...state.pages,
          page: updatedPage
        }
      };
    default:
      return state;
  }
};

export default rootReducer;