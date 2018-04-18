import React from 'react';

const PropsProxyHOC = (Component, newProps) => props => (
  <Component {...props} {...newProps} />
);

export default PropsProxyHOC;
