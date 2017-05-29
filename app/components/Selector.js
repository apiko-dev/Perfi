import React, { PropTypes } from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const Option = (optionRenderer, onSelect) => (option, key) => (
  <MenuOption
    key={key}
    onSelect={() => onSelect(option)}
  >
    {optionRenderer(option)}
  </MenuOption>
);

const Selector = ({ options, currentOption, optionRenderer, onSelect }) => (
  <Menu>
    <MenuTrigger style={{ marginLeft: 10, marginRight: 10 }}>
      {optionRenderer(currentOption)}
    </MenuTrigger>
    <MenuOptions>
      {options.map(Option(optionRenderer, onSelect))}
    </MenuOptions>
  </Menu>
);

Selector.propTypes = {
  options: PropTypes.array,
  currentOption: PropTypes.oneOfType(PropTypes.object, PropTypes.string),
  optionRenderer: PropTypes.func,
  onSelect: PropTypes.func,
};

export default Selector;
