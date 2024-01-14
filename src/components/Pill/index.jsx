import PropTypes from 'prop-types'

import styles from './Pill.module.css'

export const Pill = ({label}) => {

  const pillStyle = label.toLowerCase() === 'featured' ? 'pill--featured' : 'pill--new'

  return (
    <span className={`${styles.pill} ${styles[pillStyle]}`}>{label}</span>
  )
}


Pill.propTypes = {
  label: PropTypes.string
}