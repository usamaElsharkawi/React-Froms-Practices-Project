import { useInput } from "../hooks/useInput";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  const {
    value: emailValue,
    handleChangeValue: handleChangeEmail,
    handleInputBlur: handleEmilBlur,
    hasError: emailHasError,
    setDidEdit: setDidEmailEdit,
    setEnteredValue: setEmailValue,
  } = useInput("", (value) => !isEmail(value) || !isNotEmpty(value));

  const {
    value: passwordValue,
    handleChangeValue: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
    setDidEdit: setDidPasswordEdit,
    setEnteredValue: setPasswordValue,
  } = useInput("", (value) => !hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    // submition-based validation
    const emailIsValid = !isEmail(emailValue) || !isNotEmpty(emailValue);
    const passwordIsValid = hasMinLength(passwordValue, 6); // example
    // 2. Stop if bad
    if (!emailIsValid || !passwordIsValid) {
      // Optional: Force the 'didEdit' state to true so the error red text shows up on the screen now
      setDidEmailEdit(true);
      setDidPasswordEdit(true);
      return; // STOP execution
    }
    console.log(emailValue,passwordValue)
    console.log("sending http request...");
    setEmailValue("");
    setPasswordValue("");

    setDidEmailEdit(false);
    setDidPasswordEdit(false);
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
          onChange={handleChangeEmail}
          value={emailValue}
          onBlur={handleEmilBlur}
          error={emailHasError && "Please enter a valid email"}
        />
        <Input
          id="password"
          label="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          value={passwordValue}
          onBlur={handlePasswordBlur}
          error={passwordHasError && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
