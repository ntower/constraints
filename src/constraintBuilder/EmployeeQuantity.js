import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmployeeQuantity extends Component {
  static propTypes = {
    onDone: PropTypes.func.isRequired
  }

  state = {
    comparison: "eq",
    quantity: 0
  }

  onChange = (event) => {
    this.setState({
      comparison: event.target.value
    });
  }

  render () {
    const { quantity, comparison } = this.state;
    return (
      <div>
        How many employees do you need?
        <div className="column">
          <select onChange={this.onChange} value={comparison}>
            <option value="eq">Exactly</option>
            <option value="gte">At least</option>
            <option value="lte">At most</option>
          </select>
          <input
            type="number"
            onChange={e => this.setState({ quantity: e.target.value })}
            value={quantity}
          />
          &nbsp;Employees
        </div>
        <button
          className="button is-primary"
          disabled={quantity <= 0}
          onClick={() => this.props.onDone({ comparison, quantity })}
        >
          Next
        </button>
      </div>
    );
  }
}

export default EmployeeQuantity;
