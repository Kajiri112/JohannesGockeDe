import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Research from './Pages/Research';
import Frontpage from './Pages/Frontpage';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Impressum from './Pages/Impressum';
import Software from './Pages/Software';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/impressum" component={Impressum} />
          <Route exact path="/software" component={Software} />
          <Route exact path="/research" component={Research} />
          <Route exact path="/" component={Frontpage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;