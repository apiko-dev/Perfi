import { Alert } from 'react-native';

const bang = (val) => {
  const text = {
    2014: 'Apiko company was found in 2014 😱',
  }[val];

  if (text) Alert.alert(`${val}!`, text, [{ text: '💋' }]);
};

export default bang;
