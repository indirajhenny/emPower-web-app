import Card from 'react-bootstrap/Card';
import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

function AddGameModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Game
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="3">Title</Form.Label>
            <Col sm="8">
              <Form.Control type="text" placeholder="Enter the title of the game here." />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="3">Description</Form.Label>
            <Col sm="8">
              <Form.Control type="text" as="textarea" placeholder="Enter a brief description of the game here." />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="3">Downloadable link</Form.Label>
            <Col sm="8">
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="exampleForm.ControlSelect2">
            <Form.Label column sm="3">Type of Game</Form.Label>
            <Col sm="8">
              <Form.Control type="text" placeholder="Enter the genre of the game here." />
            </Col>
          </Form.Group>


        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="submit">Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  )
}


function AddGameButton() {

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>Add Game</Button>
      <AddGameModal show={modalShow} onHide={() => setModalShow(false)} />
    </>

  );
}

function Game() {

  // set state that contains value of form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [games, setGames] = useState([]);
  const [link, setLink] = useState([]);
  const [genre, setGenre] = useState([]);

  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);

  // get entire gameInfo data when react page mounts
  useEffect(() => {
    getGameInfo();
    // notice the [] below: this prevents a constant trigger
    // whenever a component is updated, we only need a trigger once
  }, [])

  // gets latest uploadedGame info data from server/DB
  const getGameInfo = () => {
    axios.get('/gameInfo/info')
      // pass promise here
      .then((response) => {
        // get data and set games state to data received from DB
        const data = response.data;
        setGames(data);
        console.log('Data has been received!');
      })
      .catch(() => {
        console.log('Error retrieving data!');
      })
  }

  // everytime the user is typing into test inputs
  // update state values. handleChange function does this
  // event is coming in, get target from event
    // get value of current element firing in event
    // from target we can get what we need
    const handleTitleInput = e => {
      setTitle(e.target.value);
    }
    const handleDescriptionInput = e => {
      setDescription(e.target.value);
    }
    // take data input and submitted in form and send to database
    const submit = (event) => {
      // stops browser from refreshing
      event.preventDefault();

      // create and format data to be sent to server
      const payload = {
        title: title,
        description: description,
        link: link,
        genre: genre
      };

      // makes http request call
      // make a POST request to send data to server
      axios({
        // where the server is waiting for request
        // react app is communicating to our server using url
        // and targeting specific route (/save) in order to
        // send 'data' to server
        url: '/gameInfo/save',
        method: 'POST', // what data are you sending
        data: payload
      })
        .then(() => {
          console.log('Data has been sent to the server');
          resetUserInputs();
          // after form is submitted, this gets the latest data from
          // the database
          getGameInfo();
        })
        .catch(() => {
          console.log('Internal server error');
        });

    };

    const resetUserInputs = () => {
      setTitle('');
      setDescription('');
      setLink('');
      setGenre('');
    }
    // contains games coming in/being received
    const displayGameCards = (games) => {
      // if empty return
      if (!games.length) return null;
      // else loop through every game
      // always need index when looping through element
      return games.map((game, index) => (
        <div key={index}>
          <Card>
            <Card.Body>
              <Card.Title>{game.title}</Card.Title>
              <Card.Text>
                {game.description}
              </Card.Text>
              <Button variant="primary" href={game.link}>View</Button>
            </Card.Body>
            <Card.Footer><small className="text-muted">June 16, 2021</small></Card.Footer>
          </Card>
        </div>
      ));
    };

      return (
        <div className="Resources">
          <br></br>
          <Container>
            <Row classname="justify-content-md-center">
              <Col xs lg="8">
                <h1>Welcome to the Games Section!</h1>
                <h4>Here you will find a list of games submitted by various users! If you are logged in
                  and would like to share a game, please click the button below to add your own game.
                  Otherwise, please log in if you would like to submit a game.
                </h4>
                <AddGameButton />
              </Col>
              {displayGameCards(games)};
            </Row>
          </Container>
        </div>
      )
  }
  export default Game;
