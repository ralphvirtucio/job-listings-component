import JobCategories from '../components/JobList/Job/JobCategories'
import PropTypes from 'prop-types'

export const JobCategoriesContainer = ({role, level, languages, tools }) => {

  function listAllCategories() {
    const arr = []

    arr.push(role)
    arr.push(level)
    arr.push(...languages)
    arr.push(...tools)

    return arr
  }


  
  
  return (
    <><JobCategories categories={listAllCategories}/></>
  )
}


JobCategoriesContainer.propTypes = {
  role: PropTypes.string,
  level: PropTypes.string,
  languages: PropTypes.array,
  tools: PropTypes.array
}
