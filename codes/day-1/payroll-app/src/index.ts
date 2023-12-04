const employees: Employee[] = []

const anilDev = new Developer(1, 'anil', 100, 200, 300, 400)
const sunilHr = new Hr(2, 'sunil', 150, 250, 350, 450)

employees.push(anilDev, sunilHr)

for (const employee of employees) {
    employee.calculateSalary()
    console.log(employee.name + ' has got salary ' + employee.totalSalary)
}