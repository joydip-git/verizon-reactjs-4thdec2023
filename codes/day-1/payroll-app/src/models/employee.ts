export class Employee {
    totalSalary: number;

    constructor(public id: number, public name: string, public basicPayment: number, public daPayment: number, public hraPayment: number) {
        this.totalSalary = 0
    }

    calculateSalary(): void {
        this.totalSalary = this.basicPayment + this.hraPayment + this.daPayment
    }
}