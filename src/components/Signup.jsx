import { useActionState } from "react";
import {
  isEmail,
  isEqualsToOtherValue,
  hasMinLength,
  isNotEmpty,
} from "../util/validation";

export default function Signup() {
  function signupAction(prevFormState, formData) {
    const acquisitions = formData.getAll("acquisition");
    const data = Object.fromEntries(formData.entries());
    data.acquisition = acquisitions;
    const {
      email,
      password,
      "confirm-password": confirmPassword,
      "first-name": firstName,
      "last-name": lastName,
      acquisition,
      role,
      terms,
    } = data;
    //validation logic
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

    // Terms validation (checkbox may be undefined if unchecked)
    if (!terms) {
      errors.push("You must agree to the terms and conditions.");
    }

    if (errors.length > 0) {
      return { errors };
    }
    if (errors.length === 0) {
      return { errors: null };
    }
  }
  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
  });
  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
          <div className="control-error"></div>
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="role">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      {formState.errors && (
        <ul className="control-error">
          {formState.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
