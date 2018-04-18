import R from 'ramda';

export const getParam = param => R.path(['state', 'params', param]);

export const getParamOr = (param, def) => R.pathOr(def, ['state', 'params', param]);

export const setParam = R.curry((param, nav, value) => nav.setParams({ [param]: value }));
