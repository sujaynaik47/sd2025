let numbers = [10, 20, 30, 40, 50];
 
let quotientsOf5 = numbers.map((arrayElement) => {
    return arrayElement / 5;
})
console.log(quotientsOf5)

let lessThan30 = numbers.filter((e) => 
    {
        return e < 30;
    }
)
console.log(lessThan30)

let employees = [
    {name:'dravid',sal:20000},
    {name:'rohit',sal:30000},
    {name:'dhoni',sal:25000}
];
let names = employees.map((emp) => {
    return emp.name
})
console.log(names)

let filteredEmps = employees.filter((emp) => {
    return emp.sal <= 25000
})
console.log(filteredEmps)

let totalSal = employees.reduce((sum, emp) => {
    return sum + emp.sal
}, 0)
console.log("total salary = ",totalSal)

/*
Assignments:
1. Deduce the average salary of the employees
2. Minimum salary among the employees
3. Maximum salary among the employees
4. Give 1 example each for map() and filter()
*/
