import R from 'ramda';
import { withProps } from 'recompose';
import { toUpperCaseFirstLetter } from '../stringHelper';

export default (
  fields,
  isReadyForSubmitName = 'isReadyForSubmit',
) => withProps(props => ({
  [isReadyForSubmitName]: R.isEmpty(fields.filter(fieldName => {
    const upperStateName = toUpperCaseFirstLetter(fieldName);
    const isValidStateName = `isValid${upperStateName}`;

    return !R.pathOr(true, [isValidStateName, 'isValid'], props);
  })),
}));

