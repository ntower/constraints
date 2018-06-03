export default verifier = (constraints, schedule) => {
    return constraints.every(constraint => constraint(schedule));
}