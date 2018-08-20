import {
  compose, withHandlers, withState, withProps, defaultProps, hoistStatics,
  withPropsOnChange,
} from 'recompose';
import R from 'ramda';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';
import CategoryEditor from './CategoryEditorScreenView';
import { getParam } from '../../utils/navHelpers';
import { dimensions } from '../../styles';
import { categoriesOperations } from '../../modules/categories';
import { categoriesTypes } from '../../constants/categories';
import icons from '../../constants/categoryIcons';


const accountProp = (propName, def) => R.pathOr(def, ['category', propName]);

const enhance = compose(

  connect(null, categoriesOperations),

  defaultProps({
    onClear: () => null,
    icon: {
      name: 'attach-money',
      size: dimensions.iconSize,
    },
  }),


  withProps({ icons }),
  withProps(({ navigation }) => ({ category: getParam('category')(navigation) })),
  withProps(({ category, createCategory, updateCategory }) => ({
    submit: category ? updateCategory : createCategory,
  })),
  withState('icon', 'setIcon', accountProp('icon', icons[0])),
  withState('name', 'setName', accountProp('name', '')),
  withState('type', 'setType', accountProp('type', null)),
  withState('isPickerVisible', 'setPickerVisible', false),
  withHandlers({
    togglePicker: ({ isPickerVisible, setPickerVisible }) => () => {
      setPickerVisible(!isPickerVisible);
    },
    onChangeIcon: ({ setPickerVisible, setIcon }) => (value) => {
      setIcon(value);
      setPickerVisible(false);
    },
    onSubmit: ({
      submit, navigation, category, onClose, ...props
    }) => () => {
      Keyboard.dismiss();
      const editedProps = R.pick(['name', 'icon', 'type'], props);
      const propsToSubmit = category ? { id: category.id, ...editedProps } : editedProps;
      submit(propsToSubmit);
      navigation.goBack(null);
    },
    onSelectCategory: ({ setType }) => (val) => {
      const type = val === '0' ? categoriesTypes.expense : categoriesTypes.income;
      setType(type);
    },
  }),
  withPropsOnChange(
    ['name', 'type', 'icon'],
    ({ name, type, icon }) => ({ isValid: !!name && name.length > 0 && !!type && !!icon }),
  ),
);


export default hoistStatics(enhance)(CategoryEditor);
