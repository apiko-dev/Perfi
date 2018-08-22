import { Alert } from 'react-native';

const bang = (val) => {
  const text = {
    2014: 'Apiko company was found in 2014 😱',
    1.111: 'The designer of this project was Vitaliy Kobytsia 😜',
    16.0004: 'Alex Yuriev began work on this project on April 16, 2018 😄',
  }[val];

  if (text) Alert.alert(`${val}!`, text, [{ text: '💋' }]);
};

export default bang;
