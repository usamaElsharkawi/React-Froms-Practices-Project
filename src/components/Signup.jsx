import { useActionState } from "react";
import { signupAction } from "../actions/signupAction";

export default function Signup() {
  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
    enteredValues: null,
  });

  return (
    // Key forces form to remount (reset) when enteredValues becomes null (successful submit)
    <form
      action={formAction}
      key={formState.enteredValues ? "has-values" : "empty"}
    >
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue={formState.enteredValues?.email ?? ""}
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            defaultValue={formState.enteredValues?.password ?? ""}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={formState.enteredValues?.confirmPassword ?? ""}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            defaultValue={formState.enteredValues?.firstName ?? ""}
          />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            defaultValue={formState.enteredValues?.lastName ?? ""}
          />
        </div>
      </div>

      <div className="control">
        <label htmlFor="role">What best describes your role?</label>
        <select
          id="role"
          name="role"
          defaultValue={formState.enteredValues?.role ?? "student"}
        >
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

      {/* Error Summary */}
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
