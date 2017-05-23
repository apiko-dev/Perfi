import {
  compose,
  withState,
  mapProps,
  withProps,
  withHandlers,
} from 'recompose';
import R from 'ramda';
import CategoryForm from './CategoryForm';
import { categoriesTypes } from '../../constants/categories';
import buttonsStyles from '../../styles/ButtonsStyles';
import inputStyles from '../../styles/FormInputWithIconStyles';
import icons from '../../constants/categoryIcons';
import formStyles from '../../styles/FormStyles';
import { withStyle } from '../../utils/enhancers';

const { fixedButtonContainer } = buttonsStyles;
const { iconStyle } = inputStyles;
const { rowStyle, blockStyle } = formStyles;
const accountProp = (propName, def) => R.pathOr(def, ['category', propName]);

const enhance = compose(
  withStyle({
    fixedButtonContainer,
    iconStyle,
    blockStyle,
    rowStyle,
  }),
  mapProps(props => ({
    ...props,
    icons,
    types: R.values(categoriesTypes),
  })),
  withState('icon', 'setIcon', accountProp('icon', icons[0])),
  withState('name', 'setName', accountProp('name')),
  withState('type', 'setType', accountProp('type')),
  withState('isPickerVisible', 'setPickerVisible', false),
  withProps(props => ({
    ...props,
    isValid: !!props.name && props.name.length > 0 && !!props.type,
  })),
  withProps(({ category, createCategory, updateCategory }) => ({
    submit: category ? updateCategory : createCategory,
  })),
  withHandlers({
    onChangeIcon: ({ setPickerVisible, setIcon }) => (value) => {
      setIcon(value);
      setPickerVisible(false);
    },
    togglePicker: ({ isPickerVisible, setPickerVisible }) => () => {
      setPickerVisible(!isPickerVisible);
    },
    onSubmit: ({ submit, navigation, category, onClose, ...props }) => () => {
      const editedProps = R.pick(['name', 'icon', 'type'], props);
      const propsToSubmit = category ? { id: category.id, ...editedProps } : editedProps;

      submit(propsToSubmit);
      onClose();
    },
  }),
);

export default enhance(CategoryForm);
