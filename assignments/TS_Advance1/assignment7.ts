// Assignment 7
// Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
// Create a utility NonNullableFields<T> that removes null and undefined from all properties.
// Apply both to User and test different scenarios.

type User7 = {
  id: string;
  name: string;
  email: string | null;
  age?: number | null;
  isActive: boolean;
};

type ReadonlyByKeys<T,K extends keyof T> = Omit<T, K> & {
  readonly [P in K]: T[P];
};

type UserWithReadonlyIdAndEmail = ReadonlyByKeys<User7, "id" | "email">;

const user1: UserWithReadonlyIdAndEmail = {
  id: "u1",
  name: "Neil",
  email: "neil@email.com",
  age: 25,
  isActive: true
};

user1.id = "u2";       // Error: Cannot assign to 'id'
user1.email = null;    // Error: Cannot assign to 'email'

user1.name = "John";

type NonNullableFields<T> = {
  [K in keyof T]-?: NonNullable<T[K]>;
};

type StrictUser = NonNullableFields<User7>;

const user2: StrictUser = {
  id: "u2",
  name: "Sam",
  email: "sam@email.com", // must be string (not null)
  age: 30,                // must be number (not undefined or null)
  isActive: true
};

// ❌ Uncomment to see errors

const invalidUser: StrictUser = {
  id: "u3",
  name: "Test",
  email: null,       // Error: null not allowed
  age: undefined,    // Error: undefined not allowed
  isActive: true
};

type FinalUser = ReadonlyByKeys<NonNullableFields<User7>, "id" | "email" >;

const finalUser: FinalUser = {
  id: "u4",
  name: "Alex",
  email: "alex@email.com",
  age: 28,
  isActive: true
};

finalUser.id = "u5";  // Error

finalUser.email = null; // Error

finalUser.name = "Updated Name";