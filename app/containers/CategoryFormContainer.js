import { connect } from 'react-redux';
import {
  createCategory,
  updateCategory,
} from '../actions';
import { CategoryForm } from '../components';

export default connect(null, {
  createCategory,
  updateCategory,
})(CategoryForm);
