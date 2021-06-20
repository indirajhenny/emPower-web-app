// LogOut Button component
import React, { useContext } from 'react';
import { useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

function Logout() {
  // send cookie back to server to detect new updated state
  const {getLoggedIn} = useContext(AuthContext);

  // gives array with all the paths we have visited in the past
  const history = useHistory();

  async function logOut() {
    // run request to delete the cookie
    await axios.get("http://localhost:8080/auth/logout");
    await getLoggedIn();
    history.push("/");
  }

  return (
    <Button variant="primary" onClick={logOut}>Logout</Button>

  )


}
export default Logout;
