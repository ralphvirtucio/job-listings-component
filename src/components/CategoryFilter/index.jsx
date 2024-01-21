import styles from './CategoryFilter.module.css';
import PropTypes from 'prop-types'

const CategoryFilter = ({categories, onRemoveCategory, onClearCategories }) => {

  const mappedCategories = categories.map(category => {
    return (
      <li className={styles.category} key={category.id}>
            <p>{category.name}</p>
            <button onClick={() => onRemoveCategory(category.id)}>
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
    )
  })


  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {mappedCategories}
        </ul>

          <button className={styles.btn__clear} onClick={onClearCategories}>Clear</button>
      </div>
    </section>
  );
};


CategoryFilter.propTypes = {
  categories: PropTypes.array,
  onRemoveCategory: PropTypes.func,
  onClearCategories: PropTypes.func
}

export default CategoryFilter;
