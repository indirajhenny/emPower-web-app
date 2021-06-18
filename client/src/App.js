import React from 'react';

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
import Footer from './components/layout/Footer';
import Forum from './components/pages/Forum';
import Register from './components/pages/Register';
import axios from 'axios';
import { AuthContextProvider } from "./components/context/AuthContext";

import './App.css';

// import 'bootstrap/dist/css/bootstrap/min.css';
axios.defaults.withCredentials = true;

class App extends React.Component {

  render(){
    // JSX
    return(

      // Navigation bar
      <AuthContextProvider>
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Games" component={Games}/>
             <Route path="/Resources" component={Resources}/>
             <Route path="/Login" component={Login}/>
             <Route path="/Forum" component={Forum}/>
             <Route path="/Register" component={Register}/>
            <Route component={Error}/>
           </Switch>
        </div>
      </BrowserRouter>

      <Footer />
      </AuthContextProvider>


    );
    }
}

export default App;
