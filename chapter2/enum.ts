enum Role {
  ADMIN,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  role: Role;
} = {
  name: 'Marco',
  age: 30,
  role: Role.ADMIN,
};

console.log(person);
