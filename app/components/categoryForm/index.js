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

const { fixedButtonContainer } = buttonsStyles;
const { iconStyle } = inputStyles;
const { rowStyle, blockStyle } = formStyles;
const accountProp = (propName, def) => R.pathOr(def, ['category', propName]);

const enhance = compose(
  mapProps(({ style, ...props }) => ({
    ...props,
    icons,
    types: R.values(categoriesTypes),
    style: {
      ...style,
      fixedButtonContainer,
      iconStyle,
      blockStyle,
      rowStyle,
    },
  })),
  withState('icon', 'setIcon', accountProp('icon', icons[0])),
  withState('name', 'setName', accountProp('name')),
  withState('type', 'setType', accountProp('type')),
  withState('isPickerVisible', 'setPickerVisible', false),
  withProps(props => ({
    ...props,
    isValid: !!props.name && props.name.length > 0 && !!props.type,
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
