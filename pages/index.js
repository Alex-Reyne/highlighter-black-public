import Head from 'next/head';
import Clock from '../components/Clock.jsx';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import AddForm from '../components/AddForm.jsx';

export default function Home() {
  const [edit, setEdit] = useState();
  const [add, setAdd] = useState(false);
  const [addForm, setAddForm] = useState({});
  const [links, setLinks] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('links')) {
      const linkArray = JSON.parse(localStorage.getItem('links'));
      setLinks(linkArray);
    }

    if (localStorage.getItem('image')) {
      setImage(localStorage.getItem('image'));
    }
  }, []);

  const linkList = links.map((link, key) => {
    const { name, url, id } = link;
    const linkName = name;
    let safeLink = ``;
    url.includes('http') ? (safeLink = `${url}`) : (safeLink = `https://${url}`);

    return (
      <li key={key} className={styles.link__chip}>
        <a href={url}>{name}</a>
      </li>
    );
  });

  const reset = (e) => {
    setTimeout(() => {
      e.target.reset();
    }, 1);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Highlighter Black</title>
        <meta name="description" content="A customizable start page for chrome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Clock />
        <div>
          <section className={styles.content__box}>
            <h1 className={styles.title}>ケツ &gt;</h1>
            <section className={styles.links}>
              <ul className={styles.link__list}>{linkList}</ul>
            </section>
            {add === false && <button onClick={(e) => setAdd(true)}>New Link</button>}
            {add === true && <AddForm setAdd={setAdd} addForm={addForm} setAddForm={setAddForm} />}
          </section>
          <section>
            <label htmlFor="file__input">
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
