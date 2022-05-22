import Head from 'next/head';
import Clock from '../components/Clock.jsx';
import { submitImage } from '../helpers/imageHelpers';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import AddForm from '../components/AddForm.jsx';

export default function Home() {
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const [addForm, setAddForm] = useState({});
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState('');

  useEffect(() => {
    setError(false);

    if (localStorage.getItem('links')) {
      const linkArray = JSON.parse(localStorage.getItem('links'));
      setLinks(linkArray);
    }

    if (localStorage.getItem('image')) {
      setImage(localStorage.getItem('image'));
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const newLink = (setLinks, addForm) => {
    console.log(links.length);
    links.length >= 16 ? setError(true) : null;

    if (!error) {
      setLinks((prev) => {
        const newLinks = [...prev, addForm];
        const storage = JSON.stringify(newLinks);
        localStorage.setItem('links', storage);
        setError(false);
        return newLinks;
      });
    }

    return;
  };

  const linkList = links.map((link, key) => {
    const { name, url } = link;
    let safeLink = ``;
    url.includes('http') ? (safeLink = `${url}`) : (safeLink = `https://${url}`);

    const deleteLink = () => {
      setLinks((prev) => {
        const newLinkList = links.filter((link) => link.name !== name);
        const storage = JSON.stringify(newLinkList);
        localStorage.setItem('links', storage);
        return newLinkList;
      });
    };

    return (
      <>
        {edit === false && (
          <li key={key} className={styles.link__chip}>
            <a href={safeLink}>{name}</a>
          </li>
        )}
        {edit === true && (
          <li key={key} className={styles.link__chip}>
            <a onClick={deleteLink}>{name} x</a>
          </li>
        )}
      </>
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
        {loading && <div id="spin"></div>}
        {!loading && (
          <>
            <Clock />
            <div>
              <section className={styles.content__box}>
                <h1 className={styles.title}>ケツ &gt;</h1>
                <section className={styles.links}>
                  <ul className={styles.link__list}>{linkList}</ul>
                </section>
                {add === false && edit === false && (
                  <button onClick={(e) => setAdd(true)}>New Link</button>
                )}
                {edit === true && add === false && (
                  <button id="done" onClick={(e) => setEdit(false)}>
                    Done
                  </button>
                )}
                {add === true && (
                  <AddForm
                    setAdd={setAdd}
                    addForm={addForm}
                    setAddForm={setAddForm}
                    newLink={newLink}
                    setLinks={setLinks}
                  />
                )}
                {add === false && (
                  <p id="edit" onClick={(e) => setEdit(true)}>
                    Edit Links
                  </p>
                )}
              </section>

              <section>
                <label htmlFor="file__input">
                  <img id="img" src={image || 'images/moon.webp'} alt="user_image" />
                </label>

                <input
                  id="file__input"
                  type="file"
                  onChange={(e) => {
                    setLoading(true);
                    submitImage(e, setImage, setLoading);
                  }}
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
          </>
        )}
      </main>

      <footer className={styles.footer}>
        <p>
          Designed & Developed by <a href="https://github.com/alex-reyne">Alexander Reyne</a>
        </p>
      </footer>
    </div>
  );
}
