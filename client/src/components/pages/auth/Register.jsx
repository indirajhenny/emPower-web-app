import React, { useState, useContext  } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { useHistory} from 'react-router-dom';
//import Modal from 'react-bootstrap/Modal';

function Register() {

  // set state that contains value of form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const {getLoggedIn} = useContext(AuthContext);
  const history = useHistory();
  //const {loggedIn} = useContext(AuthContext);

  /*const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);*/

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
      await axios.post("http://localhost:8080/auth/", registerData);
      await getLoggedIn();
      // Pop-up Model confirming successful registration TBD
      history.push("/");
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div className="Register">
    <Container>
      {/*<Form onSubmit={register}>*/}
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
        <Button variant="primary" onClick={register}>
          Submit
        </Button>
        </Form>
        {/*get variable that sets trigger variable to true
          aka set a conditional trigger*/}
    </Container>
    </div>
  )
}
export default Register;
