import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    (!isEmail(enteredValues.email) || !isNotEmpty(enteredValues.email));
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    // submition-based validation
    const emailIsValid = enteredValues.email.includes("@");
    const passwordIsValid = enteredValues.password.trim().length >= 6; // example
    // 2. Stop if bad
    if (!emailIsValid || !passwordIsValid) {
      // Optional: Force the 'didEdit' state to true so the error red text shows up on the screen now
      setDidEdit({ email: true, password: true });
      return; // STOP execution
    }
    console.log(enteredValues);
    console.log("sending http request...");
    setEnteredValues({
      email: "",
      password: "",
    });

    setDidEdit({
      email: false, // Reset this so the error doesn't flash on the empty field
      password: false,
    });
  }
  function handleChangeValue(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          label="email"
          type="email"
          name="email"
          onChange={(event) => {
            handleChangeValue("email", event.target.value);
          }}
          value={enteredValues.email}
          onBlur={() => handleInputBlur("email")}
          error={emailIsInvalid && "Please enter a valid email"}
        />
        <Input
          id="password"
          label="password"
          type="password"
          name="password"
          onChange={(event) => {
            handleChangeValue("password", event.target.value);
          }}
          value={enteredValues.password}
          onBlur={() => handleInputBlur("password")}
          error={passwordIsInvalid && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
