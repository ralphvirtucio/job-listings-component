import styles from './CategoryFilter.module.css';

const CategoryFilter = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.category}>
            <p>Frontend</p>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'>
                <path
                  fill='#FFF'
                  fillRule='evenodd'
                  d='M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z'
                />
              </svg>
            </button>
          </li>
          <li className={styles.category}>
            <p>CSS</p>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'>
                <path
                  fill='#FFF'
                  fillRule='evenodd'
                  d='M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z'
                />
              </svg>
            </button>
          </li>
          <li className={styles.category}>
            <p>JavaScript</p>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'>
                <path
                  fill='#FFF'
                  fillRule='evenodd'
                  d='M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z'
                />
              </svg>
            </button>
          </li>
        </ul>

          <button className={styles.btn__clear}>Clear</button>
      </div>
    </section>
  );
};

export default CategoryFilter;
