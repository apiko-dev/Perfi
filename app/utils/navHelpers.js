import R from 'ramda';
import { NavigationActions as Actions } from 'react-navigation';

export const getResetAction = (screens, key) =>
  Actions.reset({
    index: screens.length - 1,
    actions: R.map(Actions.navigate, screens),
    key,
  });

export const getParam = param => R.path(['state', 'params', param]);
export const getParams = params => R.path(['state', 'params', ...params]);

export const getParamOr = (param, def) => R.pathOr(def, ['state', 'params', param]);

export const setParam = R.curry((param, nav, value) => nav.setParams({ [param]: value }));
