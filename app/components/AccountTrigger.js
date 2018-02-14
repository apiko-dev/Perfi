import React from 'react';
import PropTypes from 'prop-types';
import FormInputWithIcon from './FormInputWithIcon';

const AccountTrigger = ({ name, icon }) => (
  <FormInputWithIcon
    icon={icon}
    value={name.toString()}
    editable={false}
  />
);

AccountTrigger.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default AccountTrigger;
