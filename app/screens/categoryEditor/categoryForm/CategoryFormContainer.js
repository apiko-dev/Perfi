import { connect } from 'react-redux';
import { createCategory, updateCategory } from '../../../actions';
import CategoryFormView from './CategoryFormView';

export default connect(null, { createCategory, updateCategory })(CategoryFormView);
