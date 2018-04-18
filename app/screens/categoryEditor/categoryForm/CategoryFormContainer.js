import { connect } from 'react-redux';
import { categoriesOperations } from '../../../modules/categories';
import CategoryFormView from './CategoryFormView';


export default connect(null, categoriesOperations)(CategoryFormView);
