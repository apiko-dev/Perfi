import { Alert } from 'react-native';

const alert = (title, text, func) => {
  Alert.alert(title, text,
    [{
      text: 'OK',
      onPress: func || null,
    }],
    { cancelable: false }
  );
};

export {
  alert,
};
