import React, { createContext, useEffect, useState} from "react";
import axios from 'axios';

const AuthContext = createContext();

// provides logged in state T/F
function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    // get logged in state as a response from server
    const loggedInRes = await axios.get("http://localhost:8080/auth/loggedIn");
    //console.log(loggedInRes);
    //console.log(loggedInRes.data);
    /*if (loggedInRes.data === true)
       console.log("User successfully logged in");
    else if (loggedInRes.data === false)
      console.log("User FAILED logged in");*/
    setLoggedIn(loggedInRes.data); // returns T/F
  }
  // detect when website is started up
  useEffect(() => {
    // runs when component starts
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value ={{ loggedIn, getLoggedIn}}>
      {props.children}
    </AuthContext.Provider>
  )
};

export default AuthContext;
export {AuthContextProvider};
