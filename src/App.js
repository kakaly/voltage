import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import Homepage from './Containers/Homepage'
import About from './Containers/About'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Homepage} />
        <Route path="/:genre" component={Homepage} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
