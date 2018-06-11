
export default class Constraint {
  constructor (testFxn, importance) {
    this.testFxn = testFxn;
    this.importance = importance;
  }

  test (schedule) {
    return this.testFxn(schedule);
  }
}
