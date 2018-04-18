import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import R from 'ramda';

const Option = (optionRenderer, onSelect) => (option, key) => (
  <MenuOption
    key={key}
    onSelect={() => onSelect(option)}
  >
    {optionRenderer(option)}
  </MenuOption>
);

const Selector = ({ options, currentOption, optionRenderer, triggerRenderer, onSelect }) => (
  <Menu>
    <MenuTrigger>
      {R.call(triggerRenderer || optionRenderer, currentOption)}
    </MenuTrigger>
    <MenuOptions>
      {options.map(Option(optionRenderer, onSelect))}
    </MenuOptions>
  </Menu>
);

Selector.propTypes = {
  options: PropTypes.array,
  currentOption: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  optionRenderer: PropTypes.func.isRequired,
  triggerRenderer: PropTypes.func,
  onSelect: PropTypes.func,
};

export default Selector;
