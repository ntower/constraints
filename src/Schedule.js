import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  schedule: PropTypes.object.isRequired,
  valid: PropTypes.bool.isRequired
};

const Schedule = (props) => (
  <div className={`notification is-${props.valid ? 'success' : 'warning'}`}>
    {JSON.stringify(props.schedule, null, 2)}
  </div>
);

Schedule.propTypes = propTypes;

export default Schedule;
