import Image from 'next/image';
import styles from '../styles/page.module.scss';
import PanelLeft from '../components/PanelLeft';
import PanelRight from '../components/PanelRight';
import Toolbar from '../components/Toolbar';
import { BsLayoutSidebar } from 'react-icons/bs';
import Layout from '../components/Layout';
import App from 'next/app';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../shared/redux/store';

// ReactDOM.render(
//   <Layout>
//     <App />
//   </Layout>,
    
//   document.getElementById('root')
// );

function HomePage() {
  return (
    <Layout>
          <main className={styles.main}>
      <PanelLeft></PanelLeft>
      <section className={styles.center}>
        <Toolbar></Toolbar>
        <div className={styles.editingArea}></div>
      </section>
      <PanelRight></PanelRight>
      {/* 
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
         */}
    </main>
    </Layout>
  );
}

export default HomePage;
