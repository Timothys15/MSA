import * as React from "react";
import { render } from "react-dom";

export default class About extends React.Component {
    render(){
        return(
            <div className="about_container">
                <div className="about__title">
                    About the author/creator: TIM
                </div>

                <div className="details_author">
                    Name: Timothy Serrano
                </div>
                <div className="details_author">
                    Education: Auckland University of Technology
                </div>
                <div className="details_author">
                    E-mail: tim.serrano@live.com
                </div>
                <div className="details_author">
                    Project Description: This currency converter app is a project made for the submission towards MSA 2018, Basic Training Assessment.
                </div>
                <div className="details_author">
                    API used: https://currencylayer.com/                 
                </div>
            </div>
        );
    }
}