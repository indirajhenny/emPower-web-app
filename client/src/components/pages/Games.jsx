import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from "../context/AuthContext";

function Games() {
  const {loggedIn} = useContext(AuthContext);
  //console.log(loggedIn);

  return (
    <div className="Games">
      This is the games page.
      {loggedIn === true && (
        <>
          <Button variant="primary">Add Games</Button>{' '}
        </>
      )}
      {loggedIn === false && (
        <>
          <Button variant="primary">Select Games</Button>{' '}
        </>
      )}
    </div>
  )

}
export default Games;
