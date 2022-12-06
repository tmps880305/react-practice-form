import React, {useState} from 'react';

import useInputvalid from '../hooks/use-inputvalid';

const SimpleInput = (props) => {

    const {
        value: enteredName,
        isInvalid: nameIsInvalid,
        inputChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        resetInput: resetName
    } = useInputvalid((value) => value.trim() !== '');

    const {
        value: enteredEmail,
        isInvalid: emailIsInvalid,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        resetInput: resetEmail
    } = useInputvalid((value) => value.includes('@'));

    // const [enteredName, setEnteredName] = useState('');
    // const [enterNameTouched, setEnterNameTouched] = useState(false);
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enterEmailTouched, setEnterEmailTouched] = useState(false);

    // const enterNameIsValid = enteredName.trim() !== '';
    // const nameInputIsInvalid = !enterNameIsValid && enterNameTouched;
    // const enterEmailIsValid = enteredEmail.includes('@');
    // const emailInputIsInvalid = !enterEmailIsValid && enterEmailTouched;

    let formIsValid = false;

    if (!nameIsInvalid && !emailIsInvalid) {
        formIsValid = true;
    }


    // const nameChangeHandler = event => {
    //     setEnteredName(event.target.value);
    // };
    //
    // const nameBlurHandler = () => {
    //     setEnterNameTouched(true);
    // };

    // const emailChangeHandler = event => {
    //     setEnteredEmail(event.target.value);
    // };
    //
    // const emailBlurHandler = () => {
    //     setEnterEmailTouched(true);
    // };

    const submitHandler = event => {
        event.preventDefault();


        // setEnterNameTouched(true);
        // setEnterEmailTouched(true);
        //
        if (nameIsInvalid && emailIsInvalid) {
            return;
        }

        console.log(`Name: ${enteredName}, Email: ${enteredEmail}`)

        resetName();
        resetEmail();
        //
        //
        // setEnteredName('');
        // setEnteredEmail('');
        // setEnterNameTouched(false);
        // setEnterEmailTouched(false);

    };


    const nameInputClasses = nameIsInvalid ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailIsInvalid ? 'form-control invalid' : 'form-control';

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
                {nameIsInvalid && <p className='error-text'>Name must not be empty.</p>}

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
                {emailIsInvalid && <p className='error-text'>Email format invalid.</p>}

            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
