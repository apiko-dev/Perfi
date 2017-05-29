import { connect } from 'react-redux';
import { deleteCategory } from '../actions';
import { Categories } from '../screens';

export default connect(null, { deleteCategory })(Categories);
