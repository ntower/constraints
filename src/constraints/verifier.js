export const verifier = (constraints, schedule) => constraints.every(constraint => constraint(schedule));
