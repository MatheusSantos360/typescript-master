// Type
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
  login?(): string;
};

const user: User = {
  firstName: "Matheus",
  age: 17,
  email: "matheusworkcontact@gmail.com",
  orders: [{ productId: "1", price: 200 }],
  login: () => "idk",
};

const printLog = (message: string) => {};
printLog(user.password!);

// Unions
type Author = {
  books: string[];
};

const author: User & Author = {
  firstName: "Matheus",
  age: 17,
  email: "matheusworkcontact@gmail.com",
  orders: [{ productId: "1", price: 200 }],
  books: [],
};

// Interfaces
interface UserInterface {
  readonly firstName: string; // Only in Interfaces
  email: string;
}

const anotherUser: UserInterface = {
  firstName: "Matheus",
  email: "matheusworkcontact@gmail.com",
};

// Types X Interfaces
type Grade = number | string;
const grade: Grade = 1; // Only in Types
