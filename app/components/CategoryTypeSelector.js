import React, { PropTypes } from 'react';
import R from 'ramda';
import Selector from './Selector';
import TextItem from './TextItem';
import FormInputWithIcon from './FormInputWithIcon';
import { categoriesTypes } from '../constants/categories';

const CategoryTypeTrigger = type => (
  <FormInputWithIcon
    icon="wallet"
    value={type}
    editable={false}
  />
);

const CategoryTypeSelector = ({ currentType, onSelect }) => (
  <Selector
    options={R.values(categoriesTypes)}
    currentOption={currentType}
    optionRenderer={TextItem}
    triggerRenderer={CategoryTypeTrigger}
    onSelect={onSelect}
  />
);

CategoryTypeSelector.propTypes = {
  currentType: PropTypes.string,
  onSelect: PropTypes.func,
};

export default CategoryTypeSelector;
