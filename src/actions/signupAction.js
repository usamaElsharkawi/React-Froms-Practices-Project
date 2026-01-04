import {
  isEmail,
  isEqualsToOtherValue,
  hasMinLength,
  isNotEmpty,
} from "../util/validation";

export function signupAction(prevFormState, formData) {
  const acquisitions = formData.getAll("acquisition");
  const data = Object.fromEntries(formData.entries());
  data.acquisition = acquisitions;

  const {
    email,
    password,
    "confirm-password": confirmPassword,
    "first-name": firstName,
    "last-name": lastName,
    role,
    terms,
  } = data;

  // Store entered values to preserve them on error
  const enteredValues = {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    role,
    acquisition: acquisitions,
  };

  // Collect all validation errors
  const errors = [];

  // Email validation
  if (!isNotEmpty(email) || !isEmail(email)) {
    errors.push("Please enter a valid email address.");
  }

  // First name validation
  if (!isNotEmpty(firstName)) {
    errors.push("First name is required.");
  }

  // Last name validation
  if (!isNotEmpty(lastName)) {
    errors.push("Last name is required.");
  }

  // Password validation
  if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
    errors.push("Password must be at least 6 characters long.");
  }

  // Confirm password validation
  if (!isEqualsToOtherValue(password, confirmPassword)) {
    errors.push("Passwords do not match.");
  }

  // Terms validation
  if (!terms) {
    errors.push("You must agree to the terms and conditions.");
  }

  // If there are errors, return them with entered values
  if (errors.length > 0) {
    return { errors, enteredValues };
  }

  // If no errors, log success and reset form
  console.log("✅ Form submitted successfully!");
  console.log("Submitted data:", data);

  // Return null values to trigger form reset
  return { errors: null, enteredValues: null };
}
