import { Alert } from 'react-native';

const bang = (val) => {
  console.log('val', val);
  Alert.alert(`${val}!`,
    {
      2014: 'Apiko company was found in 2014 😱',
      1.1: 'The designer of this project was Vitaliy Kobytsia 😜',
    }[val]
    , [{ text: '💋' }]);
};

export default bang;
