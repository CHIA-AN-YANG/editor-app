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
import {  setFillColor, setOpacity, setStrokeColor } from '@store/editingAttributes.actions';

enum EditorMode {
  EDIT = 'edit',
  DRAW = 'draw',
  SIZE = 'size'
}

export default function PanelRight() {

  const dispatch = useDispatch();
  const [mode, setMode] = useState(EditorMode.EDIT);
  const selectedElement = useSelector((state: RootState) => state.selectedPage.selectedElement);
  const {fillColor, strokeColor, opacity} = useSelector((state: RootState) => state.editingAttributes);

  const handleElementsEdit = (payload: EditElementActionPayload) => {
    dispatch(editElement(payload));
  }

  const handleFillColorChange = (newFillColor: string) => {
    dispatch(setFillColor(newFillColor));
  }

  const handleStrokeColorChange = (newStrokeColor: string) => {
    dispatch(setStrokeColor(newStrokeColor));
  }

  const handleOpacityChange = (newOpacity: number) => {
    dispatch(setOpacity(newOpacity));
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
          <div className={styles.panelBodyInput}>
            <div className={styles.panelBodyInputTitle}>
              Fill Color
            </div>
            <div className={styles.panelBodyInputContent}>
              <input type="color" value={fillColor} onChange={
                (e) => handleFillColorChange(e.target.value)
              }></input>
            </div>
          </div>
          <div className={styles.panelBodyInput}>
            <div className={styles.panelBodyInputTitle}>
              Stroke Color
            </div>
            <div className={styles.panelBodyInputContent}>
              <input type="color" value={strokeColor} onChange={
                (e) => handleStrokeColorChange(e.target.value)
              }></input>
            </div>
          </div>
          <div className={styles.panelBodyInputFlexColumn}>
            <div className={styles.panelBodyInputTitle}>
              Opacity
            </div>
            <div className={styles.panelBodyInputContent}>
              <input type="number" min="0" max="1" step="0.1" value={opacity} onChange={
                (e) => handleOpacityChange(parseFloat(e.target.value))
              }></input>
              <input type="range" min="0" max="1" step="0.1" value={opacity} onChange={
                (e) => handleOpacityChange(parseFloat(e.target.value))
              }></input>
            </div>
          </div>
          <button onClick={onAddCircle}>Add circle</button>

          <button onClick={onAddRectangle}>
            Add Rectangle
          </button>
          <button onClick={addText}>
            Add Text
          </button>
          <button onClick={toggleDraw}>
            Brush Tool
          </button>
          <button onClick={toggleSize}>
            Change Brush Size
          </button>
          <button onClick={undo}>
            Undo
          </button>
          <button onClick={deletElement}>
            Delete Element(s)
          </button>
          <button onClick={clear}>
            Clear Canvase
          </button>
      </div>
    </section>
  )
}