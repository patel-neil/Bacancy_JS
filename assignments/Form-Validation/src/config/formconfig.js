export const formConfig = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    required: true,
    regex: "fullName"
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    required: true,
    regex: "email"
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    regex: "password"
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    required: true,
    matchField: "password"
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    required: true
  },
  {
    name: "creditCard",
    label: "Credit Card Number",
    type: "text",
    regex: "creditCard"
  },
  {
    name: "state",
    label: "State",
    type: "select",
    required: true,
    options: ["Gujarat", "Maharashtra"]
  },
  {
    name: "city",
    label: "City",
    type: "select",
    dependsOn: "state",
    conditional: {
      Gujarat: ["Ahmedabad", "Surat"],
      Maharashtra: ["Mumbai", "Pune"]
    }
  }
];