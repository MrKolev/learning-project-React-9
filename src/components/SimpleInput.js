
import { useInput } from "../hooks/use-input";

const SimpleInput = () => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangedHelper: nameChangedHelper,
    inputBlurHelper: nameBlurHelper,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== '' && value.trim().length >= 2)

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangedHelper: emailChangedHelper,
    inputBlurHelper: emailBlurHelper,
    reset: resetEmailInput
  } = useInput((value) => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(value))

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return
    }

    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput();
    resetEmailInput();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${nameHasError && "invalid"}`}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          value={nameHasError ? "Your Name" : enteredName}
          id='name'
          onChange={nameChangedHelper}
          onBlur={nameBlurHelper} />
      </div>
      {nameHasError && <p className="error-text">Please enter your name.</p>}

      <div className={`form-control ${emailHasError && "invalid"}`}>
        <label htmlFor='email'>Your email</label>
        <input
          type='email'
          value={enteredEmail}
          id='email'
          onChange={emailChangedHelper}
          onBlur={emailBlurHelper} />
      </div>
      {emailHasError && <p className="error-text">Please enter your email.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
