import { compose, withHandlers, withState } from 'recompose';

export default (
  stateName,
  updaterName,
  handlerName,
  intitialState = false,
) => compose(
  withState(stateName, updaterName, intitialState),
  withHandlers({
    [handlerName]: props => () => {
      props[updaterName](!props[stateName]);
    },
  }),
);
