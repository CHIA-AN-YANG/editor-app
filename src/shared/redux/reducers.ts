import { ActionTypes, SELECT_PAGE, SELECT_ELEMENT } from './actions';

interface Element {
  id: string;
  name: string;
}

interface Page {
  id: string;
  name: string;
}

interface State {
  pages: {
    pageOrder: string[];
    page: Page[];
  };
  elements: Element[];
  selectedPage: string | null;
  selectedElement: string | null;
}

const initialState: State = {
  pages: {
    pageOrder: [],
    page: []
  },
  elements: [],
  selectedPage: null,
  selectedElement: null
};

const rootReducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case SELECT_PAGE:
      return {
        ...state,
        selectedPage: action.payload
      };
    case SELECT_ELEMENT:
      return {
        ...state,
        selectedElement: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;