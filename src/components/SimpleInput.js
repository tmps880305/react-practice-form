import React, {useState} from 'react';

const SimpleInput = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enterNameTouched, setEnterNameTouched] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enterEmailTouched, setEnterEmailTouched] = useState(false);

    const enterNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enterNameIsValid && enterNameTouched;
    const enterEmailIsValid = (enteredEmail.trim() !== '') && (enteredEmail.trim().search('@') !== -1);
    const emailInputIsInvalid = !enterEmailIsValid && enterEmailTouched;

    let formIsValid = false;

    if (enterNameIsValid && enterEmailIsValid) {
        formIsValid = true;
    }


    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const nameBlurHandler = () => {
        setEnterNameTouched(true);
    };

    const emailChangeHandler = event => {
        setEnteredEmail(event.target.value);
    };

    const emailBlurHandler = () => {
        setEnterEmailTouched(true);
    };

    const submitHandler = event => {
        event.preventDefault();


        setEnterNameTouched(true);
        setEnterEmailTouched(true);

        if (!(enterNameIsValid && enterEmailIsValid)) {
            return;
        }


        setEnteredName('');
        setEnteredEmail('');
        setEnterNameTouched(false);
        setEnterEmailTouched(false);

    };


    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

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
                {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}

            </div>
            <div className={emailInputClasses}>
                <label htmlFor='name'>Email Address</label>
                <input
                    type='text'
                    id='email'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputIsInvalid && <p className='error-text'>Email format invalid.</p>}

            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
