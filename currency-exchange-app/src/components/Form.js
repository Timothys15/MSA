import React from "react";

const Form = props => (
    /*once the form is submitted/button clicked, the prop getCurrency is called        */
    <form onSubmit={props.getCurrency}>
        <div className="searchBar-container">
            <div className="searchBar1">
                <div className="searchBar__title"> Base Country:</div>
                <input type="text" name="fromCountry" placeholder="Base Country..." />
            </div>
            <div className="searchBar2">
                <div className="searchBar__title"> Target Country: </div>
                <input type="text" name="toCountry" placeholder="Target Country..."/>
            </div>

            <div className="searchBar3">
                <div className="searchBar__title"> Amount: </div>                
                <input type="text" name="amount" placeholder="Amount to convert..."></input>
            </div>
        </div>

        <div className="button-container">
            <button className="styled">CONVERT</button>
        </div>
    </form>
);

export default Form;