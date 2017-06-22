import React, { PropTypes } from 'react';
import { ScreenWrapper } from '../../components';
import TrendsReportContainer from './trendsReport/TrendsReportContainer';

const Trends = ({ navigation }) => (
  <ScreenWrapper>
    <TrendsReportContainer />
  </ScreenWrapper>
);

Trends.propTypes = {
  navigation: PropTypes.object,
};

export default Trends;
