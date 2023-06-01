import { BsArrowBarUp } from "react-icons/bs";
import { BsArrowUpShort } from "react-icons/bs";
import { BsArrowBarDown } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import styles from "../styles/editor.module.scss";
import { EditElementActionPayload } from '@interfaces/editElement.interfaces';
import { editElement } from '@store/editElement.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectPage } from '@store/page.actions';
import { RootState } from '@store/store';

enum EditorMode {
  EDIT = 'edit',
  DRAW = 'draw',
  SIZE = 'size'
}

export default function PanelRight() {

  const dispatch = useDispatch();
  const history = [] as Object[];
  const [color, setColor] = useState("#35363a");
  const [mode, setMode] = useState(EditorMode.EDIT);
  const selectedElement = useSelector((state: RootState) => state.selectedPage.selectedElement);


  const handleElementsEdit = (payload: EditElementActionPayload) => {
    dispatch(editElement(payload));
}

  const onAddCircle = () => {
    handleElementsEdit({
      editorAction: 'ADD_CIRCLE',
      editorParameters: { radius: 20 }
    })
  }
  const onAddRectangle = () => {
    handleElementsEdit({
      editorAction: 'ADD_RECTANGLE',
      editorParameters: { width: 20, height: 20 }
    })
  }
  const addText = () => {
    handleElementsEdit({
      editorAction: 'ADD_TEXT',
      editorParameters: { text: "inset text" }
    })
  }
  const toggleDraw = () => {
    if(mode === EditorMode.DRAW){
      setMode(EditorMode.EDIT);
    } else{
      setMode(EditorMode.DRAW);
    }
    
    handleElementsEdit({
      editorAction: 'TOGGLE_DRAW',
      editorParameters: {isDrawingMode: mode === EditorMode.DRAW}
    })
  }

  const toggleSize = () => {
    if(mode === EditorMode.SIZE){
      setMode(EditorMode.EDIT);
    } else{
      setMode(EditorMode.SIZE);
    }

    handleElementsEdit({
      editorAction: 'TOGGLE_SIZE',
      editorParameters: {isSizeMode: mode === EditorMode.SIZE}
    })
  }

  const undo = () => {
    handleElementsEdit({
      editorAction: 'UNDO',
    })
  }

  const deletElement = () => {
    handleElementsEdit({
      editorAction: 'DELETE_ELEMENT'
    })
  }

  const clear = () => {
    handleElementsEdit({
      editorAction: 'CLEAR_CANVAS',
    })
  }



  return (
    <section className={styles.panelRight}>
      
      <div className={styles.panelHead}>
        <div className={styles.panelHeadTitle}>
          Landing Page A
          <BsPencil></BsPencil>
        </div>
        <div className={styles.panelHeadBtn}>
          <BsFillTrash3Fill></BsFillTrash3Fill>
        </div>
      </div>

      <div className={styles.panelBody}>

          <button onClick={onAddCircle}>Add circle</button>

          <button onClick={onAddRectangle}>
            Add Rectangle
          </button>
          <button onClick={addText}>
            Add Text
          </button>
          <button onClick={toggleDraw}>
            Toggle draw
          </button>
          <button onClick={toggleSize}>
            ToggleSize
          </button>
          <button onClick={undo}>
            Undo
          </button>
          <button onClick={deletElement}>
            Delete Element
          </button>
          <button onClick={clear}>
            Clear Canvase
          </button>
      </div>
    </section>
  )
}