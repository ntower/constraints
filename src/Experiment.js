import React, { Component } from 'react';

class Experiment extends Component {
  state = {};

  render () {
    return (
      <div className="container">
        <div className="row center-align">
          <div className="col s12 indigo">This div is 12-columns wide on all screen sizes</div>
          <div className="col s6">6-columns (one-half)</div>
          <div className="col s6">6-columns (one-half)</div>
        </div>
        <a className="btn-floating btn-large waves-effect waves-light red">
          <i className="material-icons">add</i>
        </a>
      </div>
    );
  }
}

export default Experiment;
