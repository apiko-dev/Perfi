import {
  compose,
  withHandlers,
  hoistStatics,
} from 'recompose';
import { connect } from 'react-redux';
import SettingsScreenView from './SettingsScreenView';
import { settingsOperations } from '../../modules/settings';
// import { getExpenseCategory, getIncomeCategory } from '../../modules/categories/selectors';


const mapStateToProps = state => ({
  currency: state.settings.currency,
});

const enhance = compose(
  connect(mapStateToProps, settingsOperations),

  withHandlers({
    onChangeCurrency: props => (index, val) => {
      props.changeCurrency(val);
    },
  })

);


export default hoistStatics(enhance)(SettingsScreenView);
