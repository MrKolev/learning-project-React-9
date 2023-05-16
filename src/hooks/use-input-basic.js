import { useState } from "react"

export const useInputBasic = (validateValue) => {
    
    const [inputValue, setInputValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const valueIsValid = validateValue(inputValue)

    const valueChangedHelper = (e) => {
        setInputValue(e.target.value);
    }

    const blurChangedHelper = () => {
        setIsTouched(true);
    }

    let hasError = isTouched && !valueIsValid;

   const reset = () => {
    setInputValue("")
    setIsTouched(false);
   }

    return{
        inputValue,
        valueChangedHelper,
        blurChangedHelper,
        hasError,
        valueIsValid,
        reset
    }
}