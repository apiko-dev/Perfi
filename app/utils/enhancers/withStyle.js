import { withProps } from 'recompose';

const withStyle = style => withProps(props => ({
  style: [style, props.style],
}));

export default withStyle;
