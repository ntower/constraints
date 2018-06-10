import React, { Component } from 'react';
import Constraint from './constraints/constraint';
import ConstraintView from './constraintBuilder/ConstraintView';
//import { sampleConstraint1, sampleConstraint2, sampleConstraint3, nineToFiver, overAchiever, sampleConstraint4 } from './constraints/samples';
//import Employee from './Employee';

class Experiment extends Component {
  state = {
    constraints: []
  };

  addConstraint = () => {
    this.setState(prevState => ({
      constraints: [...prevState.constraints, new Constraint()]
    }));
  }

  render () {
    const { constraints } = this.state;
    // const constraints = [sampleConstraint1, sampleConstraint2, sampleConstraint3, sampleConstraint4];
    // const employees = [nineToFiver, overAchiever];
    return (
      <div className="container">
        <h2>Constraints:</h2>
        {constraints.map(c =>
          <ConstraintView constraint={c} />
        )}
        <button className="button is-primary" onClick={this.addConstraint}>
          Add Constraint
        </button>
        {/* <h2>Schedule constraints:</h2>
        {constraints.map(c => <Constraint constraint={c} />)}
        <h2>Employee availability:</h2>
        {employees.map(e => <Employee employee={e} />)}
        <h2>Result:</h2> */}
      </div>
    );
  }
}

export default Experiment;
