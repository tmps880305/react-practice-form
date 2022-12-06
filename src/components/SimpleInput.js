import React, {useState} from 'react';

const SimpleInput = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enterNameTouched, setEnterNameTouched] = useState(false);

    const enterNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enterNameIsValid && enterNameTouched;

    let formIsValid = false;

    if (enterNameIsValid) {
        formIsValid = true;
    }


    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const nameBlurHandler = evnet => {
        setEnterNameTouched(true);
    };

    const submitHandler = event => {
        event.preventDefault();


        setEnterNameTouched(true);

        if (!enterNameIsValid) {
            return;
        }


        setEnteredName('');
        setEnterNameTouched(false);

    };


    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

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
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
