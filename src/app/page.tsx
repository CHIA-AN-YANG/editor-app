import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>

      <section className={styles.panelLeft}>
        <div className={styles.panelHead}>
          Landing Page A
          [icon edit]
          [icon plus]
          [icon delete]
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
      <section className={styles.center}>
        <div className={styles.toolbar}>
          <button>
            <Image
              src="/vercel.svg"
              alt="Moving Tool"
              className={styles.editingTool}
              width={24}
              height={24}
            ></Image>
          </button>
        </div>
        <div className={styles.editingArea}></div>
      </section>
      <section className={styles.panelRight}>
        <div className={styles.panelHead}>
          Component A
          [icon delete]
        </div>
        <div className={styles.panelBody}>
          [componentTree]
        </div>
      </section>
      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
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
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
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

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
