import React from 'react';

import useInputvalid from '../hooks/use-inputvalid';

const SimpleInput = (props) => {

    const {
        value: enteredName,
        isInvalid: nameIsValid,
        hasError: nameHasError,
        inputChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        resetInput: resetName
    } = useInputvalid((value) => value.trim() !== '');

    const {
        value: enteredEmail,
        isInvalid: emailIsValid,
        hasError: emailHasError,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        resetInput: resetEmail
    } = useInputvalid((value) => value.includes('@'));


    let formIsValid = false;

    if (nameIsValid && emailIsValid) {
        formIsValid = true;
    }


    const submitHandler = event => {
        event.preventDefault();

        if (!nameIsValid && !emailIsValid) {
            return;
        }

        console.log(`Name: ${enteredName}, Email: ${enteredEmail}`)

        resetName();
        resetEmail();

    };


    const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={submitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameHasError && <p className='error-text'>Name must not be empty.</p>}

            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Email Address</label>
                <input
                    type='text'
                    id='email'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailHasError && <p className='error-text'>Email format invalid.</p>}

            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
