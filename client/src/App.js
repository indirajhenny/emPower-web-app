import React from 'react';
import Footer from './components/layout/Footer';
import Router from './Router'
import axios from 'axios';
import { AuthContextProvider } from "./components/context/AuthContext";

//import './App.css';

axios.defaults.withCredentials = true;

//class App extends React.Component {
function App() {

  //render(){

    // JSX
    return(
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>

    );
    //}
}

export default App;
