import * as R from 'ramda';

const forEachStep = {
  description: 'For each',
  options: [{
    description: 'day',
    f: R.path('days')
  }, {
    description: 'employee',
    f: R.path('employees')
  }]
};


// const constraintStep = {
//   description: ''
// };

export default class Constraint {
  currentStep = forEachStep;
  pipeline = [];
}
