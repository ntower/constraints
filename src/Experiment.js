import React, { Component } from 'react';
import { update } from 'ramda';
import ConstraintView from './constraintBuilder/ConstraintView';
import Schedule from './Schedule';
import { sampleSchedules } from './constraints/samples';
//import { sampleConstraint1, sampleConstraint2, sampleConstraint3, nineToFiver, overAchiever, sampleConstraint4 } from './constraints/samples';
//import Employee from './Employee';

class Experiment extends Component {
  state = {
    constraints: [],
    schedules: sampleSchedules
  };

  addConstraint = () => {
    this.setState(prevState => ({
      constraints: [...prevState.constraints, undefined]
    }));
  }

  render () {
    const { constraints, schedules } = this.state;
    // const constraints = [sampleConstraint1, sampleConstraint2, sampleConstraint3, sampleConstraint4];
    // const employees = [nineToFiver, overAchiever];
    return (
      <div className="container">
        <h1>Constraints:</h1>
        {constraints.map((c, i) => (
          <ConstraintView onConstraintCompleted={constraint => this.setState({
            constraints: update(i, constraint, this.state.constraints)
          })}/>
        ))}
        <button className="button is-primary" onClick={this.addConstraint}>
          Add Constraint
        </button>
        <h1>Sample Schedules:</h1>
        {schedules.map(s => (
          <Schedule
            schedule={s}
            valid={constraints.filter(c => !!c).every(c => c.test(s))}
          />
        ))}
      </div>
    );
  }
}

export default Experiment;
