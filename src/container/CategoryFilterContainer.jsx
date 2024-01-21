import CategoryFilter from '../components/CategoryFilter';
import PropTypes from 'prop-types'


export const CategoryFilterContainer = ({categories, onRemoveCategory, onClearCategories}) => {

  
  return <CategoryFilter categories={categories} onRemoveCategory={onRemoveCategory} onClearCategories={onClearCategories}/>;
};

CategoryFilterContainer.propTypes = {
  categories: PropTypes.array,
  onRemoveCategory: PropTypes.func,
  onClearCategories: PropTypes.func
}
