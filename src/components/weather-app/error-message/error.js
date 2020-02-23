import React from 'react';
import module from './error.module.css';


const ErrorMessage = ( {onBackFn} ) => {
    return (
        <div className={module.errorWrapper}>
            <h1>City is not found</h1>
            <button onClick={onBackFn}>Back to Form</button>
        </div>
    )
}

export default ErrorMessage;