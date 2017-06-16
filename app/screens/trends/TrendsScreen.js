import React, { PropTypes } from 'react';
import { ScreenWrapper } from '../../components';
import TrendsReport from './trendsReport/TrendsReport';

const Trends = ({ navigation }) => (
  <ScreenWrapper>
    <TrendsReport />
  </ScreenWrapper>
);

Trends.propTypes = {
  navigation: PropTypes.object,
};

export default Trends;
