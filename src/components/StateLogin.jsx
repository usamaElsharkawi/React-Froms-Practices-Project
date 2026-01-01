import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

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
    console.log("sending http request...")
    setEnteredValues({
      email: "",
      password: "",
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => {
              handleChangeValue("email", event.target.value);
            }}
            value={enteredValues.email}
            onBlur={() => handleInputBlur("email")}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => {
              handleChangeValue("password", event.target.value);
            }}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
