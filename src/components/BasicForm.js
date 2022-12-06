import React from 'react';

import useInputvalid from '../hooks/use-inputvalid';

const BasicForm = (props) => {

    const {
        value: enteredFirstName,
        isInvalid: firstNameIsInvalid,
        inputChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        resetInput: resetFirstName
    } = useInputvalid((value) => value.trim() !== '');

    const {
        value: enteredLastName,
        isInvalid: lastNameIsInvalid,
        inputChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        resetInput: resetLastName
    } = useInputvalid((value) => value.trim() !== '');

    const {
        value: enteredEmail,
        isInvalid: emailIsInvalid,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        resetInput: resetEmail
    } = useInputvalid((value) => value.includes('@'));


    let formIsValid = false;

    if (!firstNameIsInvalid && !lastNameIsInvalid && !emailIsInvalid) {
        formIsValid = true;
    }


    const submitHandler = event => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        console.log(`Name: ${enteredFirstName} ${enteredLastName}, Email: ${enteredEmail}`);

        resetFirstName();
        resetLastName();
        resetEmail();

    };


    const firstNameInputClasses = firstNameIsInvalid ? 'form-control invalid' : 'form-control';
    const lastNameInputClasses = lastNameIsInvalid ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={submitHandler}>
            <div className='control-group'>
                <div className={firstNameInputClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input
                        type='text'
                        id='name'
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                        value={enteredFirstName}
                    />
                    {firstNameIsInvalid && <p className='error-text'>Name must not be empty.</p>}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input
                        type='text'
                        id='name'
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                        value={enteredLastName}
                    />
                    {lastNameIsInvalid && <p className='error-text'>Name must not be empty.</p>}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input
                    type='text'
                    id='email'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailIsInvalid && <p className='error-text'>Email format invalid.</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
