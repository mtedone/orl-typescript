type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type Combinable = string | number;

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Marco',
  privileges: ['Create Server'],
  startDate: new Date(),
};

console.log(e1);

function add(a: Combinable, b: Combinable): Combinable {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

// const result: Combinable = add(4, '5');
// console.log(result);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(`Name: ${emp.name}`);
//   if ('privileges' in emp) {
//     console.log(`Privileges: ${emp.privileges}`);
//   }
// }

// printEmployeeInformation(e1);

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//   }
//   console.log(`Moving with speed ${speed}`);
// }

// moveAnimal({ type: 'horse', runningSpeed: 500 });
// moveAnimal({ type: 'bird', flyingSpeed: 1000 });

// const userInputElement = document.getElementById(
//   'user-input'
// )! as HTMLInputElement;
// userInputElement.value = 'Hi there!';

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a valid email',
// };
