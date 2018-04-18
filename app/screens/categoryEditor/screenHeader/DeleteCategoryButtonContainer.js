import { connect } from 'react-redux';
import { categoriesOperations } from '../../../modules/categories';
import DeleteCategoryButtonView from './DeleteCategoryButtonView';

export default connect(null, categoriesOperations)(DeleteCategoryButtonView);
