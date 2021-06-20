import React, { useContext } from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Home from './components/pages/Home';
import Games from './components/pages/Games';
import Resources from './components/pages/Resources';
import Login from './components/pages/Login';
import Navigation from './components/layout/Navigation';
import Forum from './components/pages/Forum';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import AuthContext from "./components/context/AuthContext";

function Router() {
    const {loggedIn} = useContext(AuthContext);
    // JSX
    return(

      // Navigation bar
      <BrowserRouter>
       <div>
         <Navigation />
           <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Games" component={Games}/>
            <Route path="/Resources" component={Resources}/>
            <Route path="/Forum" component={Forum}/>
            {loggedIn === false && (
              <>
                <Route path="/Login" component={Login}/>
                <Route path="/Register" component={Register}/>
              </>
            )}
            {loggedIn === true && (
              <>
                <Route path="/Profile" component={Profile}/>
              </>
            )}
            {/*How essential is the "Error" line below*/}
            {/*<Route component={Error}/>*/}

          </Switch>
       </div>
     </BrowserRouter>

    );

}

export default Router;
