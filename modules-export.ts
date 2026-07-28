export const add = (a: number, b: number): number => {
  return a + b;
};

export const subtract = (a: number, b: number): number => {
  return a - b;
};

export const name = 'Cody';

//

interface User {
  name: string;
  age: number;
  createdAt: Date;
}

const createUser = (name: string, age: number): User => {
  return {
    name,
    age,
    createdAt: new Date(),
  };
};

export { createUser, type User };
