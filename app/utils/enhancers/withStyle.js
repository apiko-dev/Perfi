import { mapProps } from 'recompose';

const withStyle = style => mapProps(props => ({
  ...props,
  style: { ...style, ...props.style },
}));

export default withStyle;
