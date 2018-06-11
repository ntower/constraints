import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  importance: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

const Importance = ({ importance, onChange }) => (
  <div className="column">
    <select onChange={event => onChange(parseInt(event.target.value, 10))} value={importance}>
      <option value={0}>Must have</option>
      <option value={1}>Should have</option>
      <option value={2}>Nice to have</option>
    </select>
  </div>
);

Importance.propTypes = propTypes;

export default Importance;
