const employees = [
    { id: 16, empName: 'Shrieker', dept: 'IT'},
    { id: 30, empName: 'Nicolas', dept: 'Support'},
    { id: 10, empName: 'Andrey', dept: 'IT'},
    { id: 17, empName: 'Bruna', dept: 'Design'},
    { id: 13, empName: 'Thiemi', dept: 'Marketing'},
];

const result = employees.reduce((accumulator, currentValue) => {
    const { dept } = currentValue;

    if (!accumulator[dept]) {
        accumulator[dept] = [];
    }

    accumulator[dept].push(currentValue);
    return accumulator;
}, {});

console.table(result);