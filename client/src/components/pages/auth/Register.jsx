import React, { useState, useContext  } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { useHistory} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
//import Modal from 'react-bootstrap/Modal';
import Popup from '../../Popup.js';
import '../.././styles/Register.css';

function Register() {

  // set state that contains value of form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const {getLoggedIn} = useContext(AuthContext);
  const history = useHistory();

  const [buttonPopup, setButtonPopup] = useState(false);
  let registerError = "";
  let loginSuccess = false;

  async function register(e) {
    e.preventDefault();

    try {
      //console.log();
      const registerData = {
        email,
        password,
        passwordVerify
      }
      console.log(registerData);
      // makes http request call
      // make a POST request to send data to server
      // replace local host with future heroku host URL
      await axios.post("http://localhost:8080/auth/", registerData)
        .then(res =>
          {
            console.log(res.data);
            loginSuccess = true;
          })
        .catch(err =>
          {
            console.log(err.response.data.errorMessage);
            registerError = err.response.data.errorMessage;
            setButtonPopup(true);
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
    <div className="Register">
    <Container>
      {/*<Form onSubmit={register}>*/}
      <Card 
      style={{
        alignItems: "center",
        margin: "0 auto",
        marginTop: "15%",
        width: "500pt",
        height: "350pt"}}>
        <Card.Title
        style={{
          color: "#682D43",
          textAlign: "center",
          fontSize: "xx-large",
          paddingTop: "10pt"}}><h8>
          Register</h8></Card.Title>
        <Card.Text style={{textAlign: "center"}}>You must be an emPower Through Play sponsor to create an account.
          <br></br>
          You do <b>not</b> need an account to play <i>Analilia</i>.</Card.Text>
      <Form >
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

        <Form.Group controlId="formBasicPasswordVerify">
          <Form.Label>Password Verify</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password Verify"
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
          />
        </Form.Group>
        {/*<Button variant="primary" type="submit"*/}
        <Button variant="secondary" onClick={register}>
          Submit
        </Button>
        </Form>
        </Card>
        {/*get variable that sets trigger variable to true
          aka set a conditional trigger*/}
    </Container>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <h3>Error Registering</h3>
    </Popup>

    </div>
  )
}
export default Register;
