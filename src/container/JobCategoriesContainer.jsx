import JobCategories from '../components/JobList/Job/JobCategories';
import PropTypes from 'prop-types';

export const JobCategoriesContainer = ({ role, level, languages, tools, onSelectCategory }) => {
  function listAllCategories() {
   return [role, level, ...languages, ...tools]
  }



  return (
    <>
      <JobCategories
        categories={listAllCategories}
        onSelectCategory={onSelectCategory}
      />
    </>
  );
};

JobCategoriesContainer.propTypes = {
  role: PropTypes.string,
  level: PropTypes.string,
  languages: PropTypes.array,
  tools: PropTypes.array,
  onSelectCategory: PropTypes.func,
};
