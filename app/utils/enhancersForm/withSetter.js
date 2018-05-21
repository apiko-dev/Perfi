import R from 'ramda';
import { compose, withHandlers, withState } from 'recompose';
import { toUpperCaseFirstLetter } from '../stringHelper';

const none = BaseComponent => BaseComponent;

export default (
  stateName,
  initialState = '',
  validator,
  middleware,
  isValidInitialState = false,
) => {
  const upperStateName = toUpperCaseFirstLetter(stateName);

  const updaterName = `set${upperStateName}`;
  const handlerName = `onChange${upperStateName}`;

  const isValidStateName = `isValid${upperStateName}`;
  const updaterNameValid = `toggleValid${upperStateName}`;
  const handlerNameValid = `onToggleValid${upperStateName}`;


  const withValidation = compose(
    withState(isValidStateName, updaterNameValid, { isValid: isValidInitialState }),
    withHandlers({
      [handlerNameValid]: props => value => {
        const isValid = validator(value, props);
        props[updaterNameValid](R.is(Object, isValid) ? isValid : { isValid });
      },
    }));

  return compose(
    withState(stateName, updaterName, initialState),
    validator ? withValidation : none,
    withHandlers({
      [handlerName]: props => value => {
        const newValue = middleware ? middleware(value, props) : value;
        props[updaterName](newValue);
        if (validator) props[handlerNameValid](newValue);
      },
    }),
  );
};
