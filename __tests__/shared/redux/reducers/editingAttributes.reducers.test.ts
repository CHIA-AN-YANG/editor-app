/*
Code Analysis

Objective:
The objective of the editingAttributesReducer function is to handle state changes for editing attributes such as fill color, stroke color, stroke width, opacity, position, and dirty status.

Inputs:
- state: the current state of the editing attributes
- action: an object that contains the type of action and the payload (data) associated with the action

Flow:
- The function uses a switch statement to determine which action to perform based on the action type.
- For each action, the function returns a new state object with the updated attribute values.

Outputs:
- The main output of the function is the updated state object with the new attribute values.

Additional aspects:
- The initialState object defines the default values for the editing attributes.
- The EditingAttributesActionTypes type defines the possible actions that can be performed on the editing attributes.
- The function uses the spread operator to create a new state object with the updated attribute values.
*/

import { EditingAttributesActionTypes } from '@store/actions/editingAttributes.actions';
import editingAttributesReducer from '@store/reducers/editingAttributes.reducers';


const initialState = {
  fillColor: '#FFFFE0',
  strokeWidth: 2,
  strokeColor: '#FA8072',
  opacity: 1
};

describe('editingAttributesReducer_function', () => {

  // Tests that SET_FILL_COLOR action updates the fill color in state
  it("test_set_fill_color", () => {
    const action = {
      type: 'SET_FILL_COLOR',
      payload: '#FFFFFF'
    };
    const newState = editingAttributesReducer(initialState, action as EditingAttributesActionTypes);
    expect(newState.fillColor).toEqual('#FFFFFF');
  });

  // Tests that SET_STROKE_COLOR action updates the stroke color in state
  it("test_set_stroke_color", () => {
    const action = {
      type: 'SET_STROKE_COLOR',
      payload: '#000000'
    };
    const newState = editingAttributesReducer(initialState, action as EditingAttributesActionTypes);
    expect(newState.strokeColor).toEqual('#000000');
  });

  // Tests that SET_STROKE_WIDTH action updates the stroke width in state
  it("test_set_stroke_width", () => {
    const action = {
      type: 'SET_STROKE_WIDTH',
      payload: 4
    };
    const newState = editingAttributesReducer(initialState, action as EditingAttributesActionTypes);
    expect(newState.strokeWidth).toEqual(4);
  });

  // Tests that SET_OPACITY action updates the opacity in state
  it("test_set_opacity", () => {
    const action = {
      type: 'SET_OPACITY',
      payload: 0.5
    };
    const newState = editingAttributesReducer(initialState, action as EditingAttributesActionTypes);
    expect(newState.opacity).toEqual(0.5);
  });

  // Tests that SET_POSITION action updates the position in state
  it("test_set_position", () => {
    const action = {
      type: 'SET_POSITION',
      payload: { x: 10, y: 20 }
    };
    const newState = editingAttributesReducer(initialState, action as EditingAttributesActionTypes);
    expect(newState.positionX).toEqual(10);
    expect(newState.positionY).toEqual(20);
    expect(newState.dirty).toBeFalsy();
  });
});
