import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';
import Homepage from './Containers/Homepage'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Homepage} />
      </Router>
    </div>
  );
}

export default App;
