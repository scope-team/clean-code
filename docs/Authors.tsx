import React, { useCallback } from 'react';
import styles from './Authors.module.css';

const AUTHORS = {
  positiveko: {
    name: 'positiveko',
    title: 'Front End Engineer',
    url: 'https://github.com/positiveko',
    image_url: 'https://github.com/positiveko.png',
  },
  Xednicoder: {
    name: 'Xednicoder',
    title: 'Front End Engineer',
    url: 'https://github.com/Xednicoder',
    image_url: 'https://github.com/Xednicoder.png',
  },
  'gyuseok-dev': {
    name: 'gyuseok-dev',
    title: 'Back End Engineer',
    url: 'https://github.com/gyuseok-dev',
    image_url: 'https://github.com/gyuseok-dev.png',
  },
  shinyeong: {
    name: 'shinyeong',
    title: 'Front End Engineer',
    url: 'https://github.com/bonbon0202',
    image_url: 'https://github.com/bonbon0202.png',
  },
};

type TAuthor = 'positiveko' | 'Xednicoder' | 'gyuseok-dev' | 'shinyeong';

interface IAuthors {
  bookLeader: TAuthor;
  authors?: TAuthor[];
}

export default function Authors({
  bookLeader,
  authors,
}: IAuthors): JSX.Element {
  const renderAuthor = useCallback((): JSX.Element => {
    return (
      <div className={styles.authors}>
        {Object.entries(AUTHORS).map(([author, info]) => {
          if (
            author === bookLeader ||
            (authors && authors.includes(author as TAuthor))
          ) {
            return (
              <div className={styles.author} key={author}>
                <a
                  href={info.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.avatar__link}>
                  <img
                    src={info.image_url}
                    alt={author}
                    className={styles.avatar__photo}
                  />
                </a>
                <div className={styles.avatar__info}>
                  <span className={styles.bold}>
                    {info.name}
                    {author === bookLeader && ` 🏆`}
                  </span>
                  <span>{info.title}</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }, [bookLeader, authors]);

  return (
    <section>
      <span className={styles.title}>written by</span>
      {renderAuthor()}
    </section>
  );
}
