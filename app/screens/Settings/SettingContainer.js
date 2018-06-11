import {
  compose,
  withHandlers,
  hoistStatics,
} from 'recompose';
import { connect } from 'react-redux';
import { ToastAndroid } from 'react-native'; //eslint-disable-line
import SettingsScreenView from './SettingsScreenView';
import { settingsOperations } from '../../modules/settings';
import types from '../../modules/navigator/types';


const mapStateToProps = state => ({
  currency: state.settings.currency,
});

const enhance = compose(
  connect(mapStateToProps, settingsOperations),

  withHandlers({
    onChangeCurrency: props => (index, val) => {
      props.changeCurrency(val);
    },
    onGenerateData: props => () => {
      props.generateData();
      props.navigation.dispatch({ type: types.GO_TO_INITIAL_SCREEN });
      ToastAndroid.show('Data was successfully generated', ToastAndroid.SHORT);
    },
  })

);


export default hoistStatics(enhance)(SettingsScreenView);
