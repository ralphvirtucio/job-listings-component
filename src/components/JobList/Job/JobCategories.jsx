import styles from './JobCategories.module.css'
import PropTypes from 'prop-types'


const JobCategories = ({categories}) => {

  const mappedData = categories().map(category => {
    return (
      <li key={category} className={styles['job__category-list-item']}>
        <button>{category}</button>
      </li>
    )
  })

  
  return (
    <div className={styles.job__category}>
    <ul className={styles['job__category-list']}>
      {mappedData}
    </ul>
  </div>
  )
}

JobCategories.propTypes = {
  categories: PropTypes.func
}


export default JobCategories