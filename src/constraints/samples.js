const twentyFourSeven = { start: 0, end: 24 };
const nineToFive = { start: 9, end: 17 };
const notWorking = {};
const nineToFiveGuy = {
    name: 'nine to five guy',
    days: [
        nineToFive,
        nineToFive,
        nineToFive,
        nineToFive,
        nineToFive,
        notWorking,
        notWorking
    ]
}

// const createSchedule = (employees) => {
//     return {
//         employees: employees,
//         days: employees.reduce((days, employee) => {
            
//         }, [])
//     }
// }

const overAchieverGuy = {
    name: 'overachiever guy',
    days: new Array(7).fill(twentyFourSeven),
}

// const nineToFiveRequiresTwoEmployee = [
//     forEach(day),
//     from(9, 5),
//     numberOfEmployees,
//     must.be.greaterThanOrEqualTo(2),
// ]
//     // forEvery(day)
//     //     .from(9, 5)
//     //     .numberOfEmployees()
//     //     .must.be.greaterThanOrEqualTo(2)

// const noEmployeeCanExceedFortyHoursPerWeek = [
//     forEach(employee),

// ]
//     // forEvery(employee)
//     //     .from(startOfWeek, endOfWeek)
//     //     .hoursWorked()
//     //     .must.be.lessThanOrEqualTo(40);