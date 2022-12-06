import {useState, useReducer} from 'react';

const inputReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {value: action.value, isValid: action.validateInput(action.value)}
    }
    if (action.type === 'USER_BLUR') {
        return {value: state.value, isValid: action.validateInput(state.value)}
    }
    return {value: '', isValid: true};
};


const useInputvalid = (validateValue) => {

    const [inputState, dispatchInput] = useReducer(inputReducer, {value: '', isValid: null});
    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState(false);

    // const enterValueIsValid = validateValue(enteredValue);
    // const inputIsInvalid = !enterValueIsValid && isTouched;

    const inputChangeHandler = event => {
        // setEnteredValue(event.target.value);
        dispatchInput({type: 'USER_INPUT', value: event.target.value, validateInput: validateValue})
    };

    const inputBlurHandler = () => {
        // setIsTouched(true);
        dispatchInput({type: 'USER_BLUR', validateInput: validateValue})
    };

    const resetInput = () => {
        // setEnteredValue('');
        // setIsTouched(false);
        dispatchInput({});
    };

    return {
        value: inputState.value,
        isValid: inputState.isValid === null ? true : inputState.isValid,
        hasError: inputState.isValid === null ? false : !inputState.isValid,
        inputChangeHandler,
        inputBlurHandler,
        resetInput
    }

};

export default useInputvalid;
