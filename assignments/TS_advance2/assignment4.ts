// Assignment 4
// Create abstract class Service<T> with abstract method execute() .
// Extend it with UserService .

abstract class Service<T> {
  abstract execute(input: T): Promise<T>;
}

type User = {
  id: string;
  name: string;
  email: string;
};

class UserService extends Service<User> {
  async execute(input: User): Promise<User> {
    console.log("Processing user:", input);
    return {
      ...input,
      name: input.name.toUpperCase(),
    };
  }
}

const service = new UserService();

service.execute({
  id: "1",
  name: "Neil",
  email: "neil@email.com",
}).then((result) => {
  console.log(result);
});