import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Destination from './Components/Destination/Destination';
import SelectDivision from './Components/SelectDivision/SelectDivision';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]} >
    <Router>
      <Header></Header>
      <div className="bg-secondary main-container">
        <Switch>
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute exact path="/destination/:veh">
              <SelectDivision />
            </PrivateRoute>
            <PrivateRoute exact path="/destination/:veh/:placeFrom/:placeTo">
              <Destination />
            </PrivateRoute>
            <Route path="/login">
            <Login></Login>
            </Route>
          </div>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
