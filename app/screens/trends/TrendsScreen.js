import React from 'react';
import PropTypes from 'prop-types';
import { ScreenWrapper } from '../../components';
import TrendsReportContainer from './trendsReport/TrendsReportContainer';

const Trends = () => (
  <ScreenWrapper>
    <TrendsReportContainer />
  </ScreenWrapper>
);

Trends.propTypes = {
  navigation: PropTypes.object,
};

export default Trends;
