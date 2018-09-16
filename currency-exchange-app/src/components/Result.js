import React from "react";

const Result = props => (
    <div className="result__info">
        {/* if statements, only renders if the prop exists */}

        {
            props.result && 
                <p className="result__info"> Converted amount:  
                    <span> {props.result}</span>
                </p>                
        }
        {
            props.error && <p className="result__info"> {props.error}</p>
        }                                 
    </div>
);

export default Result;