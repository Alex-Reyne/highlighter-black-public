import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [edit, setEdit] = useState();
  const links = [
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
    { name: 'link 1', url: 'https://google.ca' },
  ];

  const linkList = links.map((link) => {
    const { name, url, id } = link;
    const linkName = name;
    let safeLink = ``;
    url.includes('http') ? (safeLink = `${url}`) : (safeLink = `https://${url}`);

    return (
      <li className={styles.link__chip}>
        <a href={url}>{name}</a>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Highlighter Black</title>
        <meta name="description" content="A customizable start page for chrome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <section className={styles.content__box}>
            <h1 className={styles.title}>ケツ &gt;</h1>
            <section className={styles.links}>
              <ul className={styles.link__list}>{linkList}</ul>
            </section>
          </section>
          <section>
            <label htmlFor="file-input">
              <img id="img" src={'images/stars.gif'} alt="user_image" />
            </label>

            <input
              id={styles.file__input}
              type="file"
              onChange={(e) => submitImage(e, setImage, REACT_APP_IMGBB)}
            />
          </section>
        </div>
        <form
          id={styles.search}
          name="form1"
          action="https://duckduckgo.com/?q="
          target="_blank"
          method="get"
          onSubmit={(e) => reset(e)}
        >
          <input type="text" placeholder="Duck Duck Go Search..." name="q" />
        </form>
      </main>

      <footer className={styles.footer}>
        <p>
          Designed & Developed by <a href="https://github.com/alex-reyne">Alexander Reyne</a>
        </p>
      </footer>
    </div>
  );
}
