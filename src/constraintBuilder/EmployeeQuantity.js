import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmployeeQuantity extends Component {
  static propTypes = {
    comparison: PropTypes.oneOf("eq", "lte", "gte"),
    quantity: PropTypes.number,
    onChange: PropTypes.func.isRequired
  }

  render () {
    const { quantity, comparison } = this.props;
    return (
      <div className="column">
        <select
          value={comparison}
          onChange={e => this.props.onChange({ comparison: e.target.value })}
        >
          <option value="eq">Exactly</option>
          <option value="gte">At least</option>
          <option value="lte">At most</option>
        </select>
        <input
          type="number"
          onChange={e => this.props.onChange({ quantity: e.target.value })}
          value={quantity}
        />
        &nbsp;Employees
      </div>
    );
  }
}

export default EmployeeQuantity;
