import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import DayFilter from './DayFilter';
import EmployeeQuantity from './EmployeeQuantity';
import Importance from './Importance';
import Constraint from '../constraints/constraint';

const dayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const comparisonInEnglish = {
  eq: 'exactly',
  gt: 'at most',
  lt: 'at least'
};

const filterIndexed = R.addIndex(R.filter);

export default class ConstraintBuilder extends Component {
  static propTypes = {
    onConstraintCompleted: PropTypes.func.isRequired
  }
  state = {
    step: 0,
    property: 'day',
    filter: new Array(7).fill(false),
    comparison: 'lt',
    quantity: 0,
    importance: 0
  }

  toDayNames (filter) {
    if (filter.every(day => !!day)) {
      return 'day';
    } else if (filter.every((val, index) => val === [0, 1, 2, 3, 4].includes(index))) {
      return 'weekday';
    } else if (filter.every((val, index) => val === [5, 6].includes(index))) {
      return 'weekend day';
    }

    const names = filter
      .map((day, i) => day && dayNames[i])
      .filter(name => !!name)
      .join('/');
    return names;
  }

  nextStep = () => {
    if (this.state.step === 3) {
      const constraint = new Constraint(
        R.pipe(
          R.path([this.state.property + 's']),
          filterIndexed((_, i) => this.state.filter[i]),
          R.all(
            R.pipe(
              R.path(['employees']),
              R[this.state.comparison](parseInt(this.state.quantity, 10))
            )
          )
        ),
        this.state.importance
      );
      this.props.onConstraintCompleted(constraint);
    }
    this.setState(prevState => ({ step: prevState.step + 1 }));
  }

  render () {
    const { step, property, filter, comparison, quantity, importance } = this.state;

    let description;
    if (step === 0) {
      description = `For each ${property}...`;
    } else if (step > 0) {
      if (!filter) {
        description = `For each ${property}`;
      } else {
        const names = this.toDayNames(filter);
        description = `For each ${names}`;
      }
    }

    if (step === 1) {
      description += '...';
    } else if (step > 1) {
      let importanceDescription;
      if (step === 2 || importance === 0) {
        importanceDescription = "there must be";
      } else if (importance === 1) {
        importanceDescription = "there should be";
      } else {
        importanceDescription = "it would be nice to have";
      }
      description += ` ${importanceDescription} ${comparisonInEnglish[comparison]} ${quantity} employees`;
    }

    let currentStep;
    if (step === 0) {
      currentStep = (
        <div>
          What does this constraint apply to?
          <div className="column">
            <select value={property} onChange={event => this.setState({ property: event.target.value })}>
              <option value="day">Days</option>
              <option disabled value="employee">Employees</option>
            </select>
          </div>
        </div>
      );
    } else if (step === 1) {
      currentStep = (
        <div>
          Which days?
          <DayFilter
            days={filter}
            onChange={days => this.setState({ filter: days })}
          />
        </div>
      );
    } else if (step === 2) {
      currentStep = (
        <div>
          How many employees do you need?
          <EmployeeQuantity
            quantity={quantity}
            comparison={comparison}
            onChange={(data) => this.setState(R.pick(['comparison', 'quantity'], data))}
          />
        </div>
      );
    } else if (step === 3) {
      currentStep = (
        <div>
           How important is this constraint?
          <Importance
            importance={importance}
            onChange={importance => this.setState({ importance })}
          />
        </div>
      );
    } else {
      return <div className="box">{description}</div>;
    }

    return (
      <div className="box">
        <div className="box">{description}</div>
        {currentStep}
        <button
          className="button is-primary"
          onClick={this.nextStep}
        >{step < 3 ? "Next" : "Done"}
        </button>
      </div>
    );
  }
}
