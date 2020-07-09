abstract class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  getId() {
    return this.id;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  private cio: string = '';
  get groupCio(): string {
    return this.cio;
  }
  set groupCio(name: string) {
    this.cio = name;
  }
  admins: string[];

  constructor(id: string, admins: string[] = []) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe(): void {
    console.log(
      `Dept id: ${this.getId()} - name: ${this.name}, admins: ${this.admins}`
    );
    console.log(`Group cio: ${this.groupCio}`);
  }
}

class AccountingDepartment extends Department {
  private static accountingDepartment: AccountingDepartment;
  private constructor(id: string) {
    super(id, 'Accounting');
  }
  static getInstance(id: string): AccountingDepartment {
    if (!this.accountingDepartment) {
      this.accountingDepartment = new AccountingDepartment(id);
    }
    return this.accountingDepartment;
  }
  describe(): void {
    console.log('Singleton');
  }
}

const department = new ITDepartment('1134342432', ['Max']);
department.groupCio = 'Max';

const employee1 = Department.createEmployee('Max');
console.log(employee1);

console.log(department.describe());
const accDepartment = AccountingDepartment.getInstance('123');
console.log(accDepartment.describe());
