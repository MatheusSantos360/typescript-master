// Partial
type User1 = {
  id: string;
  name: string;
  age: number;
};

type PartialUser = Partial<User1>;

// Required
type User2 = {
  id?: string;
  name?: string;
  age?: number;
};

type RequiredlUser = Required<User2>;

// Omit VS Pick
type OmitUserNameAndId = Omit<User1, 'id' | 'name'>;
type PickUserId = Pick<User1, 'id' | 'name'>;

// Readonly
type ReadonlyUser = Readonly<User1>;

// Mutable
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

type MutableUser = Mutable<ReadonlyUser>;

// Exclude
type Role = 'admin' | 'user' | 'anonymous';
type NonAdminRole = Exclude<Role, 'admin'>;

// Extract
type RoleAttributes = { role: 'admin'; ordId: string } | { role: 'user' } | { role: 'anonymous' };

type AdminRole = Extract<RoleAttributes, { role: 'admin' }>;

// ReturnType and Parameters
type Func = (a: number, b: number) => number;

type ReturnValue = ReturnType<Func>;
type Params = Parameters<Func>;

// NonNullable
type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>;

// Promise and Awaited
type PromiseString = Promise<string>;
type Result = Awaited<PromiseString>;

// Challenge

const func = async () => {
  return {
    id: 123,
  };
};

type FuncResult = Awaited<ReturnType<typeof func>>;
