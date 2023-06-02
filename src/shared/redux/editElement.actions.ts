
import { EditElementActionPayload } from '@interfaces/editElement.interfaces';
import { FabricJSEditor, FabricJSEditorHook } from '../custom-fabricjs-react-lib/editor';
import { PageElement } from '@interfaces/page.interfaces';

// ActionTypes for canvas actions
export const SAVE_ELEMENTS = 'SAVE_ELEMENTS';
export const INIT_EDITOR = 'INIT_EDITOR';
export const UPDATE_ELEMENT_NAME = 'UPDATE_ELEMENT_NAME';
export const EDIT_ELEMENT = 'EDIT_ELEMENT';
export const EDIT_ELEMENT_FINISH = 'EDIT_ELEMENT_FINISH';

// Action creators
interface initEditorAction {
  type: typeof INIT_EDITOR,
  payload: FabricJSEditorHook
}
interface saveElementAction {
  type: typeof SAVE_ELEMENTS,
  payload: PageElement[],
};

interface updateElementNameAction {
  type: typeof UPDATE_ELEMENT_NAME,
  payload: { elementId: string, updateName: String },
};

interface editElementAction {
  type: typeof EDIT_ELEMENT,
  payload: EditElementActionPayload
};

interface editElementFinishAction {
  type: typeof EDIT_ELEMENT_FINISH,
}

export const initEditor = (editorHook: FabricJSEditorHook): initEditorAction => {
  return {
    type: INIT_EDITOR,
    payload: editorHook
  }
}

export const saveElements = (editor: FabricJSEditor): saveElementAction => {
  const elements: PageElement[] = [];
  editor.canvas._objects.forEach((element, idx) => (
    elements.push({
      code: idx + '',
      name: 'element-' + idx,
      data: element.toJSON()
    })
  ));
  return {
    type: SAVE_ELEMENTS,
    payload: elements,
  }
}

export const editElement = (editorAction: EditElementActionPayload): editElementAction => {
  return {
    type: EDIT_ELEMENT,
    payload: editorAction
  }
}

export type CanvasActionTypes = initEditorAction
  | saveElementAction
  | updateElementNameAction
  | editElementAction
  | editElementFinishAction;