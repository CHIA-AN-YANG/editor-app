export const SET_FILL_COLOR = 'SET_FILL_COLOR';
export const SET_STROKE_COLOR = 'SET_STROKE_COLOR';
export const SET_STROKE_WIDTH = 'SET_STROKE_WIDTH';
export const SET_OPACITY = 'SET_OPACITY';

interface SetFillColorAction {
  type: typeof SET_FILL_COLOR;
  payload: string;
}

interface SetStrokeColorAction {
  type: typeof SET_STROKE_COLOR;
  payload: string;
}

interface SetStrokeWidthAction {
  type: typeof SET_STROKE_WIDTH;
  payload: number;
}

interface SetOpacityAction {
  type: typeof SET_OPACITY;
  payload: number;
}

export const setFillColor = (color: string): SetFillColorAction => ({
  type: SET_FILL_COLOR,
  payload: color
});

export const setStrokeColor = (color: string): SetStrokeColorAction => ({
  type: SET_STROKE_COLOR,
  payload: color
});

export const setStrokeWidth = (width: number): SetStrokeWidthAction => ({
  type: SET_STROKE_WIDTH,
  payload: width
});

export const setOpacity = (opacity: number): SetOpacityAction => ({
  type: SET_OPACITY,
  payload: opacity
});

export type EditingAttributesActionTypes = SetFillColorAction | SetStrokeColorAction | SetStrokeWidthAction | SetOpacityAction;