import PanelLeft from '@components/PanelLeft';
import PanelRight from '@components/PanelRight';
import styles from '@styles/main.module.scss';
import EditorArea from '@components/EditorArea';
import { Titillium_Web } from 'next/font/google';

const titilliumWeb = Titillium_Web({ 
  weight: '600',
  subsets: ['latin'] 
});

function HomePage() {
  return (
      <main className={styles.main+' '+titilliumWeb.className}>
          <PanelLeft></PanelLeft>
          <EditorArea></EditorArea>
          <PanelRight></PanelRight>
      </main> 
  );
}

export default HomePage;
