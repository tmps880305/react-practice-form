import React, {useState, useRef, useEffect} from 'react';

const SimpleInput = (props) => {

    const userInputName = useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enterNameIsValid, setEnterNameIsValid] = useState(false);
    const [enterNameTouched, setEnterNameTouched] = useState(false);

    const userInputNameChange = event => {
        setEnteredName(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();

        const enteredValue = userInputName.current.value;

        setEnterNameTouched(true);

        if (enteredValue.trim() === '') {
            setEnterNameIsValid(false);
            return;
        }

        console.log(enteredValue);

        setEnteredName('');

    };

    const nameInputIsInvalid = !enterNameIsValid && enterNameTouched;
    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={submitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    ref={userInputName}
                    onChange={userInputNameChange}
                    value={enteredName}
                />
                {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}

            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
