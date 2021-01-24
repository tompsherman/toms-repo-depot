import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import './App.css'
import LogIn from './components/LogIn'
import TpsDash from './components/TpsDash'
import Home from './components/Home'

const App = () => {
  const history = useHistory()

  const logIn = () => {
    history.push('/riddle-me-this')
  }

  return (
    <>
      <Switch>
        <Route path="/riddle-me-this">
          <LogIn />
        </Route>
        <Route path="/tps-dash">
          <TpsDash />
        </Route>
        <Route exact path="/">
          <div className="App">
            <h1>tom sherman portfolio page</h1>
            <div onClick={logIn}>
              log in
            </div>
            <Home />
          </div>          
        </Route>
      </Switch>
    </>
  );
};

export default App;