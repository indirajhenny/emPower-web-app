import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import AuthContext from '../../context/AuthContext';
import { useHistory} from 'react-router-dom';
// UPDATED
import Popup from '../../Popup.js';

import '../.././styles/Login.css';

import axios from 'axios';
//import FormControl from 'react-bootstrap/FormControl';

function Login() {

  // set state that contains value of form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {getLoggedIn} = useContext(AuthContext);
  const history = useHistory();
  const [buttonPopup, setButtonPopup] = useState(false);
  const [registerError, setRegisterError] = useState("");

  let loginSuccess = false;

  async function login(e) {
    e.preventDefault();

    try {
      //console.log();
      const loginData = {
        email,
        password,
      }
      // makes http request call
      // make a POST request to send data to server
      // replace local host with future heroku host URL
      await axios.post("http://localhost:8080/auth/login", loginData)
      .then(res =>
        {
          console.log(res.data);
          // updates login state
          loginSuccess = true;
        })
      .catch(err =>
        {
          console.log(err.response.data.message);
          setRegisterError(err.response.data.message);
          setButtonPopup(true);
          //history.push("/");
        });
      if (loginSuccess === true)
      {
        await getLoggedIn();
        history.push("/");
      }

    } catch(err) {
      console.error(err);
    }
  }
  return (
    <div className="Login">
    <Container>
      <Card
      style={{
        alignItems: "center",
        margin: "0 auto",
        marginTop: "15%",
        width: "425pt",
        height: "275pt"}}>
          <Card.Title
          style={{
              color: "#682D43",
              textAlign: "center",
              fontSize: "xx-large",
              paddingTop: "10pt"}}><h8>Login</h8></Card.Title>
      <Form onSubmit={login}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Log In
        </Button>
        </Form>
        </Card>
    </Container>
    {/*UPDATED POP-UP*/}
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <b>{registerError}</b>
    </Popup>
    </div>
  )
}
export default Login;
