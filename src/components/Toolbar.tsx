import { BsCursorFill } from "react-icons/bs";
import { BsCursorText } from "react-icons/bs";
import styles from "../styles/editor.module.scss";


export default function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <button>
        <BsCursorFill></BsCursorFill>
      </button>
      <button>
        <BsCursorText></BsCursorText>
      </button>
    </div>)
}