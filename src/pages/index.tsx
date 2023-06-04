import PanelLeft from '@components/PanelLeft';
import PanelRight from '@components/PanelRight';
import styles from '@styles/main.module.scss';
import EditorArea from '@components/EditorArea';

function HomePage() {
  return (
    
      <main className={styles.main}>
          <PanelLeft></PanelLeft>
          <EditorArea></EditorArea>
          <PanelRight></PanelRight>
      </main>
  );
}

export default HomePage;
