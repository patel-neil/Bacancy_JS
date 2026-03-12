// Assignment 5
// Create a type ReadOnlyUser where all properties are readonly.
// Create a type StringifiedUser where all properties become string.
// Create a type OptionalAndNullableUser where all properties are optional and nullable.

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

type ReadOnlyUser = {
  readonly [K in keyof User]: User[K];
};

const readOnlyUser: ReadOnlyUser = {
  id: 1,
  name: "Neil",
  email: "neil@email.com",
  isActive: true
};


readOnlyUser.name = "John";
// Error: Cannot assign to 'name' because it is a read-only property.

type StringifiedUser = {
  [K in keyof User]: string;
};

const stringifiedUser: StringifiedUser = {
  id: "1",
  name: "Neil",
  email: "neil@email.com",
  isActive: "true"
};

stringifiedUser.id = 10;
// Error: Type 'number' is not assignable to type 'string'.

type OptionalAndNullableUser = {
  [K in keyof User]?: User[K] | null;
};

const optionalUser: OptionalAndNullableUser = {
  name: "Neil",
  email: null
};

const emptyUser: OptionalAndNullableUser = {};