/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Tab from "./components/tab.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

// Pages
import Home from "./pages/Home"
import About from './pages/About';
import Features from "./pages/features"


function App() {



  return (
    <Router>
      <div className="app">
        <div className="browser">
          <div className="tabs" >
            <Tab title="Home" />
            <Tab title="About" />
            <Tab title="Features" />
          </div>

          <div className="viewport">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/browser-tabs" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/features" component={Features} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
