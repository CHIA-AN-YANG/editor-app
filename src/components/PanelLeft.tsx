import { BsPencil } from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import styles from "../styles/editor.module.scss";


export default function PanelLeft() {
  return (
    <section className={styles.panelLeft}>
    <div className={styles.panelHead}>
      Landing Page A
      <BsPencil></BsPencil>
      <BsFillPlusSquareFill></BsFillPlusSquareFill>
      <BsFillTrash3Fill></BsFillTrash3Fill>
    </div>
    <div className={styles.panelBody}>
      [pagelist]
    </div>
    <div className={styles.panelHr}>
      [adjustable]
    </div>
    <div className={styles.panelHead}>
      Components
    </div>
    <div className={styles.panelBody}>
      [componentTree]
    </div>
  </section>
  )
}