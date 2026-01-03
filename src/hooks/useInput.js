import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const hasError = didEdit && validationFn(enteredValue);

  function handleChangeValue(event) {
    setEnteredValue(event.target.value);

    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleChangeValue,
    handleInputBlur,
    hasError,
    setEnteredValue,
    setDidEdit,
  };
}
