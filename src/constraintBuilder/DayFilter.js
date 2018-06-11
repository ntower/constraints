import React, { Component } from 'react';
import PropTypes from 'prop-types';

const dayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const allDaysFilter = () => true;
const weekDaysFilter = (_, i) => i < 5;
const weekEndsFilter = (_, i) => i >= 5;

export default class DayFilter extends Component {
  static propTypes = {
    days: PropTypes.arrayOf(PropTypes.bool).isRequired,
    onChange: PropTypes.func.isRequired
  }

  daySelected (event, indexOrFilter) {
    let newDays;
    if (typeof indexOrFilter === 'number') {
      newDays = this.props.days.slice();
      newDays[indexOrFilter] = event.target.checked;
    } else {
      newDays = this.props.days.slice()
        .map((val, i) => indexOrFilter(val, i) ? event.target.checked : val);
    }

    this.props.onChange(newDays);
  }

  render () {
    const { days } = this.props;
    return (
      <div className="column">
        <ul>
          <li key="alldays">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={days.every(day => day)}
                onChange={event => this.daySelected(event, allDaysFilter)}
              />
              &nbsp;All Days
            </label>
          </li>
          <li key="weekdays">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={days.filter(weekDaysFilter).every(day => day)}
                onChange={event => this.daySelected(event, weekDaysFilter)}
              />
              &nbsp;Weekdays
            </label>
          </li>
          <li key="weekends">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={days.filter(weekEndsFilter).every(day => day)}
                onChange={event => this.daySelected(event, weekEndsFilter)}
              />
              &nbsp;Weekends
            </label>
          </li>
          {dayNames.map((dayName, i) => (
            <li key={i}>
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={days[i]}
                  onChange={event => this.daySelected(event, i)}
                />
                    &nbsp;{dayName}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

