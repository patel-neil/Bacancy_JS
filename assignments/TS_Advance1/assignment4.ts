// Create a constant adminUser.
// Create a type from it using typeof .
// Add a new property and observe how the type changes automatically.

const adminUser = {
  id: 1,
  name: "Neil",
  email: "neil@email.com",
  role: "ADMIN"
};

type AdminUser = typeof adminUser;


const anotherAdmin: AdminUser = {
  id: 2,
  name: "John",
  email: "john@email.com",
  role: "ADMIN",
  isSuperAdmin: false
};

console.log(anotherAdmin);

const invalidAdmin: AdminUser = {
  id: 3,
  name: "Sam",
  email: "sam@email.com",
  role: "ADMIN"
  // ❌ Error: Property 'isSuperAdmin' is missing
};