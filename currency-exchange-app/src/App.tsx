// tslint:disable:no-console
import * as React from 'react';
import './App.css';

import Form from './components/Form';
import Result from './components/Result';
import Titles from './components/Titles';


const API_KEY = "52ce6d940a1eef7aae7065c5fdecba5e";

class App extends React.Component {
  public state = {
    error: undefined,
    result: undefined    
  }

  public getCurrency = async (e: any) => {
    e.preventDefault();

    const fromCountry = e.target.elements.fromCountry.value;
    const toCountry = e.target.elements.toCountry.value;
    const amount = e.target.elements.amount.value;  
    const apiCall = await fetch(`https://apilayer.net/api/convert?access_key=${API_KEY}&from=${fromCountry}&to=${toCountry}&amount=${amount}&format=1`);
    const apiData = await apiCall.json();

    if (fromCountry && toCountry && amount) {
      console.log(apiData);
      this.setState({
        error: "",
        result: apiData.result        
      });

    } else {
      this.setState({
        error: "Please enter the correct values into the corresponding fields.",
        result: undefined
      });
    }
  }

  public render() {
    return (
      <div> 
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <Titles />               
                <div className="form-container">
                  <Form getCurrency={this.getCurrency} />
                </div>
                <div className="result-container">
                <Result
                
                  result={this.state.result}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
