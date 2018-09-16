import * as React from "react";
import { render } from "react-dom";

export default class OtherCurrency extends React.Component {
  render(){
    return(
      <div className="otherCurrency__container">
        <div className="otherCurrency__title">
          Here is a list of other countries currency
        </div>

        <div className="country_image">        
          <img src={ require('../img/countrycodes_resized.jpg')}/>
        </div>
      </div>
    );
  }
}

