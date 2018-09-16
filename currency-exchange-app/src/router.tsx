import * as React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import App from './App'

import About from './components/About';
import Buttons from './components/Buttons';
import OtherCurrency from './components/OtherCurrency';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <div>
                <Buttons />
                <main>
                    <Route exact={true} path="/" component={App} />
                    <Route path="/OtherCurrency" component={OtherCurrency} />
                    <Route path="/About" component={About} />
                    <Redirect from='*' to='/' />
                </main>
            </div>
        </BrowserRouter>

    );
}