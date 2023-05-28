import styles from "../styles/editor.module.scss";
import Toolbar from './Toolbar';

export default function EditorArea() {
  return (
    <section className={styles.center}>
      <Toolbar></Toolbar>
      <div className={styles.editingArea}></div>
    </section>)
}