import { compose, branch, renderComponent } from 'recompose';

const renderWhen = ({ when, render }) => branch(when, renderComponent(render));

const nonOptimalStates = states => compose(...states.map(renderWhen));

export default nonOptimalStates;
