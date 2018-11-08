import {
  compose,
  withHandlers,
  hoistStatics,
  withState,
} from 'recompose';
import R from 'ramda';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import SettingsScreenView from './SettingsScreenView';
import { settingsOperations } from '../../modules/settings';
import { synchOperations } from '../../modules/synch';
import types from '../../modules/navigator/types';
import { withLoading } from '../../utils/enhancers';

const alert = (title, text, func) => {
  Alert.alert(title, text,
    [{
      text: 'OK',
      onPress: func,
    }, {
      text: 'Cancel',
    }],
    { cancelable: false }
  );
};

const mapStateToProps = state => ({
  currency: state.settings.currency,
  userName: R.pathOr('', ['synch', 'user', 'fullName'], state),
  isAuthorized: state.synch.isAuthorized,
  isLoadingBackup: state.synch.isLoadingBackup,
  lastBackupDate: state.synch.lastBackupDate,
  lastSynchDate: state.synch.lastSynchDate,
});

const enhance = compose(
  connect(mapStateToProps, { ...settingsOperations, ...synchOperations }),
  withState('isLoading', 'toggleLoading', false),
  withHandlers({
    action: props => (action) => {
      props.toggleLoading(true);
      setTimeout(() => {
        action();
        props.toggleLoading(false);
        props.navigation.dispatch({ type: types.GO_TO_INITIAL_SCREEN });
      }, 100);
    },
  }),
  withHandlers({
    onChangeCurrency: props => (index, val) => {
      props.changeCurrency(val);
    },
    onGenerateData: props => () => {
      alert('Generate data',
        'Do you want to generate data ?',
        () => props.action(props.generateData));
    },
    onResetData: props => () => {
      alert('Reset data',
        'Do you want to return to the original state and delete all data ?',
        () => props.action(props.resetData));
    },
    onSingInWithGoogle: props => () => {
      props.loginWithGoogle();
    },
    onLogOut: props => () => {
      props.logOut();
    },
    onCreateBackup: props => () => {
      props.createBackup();
    },
    onSynchronize: props => () => {
      props.synchronizeData();
    },
  }),
  withLoading(),
);


export default hoistStatics(enhance)(SettingsScreenView);
