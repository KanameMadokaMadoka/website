import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import App2 from './main';
function Ap(){
    return(
        <div>
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/loginpage">
              <App />
            </Route>
            <Route path="/mainpage">
              <App2 />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default Ap;