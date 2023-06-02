import { EditingAttributesActionTypes } from './editingAttributes.actions';


interface State {
  fillColor: string;
  strokeWidth: number;
  strokeColor: string;
  opacity: number;
}

const initialState: State = {
  fillColor: 'salmon',
  strokeWidth: 2,
  strokeColor: 'lightblue',
  opacity: 1
};

const editingAttributesReducer = (state = initialState, action: EditingAttributesActionTypes): State => {
  switch (action.type) {
    case 'SET_FILL_COLOR':
      return {
        ...state,
        fillColor: action.payload
      };
    case 'SET_STROKE_COLOR':
      return {
        ...state,
        strokeColor: action.payload
      };
    case 'SET_STROKE_WIDTH':
      return {
        ...state,
        strokeWidth: action.payload
      };
    case 'SET_OPACITY':
      return {
        ...state,
        opacity: action.payload
      };
    default:
      return state;
  }
};

export default editingAttributesReducer;