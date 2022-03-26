import React, { Component } from 'react';
// import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
// import Donation from './components/Donation';
// import Events from './components/Events';
// import Partners from './components/Partners';
// import Success from './components/SuccessStories';
// import Team from './components/Team';
// import Navbar from './components/Menu';
import Footer from './components/Footer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      {/* <div className="App container"> */}
        {/* <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/donation" component={Donation} />
              <Route path="/events" component={Events} />
              <Route path="/partners" component={Partners} />
              <Route path="/success" component={Success} />
              <Route path="/team" component={Team} />
            </Switch>
            <Footer />
          </div>
        </Router> */}
        <Home />
        <Footer />
      </div>
    );
  }
  
}

export default App;
