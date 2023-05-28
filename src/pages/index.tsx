import PanelLeft from '@components/PanelLeft';
import PanelRight from '@components/PanelRight';
import styles from "@styles/main.module.scss";
import EditorArea from '@components/EditorArea';
import Layout from '@components/Layout';

function HomePage() {
  return (
    <Layout>
      <main className={styles.main}>
        <PanelLeft></PanelLeft>
        <EditorArea></EditorArea>
        <PanelRight></PanelRight>
      </main>
    </Layout>

  );
}

export default HomePage;
