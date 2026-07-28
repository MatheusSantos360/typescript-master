// Union Types

const printValue = (value: string | number | boolean) => {
  if (typeof value === 'string' || typeof value === 'number') {
    // value -> string or number
    return;
  }
  // value -> boolean
};

// Classes
class Dog {
  bark() {
    console.log('Woof!');
  }
}

class Cat {
  meow() {
    console.log('Meow!');
  }
}

const makeSound = (animal: Dog | Cat) => {
  if (animal instanceof Dog) {
    return animal.bark();
  }
  // animal -> Cat
};

const dog = new Dog();
makeSound(dog);

// Interfaces
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

const move = (animal: Fish | Bird) => {
  if ('swim' in animal) {
    return animal.swim();
  }
  // animal -> Bird
};

// Properties
const main = (value: string[] | Date) => {
  if ('push' in value) {
    return value.push(''); // And other array methods
  }
  return value.getDate(); // And other Date methods
};

// Falsy values
const handle = (value: string | null | undefined) => {
  if (!value) return;
  return value.toUpperCase();
};

// Checking value existence
interface User {
  id: string;
  name: string;
  nickname?: string;
}

const handleUser = (user?: User) => {
  if (!user) return;
  // user.id.toUpperCase();

  if (user.nickname) {
    return user.nickname.toUpperCase();
  }
};

// Combined
interface Animal {
  name: string;
  age: number;
  follow: () => void;
}

interface Human {
  name: string;
  age: number;
  pets: Animal[];
}

interface Post {
  title: string;
  author: Human;
}

const handleAgain = (value: Animal | Human | Post) => {
  if ('name' in value && 'follow' in value) {
    return value.follow(); // -> Animal
  }
  if ('title' in value) {
    return value.author; // -> Post
  }
  return value.pets; // -> Human
};
