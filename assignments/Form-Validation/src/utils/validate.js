import { regexValidators } from "./regex";

export function validateField(field, value, formData) {

  if (field.regex && value) {
    const regex = regexValidators[field.regex];

    if (!regex.test(value)) {
      return "Invalid format";
    }
  }

  if (field.required && !value) {
    return "This field is required";
  }

  if (field.matchField) {
    if (value !== formData[field.matchField]) {
      return "Passwords do not match";
    }
  }

  return "";
}