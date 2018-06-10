import React, { Component } from 'react';
import PropTypes from 'prop-types';

const dayNames = [
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

const isDay = i => i > 2;
const isWeekDay = i => i > 2 && i < 8;
const isWeekendDay = i => i > 7;

export default class DayFilter extends Component {
  static propTypes = {
    onDone: PropTypes.func.isRequired
  }
  state = {
    days: new Array(dayNames.length)
      .fill(false)
  }

  daySelected (event, i) {
    let newDays = this.state.days.slice();
    newDays[i] = event.target.checked;
    // If a category was clicked, update the corresponding days.
    if (i === 0) {
      newDays = newDays.map((val, i) => isDay(i) ? event.target.checked : val);
    } else if (i === 1) {
      newDays = newDays.map((val, i) => isWeekDay(i) ? event.target.checked : val);
    } else if (i === 2) {
      newDays = newDays.map((val, i) => isWeekendDay(i) ? event.target.checked : val);
    }

    newDays[0] = newDays.filter((_, i) => isDay(i)).every(val => val);
    newDays[1] = newDays.filter((_, i) => isWeekDay(i)).every(val => val);
    newDays[2] = newDays.filter((_, i) => isWeekendDay(i)).every(val => val);

    this.setState({
      days: newDays
    });
  }

  render () {
    const { days } = this.state;
    return (
      <div>
        Which days?
        <div className="column">
          <ul>
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
        <button
          className="button is-primary"
          disabled={this.state.days.every(val => !val)}
          onClick={() => this.props.onDone(this.state.days.filter((_, i) => isDay(i)))}
        >
          Next
        </button>
      </div>
    );
  }
}

