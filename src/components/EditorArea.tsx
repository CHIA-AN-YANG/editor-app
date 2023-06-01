import { editElement, saveElements } from '@store/editElement.actions';
import { RootState } from '@store/store';
import fabric from 'fabric';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFabricJSEditor, FabricJSCanvas, FabricJSEditor } from '../shared/custom-fabricjs-react-lib';
import Toolbar from './Toolbar';
import styles from "../styles/editor.module.scss";
import { EditElementActionPayload } from '@interfaces/editElement.interfaces';


export default function EditorArea() {
  
  const dispatch = useDispatch();
  const history: fabric.fabric.Object[] = [];
  
  const {editor, onReady} = useFabricJSEditor();
  const selectedPage = useSelector((state: RootState) => state.selectedPage.page);
  const selectedElement = useSelector((state: RootState) => state.selectedPage.selectedElement);

  useEffect(() => {
    
    if (!editor?.canvas || !fabric) {
      return;
    }

    editor.canvas.setHeight(300);
    editor.canvas.setWidth(600);
    editor.canvas.renderAll();
  }, [editor?.canvas.backgroundImage]);


  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }
    editor.canvas.freeDrawingBrush.color = color;
    editor.setStrokeColor(color);
  }, [color]);

  const addCircle = (editor?:FabricJSEditor) => {
    editor && editor.addCircle();
  };
  const addRectangle = (editor?:FabricJSEditor) => {
    editor && editor.addRectangle();
  };
  const addText = (editor?:FabricJSEditor) => {
    editor && editor.addText("inset text");
  };
  const toggleDraw = (isDrawingMode=true,editor?:FabricJSEditor) => {
    editor && (editor.canvas.isDrawingMode = isDrawingMode);
  };
  const toggleSize = () => {
    if (!editor || !fabric) {
      return;
    }
    editor.canvas.freeDrawingBrush.width === 12
      ? (editor.canvas.freeDrawingBrush.width = 5)
      : (editor.canvas.freeDrawingBrush.width = 12);
  };
  const undo = (editor?:FabricJSEditor) => {
    if (editor?.canvas && (editor.canvas._objects.length > 0)) {
      history.push(editor.canvas._objects.pop()!);
    }
    editor?.canvas.renderAll();
  };
  const clear = (editor?:FabricJSEditor) => {
    if(!editor || !editor.canvas){
      return;
    }
    editor.canvas._objects.splice(0, editor.canvas._objects.length);
    history.splice(0, history.length);
    editor.canvas.renderAll();
  };
  
  useEffect(() => {
    if (selectedElement?.editorAction) {
      switch (selectedElement.editorAction) {
        case 'ADD_CIRCLE':
          addCircle(editor);
          break;
        case 'ADD_RECTANGLE':
          addRectangle(editor);
          break;
        case 'ADD_TEXT':
          addText(editor);
          break;
        case 'TOGGLE_DRAW':
          toggleDraw(Boolean(selectedElement.editorParameters?.isDrawingMode), editor);
          break;
        case 'TOGGLE_SIZE':
          toggleSize();
          break;
        case 'UNDO':
          undo();
          break;
        case 'CLEAR_CANVAS':
          clear(editor);
          break;
        default:
          break;
      }
    }
  }, [selectedElement]);

  const handleElementsSave = () => {
    if(editor?.canvas?._objects){
      dispatch(saveElements(editor));
      console.log('saveElements',selectedPage)
    }
  };

  return (
    <section className={styles.center}>
      <Toolbar></Toolbar>
      <div className={styles.panelBody}>
      <div className={styles.panelBodyTemp}>
          <button onClick={handleElementsSave}>
            Element save
          </button>

      </div>

      <div className={styles.editingArea}>
        <div
          style={{
            width: "var(--editing-area-width)",
            height: "var(--editing-area-height)",
            backgroundColor: "white"
          }}
        >
          <FabricJSCanvas className="sample-canvas" onReady={onReady} />
        </div>
      </div>
      </div>
    </section>)
}

  // const toggleDraw = () => {
  //   if (!editor?.editor || !fabric) {
  //     return;
  //   }
  //   editor.editor.canvas.isDrawingMode = !editor.editor.canvas.isDrawingMode;
  // };
  // const undo = () => {
  //   console.log(editor?.editor?.canvas._objects)
  //   if (fabric && (editor?.editor?.canvas._objects.length)) {
  //     history.push(editor.editor.canvas._objects.pop()!);
  //   }
  //   editor?.editor?.canvas.renderAll();
  // };

  // const clear = () => {
  //   if (!editor?.editor || !fabric) {
  //     return;
  //   }
  //   editor.editor.canvas._objects.splice(0, editor.editor.canvas._objects.length);
  //   history.splice(0, history.length);
  //   editor.editor.canvas.renderAll();
  // };

  // const removeSelectedObject = () => {
  //   if (!editor?.editor || !fabric) {
  //     return;
  //   }
  //   if (fabric && editor.editor.canvas.getActiveObject()) {
  //     editor.editor.canvas.remove(editor.editor.canvas.getActiveObject()!);
  //   }
  // };
  // const onAddLine = () => {
  //   console.log({history})
  //   if (!editor?.editor || !fabric) {
  //     return;
  //   }
  //   editor.editor.addLine();
  // };
  // const onAddRectangle = () => {
  //   console.log({history})
  //   if (!editor?.editor || !fabric) {
  //     return;
  //   }
  //   editor.editor.addRectangle();
  // };
  // const addText = () => {
  //   if (!editor?.editor || !fabric) {
  //     return;
  //   }
  //   editor.editor.addText("inset text");
  // };
