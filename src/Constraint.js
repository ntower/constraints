import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  constraint: PropTypes.object.isRequired
};

const Constraint = (props) => (
  <div className="row">
    <div className="col s12 deep-orange lighten-2">
      {props.constraint.description}
    </div>
  </div>
);

Constraint.propTypes = propTypes;

export default Constraint;
