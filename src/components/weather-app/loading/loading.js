import React from 'react';
import './loading.scss';


const Loading = () => {
    return (
        <div className="overlay-spinner">
            <div className="spinner-dot-1"></div>
            <div className="spinner-dot-2"></div>
            <div className="spinner-dot-3"></div>
        </div>
    )
}
export default Loading;