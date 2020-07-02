import React from 'react';
import './App.css';
import Login from './pages/Login'
import Index from './pages/Index'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import PrivateRoute from './component/PrivateRouter'
function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
            <Route path="/" exact render={()=><Redirect to="/login"/>} />
            <Route path="/login" component={Login}/>
            {/*<Route path="/index" component={Index}/>*/}
            <Route path="/index" render={()=>
                <Index>
                    <PrivateRoute/>
                </Index>
            }/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
