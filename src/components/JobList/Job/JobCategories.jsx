import styles from './JobCategories.module.css'


const JobCategories = () => {
  return (
    <div className={styles.job__category}>
    <ul className={styles['job__category-list']}>
      <li className={styles['job__category-list-item']}>
        <button>Frontend</button>
      </li>
      <li className={styles['job__category-list-item']}>
        <button>Senior</button>
      </li>
      <li className={styles['job__category-list-item']}>
        <button>HTML</button>
      </li>
      <li className={styles['job__category-list-item']}>
        <button>CSS </button>
      </li>
       <li className={styles['job__category-list-item']}>
        <button>JavaScript</button>
      </li>
    </ul>
  </div>
  )
}

export default JobCategories