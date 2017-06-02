import { connect } from 'react-redux';
import { deleteCategory } from '../../../actions';
import DeleteCategoryButtonView from './DeleteCategoryButtonView';

export default connect(null, { deleteCategory })(DeleteCategoryButtonView);
