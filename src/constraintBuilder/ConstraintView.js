import React, { Component } from 'react';
import DayFilter from './DayFilter';
import EmployeeQuantity from './EmployeeQuantity';

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
  gte: 'at least',
  lte: 'at most'
};

export default class ConstraintBuilder extends Component {
  state = {
    step: 0,
    property: null,
    filter: null,
    comparison: null,
    quantity: null
  }

  selectProperty (property) {
    this.setState({
      property,
      step: 1
    });
  }

  onFilterSelected = (filter) => {
    this.setState({
      filter,
      step: 2
    });
  }

  onQuantitySelected = ({ comparison, quantity }) => {
    this.setState({
      comparison,
      quantity,
      step: 3
    });
  }

  toDayNames (filter) {
    if (filter.every(day => !!day)) {
      return 'day';
    } else if ([0, 1, 2, 3, 4].every(dayIndex => filter[dayIndex])) {
      return 'weekday';
    } else if ([5, 6].every(dayIndex => filter[dayIndex])) {
      return 'weekend day';
    }

    const names = filter
      .map((day, i) => day && dayNames[i])
      .filter(name => !!name)
      .join('/');
    return names;
  }

  render () {
    // const { constraint } = this.props;
    const { step, property, filter, comparison, quantity } = this.state;

    let description;
    if (!property) {
      description = "select options to build your constraint";
    } else {
      if (!filter) {
        description = `For each ${property}`;
      } else {
        const names = this.toDayNames(filter);
        description = `For each ${names}`;
      }

      if (!comparison) {
        description += '...';
      } else {
        description += ` there must be ${comparisonInEnglish[comparison]} ${quantity} employees`;
      }
    }

    if (step > 2) {
      return <div className="box">{description}</div>;
    }

    let currentStep;
    if (step === 0) {
      currentStep = (
        <div>
          What does this constraint apply to?
          <div className="column">
            <button
              className="button is-primary"
              onClick={() => this.selectProperty('day')}>Days</button>
            &nbsp;
            <button
              className="button is-primary"
              onClick={() => this.selectProperty('employee')}>Employees</button>
          </div>
        </div>
      );
    } else if (step === 1) {
      currentStep = <DayFilter onDone={this.onFilterSelected}/>;
    } else if (step === 2) {
      currentStep = <EmployeeQuantity onDone={this.onQuantitySelected} />;
    }

    return (
      <div className="box">
        <div className="box">{description}</div>
        {currentStep}
      </div>
    );
  }
}
