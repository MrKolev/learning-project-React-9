import { useInputBasic } from "../hooks/use-input-basic";

const validateValue = (value) => value.trim().length > 1 && !value.trim().includes(' ');
const validateEmail = (email) => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(email);

const BasicForm = (props) => {
  const {
    inputValue: nameValue,
    valueChangedHelper: nameValueChanged,
    blurChangedHelper: nameBlurChanged,
    hasError: nameHasError,
    valueIsValid: nameValueIsValid,
    reset: nameReset,
  } = useInputBasic(validateValue);

  const {
    inputValue: lastNameValue,
    valueChangedHelper: lastNameValueChanged,
    blurChangedHelper: lastNameBlurChanged,
    hasError: lastNameHasError,
    valueIsValid: lastNameValueIsValid,
    reset: lastNameReset
  } = useInputBasic(validateValue);

  const {
    inputValue: emailValue,
    valueChangedHelper: emailValueChanged,
    blurChangedHelper: emailBlurChanged,
    hasError: emailHasError,
    valueIsValid: emailValueIsValid,
    reset: emailReset
  } = useInputBasic(validateEmail);


  function submitForm(e) {
    e.preventDefault();

    if (!nameValueIsValid &&
      !lastNameValueIsValid &&
      !emailValueIsValid) {

      return console.log("ERROR!!!!");
    }

    console.log(nameValue);
    console.log(lastNameValueIsValid);
    console.log(emailValue);

    nameReset();
    lastNameReset();
    emailReset();
  }

  return (
    <form onSubmit={submitForm}>
      <div className='control-group'>
        <div className={`form-control ${nameHasError && "invalid"}`}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            placeholder={nameHasError ? "Please fill in your name" : undefined}
            value={nameValue}
            onChange={nameValueChanged}
            onBlur={nameBlurChanged} />
        </div>

        <div className={`form-control ${lastNameHasError && "invalid"}`}>
          <label htmlFor='name'>Last Name</label>
          <input
            placeholder={lastNameHasError ? "Please fill in your Last Name" : undefined}
            value={lastNameValue}
            type='text'
            id='name'
            onChange={lastNameValueChanged}
            onBlur={lastNameBlurChanged} />
        </div>
      </div>

      <div className={`form-control ${emailHasError && "invalid"}`}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          value={emailValue}
          placeholder={emailHasError ? "Please fill in your E-Mail Address" : undefined}
          type='email'
          id='name'
          onChange={emailValueChanged}
          onBlur={emailBlurChanged} />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
