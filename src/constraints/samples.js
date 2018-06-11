import { pipe, path, filter, gt, lte, all } from 'ramda';

const MUST = 0;
const SHOULD = 1;

const days = path(['days']);
const employees = path(['employees']);
const hours = path(['hours']);
const isWeekDay = (_, i) => i < 5;
const isWeekendDay = (_, i) => i >= 5;

//TODO: i don't know if ramda's filter includes index
const weekDays = pipe([days, filter(isWeekDay)]);
const weekendDays = pipe([days, filter(isWeekendDay)]);

export const sampleConstraint1 = {
  priority: MUST,
  conditions: [weekDays, all(pipe([employees, gt(0)]))],
  // isMet: (schedule) => schedule.days.filter((_, i) => i < 5).every(day => day.employees > 1),
  description: 'On weekdays there MUST be 1 employee'
};

export const sampleConstraint2 = {
  priority: SHOULD,
  conditions: [weekDays, all(pipe([employees, gt(1)]))],
  // isMet: (schedule) => schedule.days.filter((_, i) => i < 5).every(day => day.employees > 1),
  description: 'On weekdays there SHOULD be 2 employees'
};

export const sampleConstraint3 = {
  priority: MUST,
  // todo: see about using a transducer if i'm going to be chaining a bunch
  conditions: [weekendDays, all(pipe([employees, gt(0)]))],
  // isMet: (schedule) => schedule.days.filter((_, i) => i >= 5).every(day => day.employees > 0),
  description: 'On weekends there MUST be 1 employee'
};

export const sampleConstraint4 = {
  conditions: [employees, all(pipe([hours, lte(40)]))],
  // isMet: (schedule) => schedule.employees.every(employee => employee.hours <= 40),
  description: 'No employee can work more than 40 hours per week'
};

const nineToFive = { start: 9, end: 17 };
const notWorking = {};
export const nineToFiver = {
  name: 'Nine-to-fiver',
  days: [nineToFive, nineToFive, nineToFive, nineToFive, nineToFive, notWorking, notWorking]
};

const twentyFourHours = { start: 0, end: 24 };
export const overAchiever = {
  name: 'Overachiever',
  days: new Array(7).fill(twentyFourHours)
};

export const sampleSchedules = [{
  days: [{
    employees: 2
  }, {
    employees: 3
  }, {
    employees: 3
  }, {
    employees: 3
  }, {
    employees: 2
  }, {
    employees: 1
  }, {
    employees: 2
  }]
}, {
  days: [{
    employees: 0
  }, {
    employees: 2
  }, {
    employees: 3
  }, {
    employees: 2
  }, {
    employees: 3
  }, {
    employees: 1
  }, {
    employees: 0
  }]
}, {
  days: [{
    employees: 10
  }, {
    employees: 10
  }, {
    employees: 10
  }, {
    employees: 10
  }, {
    employees: 10
  }, {
    employees: 10
  }, {
    employees: 10
  }]
}];
