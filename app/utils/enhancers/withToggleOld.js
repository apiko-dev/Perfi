import { compose, withState, withHandlers } from 'recompose';

const withToggle = compose(
  withState('isOn', 'toggle', false),
  withHandlers({
    on: ({ toggle }) => () => toggle(true),
    off: ({ toggle }) => () => toggle(false),
    toggle: ({ toggle }) => () => toggle(current => !current),
  }),
);

export default withToggle;
