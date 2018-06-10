import React, { Component } from 'react';

export default class ConstraintBuilder extends Component {
  state = {
    step: 0,
    property: null
  }

  selectProperty (property) {
    this.setState({
      property,
      step: 1
    });
  }

  days = [
    'All Days',
    'Weekdays',
    'Weekends',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  render () {
    const { constraint } = this.props;
    const { step } = this.state;

    switch (step) {
    case 0:
      return (
        <div>
          What does this constraint apply to?
          <div className="column">
            <button
              className="button is-primary"
              onClick={() => this.selectProperty('day')}>Days</button>
            <button
              className="button is-primary"
              onClick={() => this.selectProperty('employee')}>Employees</button>
          </div>
        </div>
      );
    case 1:
      return (
        <div>
          Which days?
          <div className="column">
            <ul>
              {this.days.map(day => (
                <li>
                  <label className="checkbox">
                    <input type="checkbox" />
                  &nbsp;{day}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    default:
      return <div> step not implemented</div>;
    }
  }
}
