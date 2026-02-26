// Assignment 5
// Create a constructor type for UserRepository .
// Create a callable type that formats User name.
interface User {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "CUSTOMER";
  isActive: boolean;
}

class UserRepository {
  constructor(private users: User[]) {}

  getById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }
}

type UserRepositoryConstructor = new (users: User[]) => UserRepository;

type UserNameFormatter = (user: User) => string;

const formatUserName: UserNameFormatter = (user) => {
  return user.name.toUpperCase();
};

const user: User = {
  id: "1",
  name: "Neil",
  email: "neil@test.com",
  role: "CUSTOMER",
  isActive: true
};

console.log(formatUserName(user));