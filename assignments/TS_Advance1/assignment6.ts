type User6 = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
};

type UserPublicProfile = Omit<User6, "email" | "isActive">;

const publicUser: UserPublicProfile = {
  id: "u1",
  name: "Neil"
};


const invalidPublicUser: UserPublicProfile = {
  id: "u2",
  name: "John",
  email: "john@email.com" // Error: email does not exist
};

type UserMap = Record<string, User6>;

const users: UserMap = {
  "u1": {
    id: "u1",
    name: "Neil",
    email: "neil@email.com",
    isActive: true
  },
  "u2": {
    id: "u2",
    name: "John",
    email: "john@email.com",
    isActive: false
  }
};

console.log(users["u1"].name); // Neil