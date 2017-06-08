import { compose, withProps, withPropsOnChange, withState, withHandlers } from 'recompose';
import R from 'ramda';
import CategoryForm from './CategoryForm';
import { categoriesTypes } from '../../../constants/categories';
import icons from '../../../constants/categoryIcons';
import { getParam } from '../../../utils/navHelpers';

const accountProp = (propName, def) => R.pathOr(def, ['category', propName]);

const withCategory = withProps(({ navigation }) => ({
  category: getParam('category')(navigation),
}));

const withValidation = withPropsOnChange(
  ['name', 'type', 'icon'],
  ({ name, type, icon }) => ({ isValid: !!name && name.length > 0 && !!type && !!icon }),
);

const withSubmit = withProps(({ category, createCategory, updateCategory }) => ({
  submit: category ? updateCategory : createCategory,
}));

const onChangeIcon = ({ setPickerVisible, setIcon }) => (value) => {
  setIcon(value);
  setPickerVisible(false);
};

const togglePicker = ({ isPickerVisible, setPickerVisible }) => () => {
  setPickerVisible(!isPickerVisible);
};

const onSubmit = ({ submit, navigation, category, onClose, ...props }) => () => {
  const editedProps = R.pick(['name', 'icon', 'type'], props);
  const propsToSubmit = category ? { id: category.id, ...editedProps } : editedProps;

  submit(propsToSubmit);
  onClose();
};

const enhance = compose(
  withProps({ icons }),
  withCategory,
  withSubmit,
  withState('icon', 'setIcon', accountProp('icon', icons[0])),
  withState('name', 'setName', accountProp('name')),
  withState('type', 'setType', accountProp('type', categoriesTypes.expense)),
  withState('isPickerVisible', 'setPickerVisible', false),
  withHandlers({
    togglePicker,
    onChangeIcon,
    onSubmit,
  }),
  withValidation,
);

export default enhance(CategoryForm);
