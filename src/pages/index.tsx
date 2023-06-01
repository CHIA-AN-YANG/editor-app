import PanelLeft from '@components/PanelLeft';
import PanelRight from '@components/PanelRight';
import styles from "@styles/main.module.scss";
import EditorArea from '@components/EditorArea';
import Layout from '@components/Layout';
import store from '@store/store';
import { Provider } from 'react-redux';

function HomePage() {
  return (
    <Layout>
      <main className={styles.main}>
      <Provider store={store}>
        <PanelLeft></PanelLeft>
        <EditorArea></EditorArea>
        <PanelRight></PanelRight>
      </Provider>
      </main>
      
    </Layout>

  );
}

export default HomePage;
