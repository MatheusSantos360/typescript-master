const returnValue = <T>(value: T) => value;

const message = returnValue<string>("Hello World");
const count = returnValue(5);

// Other example
function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0];
}

const getFirstValueFromStringArray = getFirstValueFromArray<string>(["a", "b", "c"]);
const getFirstValueFromNumberArray = getFirstValueFromArray([1, 2, 3]);

// Promises
const returnPromise = async (): Promise<number> => {
  return 5;
};

// Classes
class GenericNumber<T> {
  zeroValue: T;
  sum: (x: T, y: T) => T;

  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x, y) => {
  return x + y;
});
