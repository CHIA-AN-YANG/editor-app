import { BsArrowBarUp } from "react-icons/bs";
import { BsArrowUpShort } from "react-icons/bs";
import { BsArrowBarDown } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import styles from "../styles/editor.module.scss";


export default function PanelRight() {
  return (
    <section className={styles.panelRight}>
    <div className={styles.panelHead}>
      Component A
      <BsPencil></BsPencil>
      <BsFillTrash3Fill></BsFillTrash3Fill>
    </div>
    <div className={styles.panelBody}>
      [componentTree]
    </div>
  </section>
  )
}