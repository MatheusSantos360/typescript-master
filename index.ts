// Basic types
let username: string = "Matheus";

let age: number;
age = 17;

let idk: any = "Bruh, Anything.";
idk = 1;

const numbers: number[] = [1, 2, 3, 4, 5];

const inferredType = "This is a string"; // TypeScript infers the type as string

// Tuples
const userTuple: [number, string] = [1, "Matheus"];

// Tuples Lists
const employees: [number, string][] = [
  [1, "Matheus"],
  [2, "John"],
  [3, "Jane"],
];

// Intersection
const productId: string | number = "1";

// Enum
enum Direction {
  Up = 1,
  Down = 2,
}

const direction = Direction.Up;

// Type Assertions
const itemName: any = "TypeScript Book (idk)";
let itemId;

itemId = itemName as string;
let itemId2 = <string>itemName;
