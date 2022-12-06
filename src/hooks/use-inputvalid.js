import {useState} from 'react';

const useInputvalid = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const enterValueIsValid = validateValue(enteredValue);
    const inputIsInvalid = !enterValueIsValid && isTouched;

    const inputChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const resetInput = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isInvalid: inputIsInvalid,
        inputChangeHandler,
        inputBlurHandler,
        resetInput
    }

};

export default useInputvalid;
