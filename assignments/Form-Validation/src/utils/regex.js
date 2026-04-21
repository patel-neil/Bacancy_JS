export const regexValidators = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
  creditCard: /^\d{16}$/,
  fullName: /^[A-Za-z\s]+$/
};