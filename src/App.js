import React from 'react';
import './App.css';
import Login from './pages/Login'
import Index from './pages/Index'
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom'
function App() {
  return (
      <Router>
        <div className="App">
            <Route path="/" exact render={()=><Redirect to="/login"/>} />
            <Route path="/login" component={Login}/>
            <Route path="/index" component={Index}/>
        </div>
      </Router>
  );
}

export default App;
