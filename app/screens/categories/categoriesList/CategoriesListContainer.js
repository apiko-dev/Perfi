import { connect } from 'react-redux';
import R from 'ramda';
import CategoriesListView from './CategoriesListView';

const mapStateToProps = ({ categories }, { type }) => {
  const hasSpecifiedType = R.propEq('type', type);
  const getSpecifiedCategories = R.pipe(
    R.filter(hasSpecifiedType),
    R.values,
  );

  return {
    categories: getSpecifiedCategories(categories.byId),
  };
};

const CategoriesListContainer = connect(mapStateToProps)(CategoriesListView);

export default CategoriesListContainer;
