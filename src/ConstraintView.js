import React from 'react';
import PropTypes from 'prop-types';
import ConstraintBuilder from './ConstraintBuilder';

const propTypes = {
  constraint: PropTypes.object.isRequired
};

const ConstraintView = (props) => {
  const { constraint } = props;
  return (
    <div className="box">
      {constraint.isComplete ?
        <div>Complete</div> :
        <ConstraintBuilder constraint={constraint} />}
    </div>
  );
};

ConstraintView.propTypes = propTypes;

export default ConstraintView;
