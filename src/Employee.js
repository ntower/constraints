import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  employee: PropTypes.object
};

const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Employee = (props) => (
  <div className="green lighten-3">
    <h4>{props.employee.name}</h4>
    <ul>
      {props.employee.days.map((d, i) => (
        <li>{dayNames[i]}: {d.start !== undefined ? `${d.start} - ${d.end}` : `not working`}</li>
      ))}
    </ul>
  </div>
);

Employee.propTypes = propTypes;

export default Employee;
