interface IPerson {
  id: number;

  sayMyName(): string;
  myAge(): number;
}

class Person implements IPerson {
  readonly id: number;
  protected name: string;
  private readonly age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    // this.id = 1; -> Cannot assign to 'id' because it is a read-only property.
    return this.name;
  }

  myAge(): number {
    return this.age;
  }
}

// Simple way
class PersonRefact {
  constructor(
    readonly id: number,
    protected name: string,
    private readonly age: number,
  ) {}
}

class Employee extends Person {
  myAge() {
    // return this.age; -> Property 'age' is private and only accessible within class 'Person'.
    return 123;
  }
}

const person = new Person(1, "Matheus", 17);
// person.id = 1; -> Cannot assign to 'id' because it is a read-only property.
// person.name; -> It's not visible and available;
