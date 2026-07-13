// Functions X Interfaces

// interface MathFunction {
//   (x: number, y: number): number;
// }

type MathFunction = (x: number, y: number) => number;

// Basic function
const sum: MathFunction = (x: number, y: number): number => {
  return x + y;
};

// Inference
const sub: MathFunction = (x, y) => {
  return x - y;
};

const value = sum(1, 2);

// Type void
const log = (message: string): void => {
  console.log(message);
};
