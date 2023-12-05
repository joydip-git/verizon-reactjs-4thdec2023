import { Developer } from "./models/developer"
import { Employee } from "./models/employee"
import { Hr } from "./models/hr"

const employees: Employee[] = []

const radioDevObject = document.getElementById('radioDev') as HTMLInputElement
const radioHrObject = document.getElementById('radioHr') as HTMLInputElement
const extra = document.getElementById('lblExtra') as HTMLLabelElement
const addBtn = document.getElementById('btnAdd') as HTMLInputElement
const empTable = document.getElementById('empTable') as HTMLTableElement
const empTableBody = document.getElementById('tblBody')

// function hello() {
//     window.alert('hasgsajkhsk')
// }
radioDevObject?.addEventListener('change', developerSelected)
radioHrObject?.addEventListener('change', hrSelected)
addBtn?.addEventListener('click', addEmployee)
empTable.hidden = true

function developerSelected() {
    if (radioDevObject?.checked) {
        extra.innerHTML = 'Incentive Pay:&nbsp;'
    }
}

function hrSelected() {
    console.log(extra)
    if (radioHrObject?.checked) {
        extra.innerHTML = 'Gratuity Pay:&nbsp;'
    }
}

function addEmployee() {
    const idElement = document.getElementById('txtId') as HTMLInputElement
    const nameElement = document.getElementById('txtName') as HTMLInputElement
    const basicElement = document.getElementById('txtBasic') as HTMLInputElement
    const daElement = document.getElementById('txtDa') as HTMLInputElement
    const hraElement = document.getElementById('txtHra') as HTMLInputElement
    const extraElement = document.getElementById('txtExtra') as HTMLInputElement

    let employee: Employee | undefined;
    if (radioDevObject?.checked) {
        employee = new Developer(
            Number(idElement.value),
            nameElement.value,
            Number(basicElement.value),
            Number(daElement.value),
            Number(hraElement.value),
            Number(extraElement.value)
        )
    }
    if (radioHrObject?.checked) {
        employee = new Hr(
            Number(idElement.value),
            nameElement.value,
            Number(basicElement.value),
            Number(daElement.value),
            Number(hraElement.value),
            Number(extraElement.value)
        )
    }
    if (employee) {
        employee.calculateSalary()
        employees.push(employee)
        loadDataInTable()
    }
}
function loadDataInTable() {
    if (empTable.hidden)
        empTable.hidden = false

    if (empTableBody) {
        empTableBody.innerHTML = ''
    }

    for (const emp of employees) {
        const idTd = document.createElement('td')
        idTd.innerText = emp.id.toString()

        const nameTd = document.createElement('td')
        nameTd.innerText = emp.name

        const basicTd = document.createElement('td')
        basicTd.innerText = emp.basicPayment.toString()

        const daTd = document.createElement('td')
        daTd.innerText = emp.daPayment.toString()

        const hraTd = document.createElement('td')
        hraTd.innerText = emp.hraPayment.toString()

        const extraTd = document.createElement('td')
        if (emp instanceof Developer)
            extraTd.innerText = (emp as Developer).incentivePayment.toString()
        else if (emp instanceof Hr)
            extraTd.innerText = (emp as Hr).gratuityPayment.toString()

        const salaryTd = document.createElement('td')
        salaryTd.innerText = emp.totalSalary.toString()

        const newRow = document.createElement('tr')
        newRow.append(idTd, nameTd, basicTd, daTd, hraTd, extraTd, salaryTd)

        empTableBody?.appendChild(newRow)
    }
}
// for (const employee of employees) {
//     employee.calculateSalary()
//     console.log(employee.name + ' has got salary ' + employee.totalSalary)
// }