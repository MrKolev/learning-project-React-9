import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [nameInputIsValid, setNameInputIsValid] = useState(true)

  const nameInputChangedHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() == "") {
      setNameInputIsValid(false);
      return
    }

    console.log(enteredName);
    const enterValue = nameInputRef.current.value;
    console.log(`ref: ${enterValue}`);

    setEnteredName("")
    setNameInputIsValid(true);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!nameInputIsValid && "invalid"}`}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          value={enteredName}
          id='name'
          onChange={nameInputChangedHandler} />
      </div>
      {!nameInputIsValid && <p className="error-text">Please enter your name.</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
