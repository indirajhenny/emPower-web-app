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
import '.././styles/Games.css';

function testDate(d) {

  d = parseInt(d);
  d = new Date(d).toLocaleDateString();

  return d;
}

function Game() {

  // set state that contains value of form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [games, setGames] = useState([]);
  const [link, setLink] = useState([]);
  const [genre, setGenre] = useState([]);
  const [show, setShow] = React.useState(false);
  const { loggedIn } = useContext(AuthContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  const handleLinkInput = e => {
    setLink(e.target.value);
  }
  const handleGenreInput = e => {
    setGenre(e.target.value);
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
      })

      setShow(false);

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
    return games.slice(0).reverse().map((game, index) => (
      <div key={index}>
        <br></br>
        <Card
        style={{
          width: '30rem',
          marginRight: "50pt"
        }}>
          <Card.Body>
            <Card.Title>{game.title} <small><i>{game.genre}</i></small></Card.Title>
            <Card.Text>
              {game.description}
              <br></br>
              <br></br>
            </Card.Text>
            <Button variant="primary" href={game.link}>Play {game.title}</Button>
          </Card.Body>
          <Card.Footer>{testDate(game.date)}</Card.Footer>
        </Card>
      </div>
    ));
  };

  return (
    <div className="games">
      <br></br>
      <Container>
        <Row classname="justify-content-md-center">
          <Col xs lg="12">
            <h1 style={{color: "white"}}>More Games</h1>
            <h4 style={{color: "white", fontSize: "18px"}}><i>Other games featured by emPower Through Play sponsors. Links will open a new window.</i></h4>
            
  
              {loggedIn === true && (
                <>
                  <Button variant="primary" onClick={handleShow}>
                    Add Game
                  </Button>
                  <Modal show={show} onHide={handleClose} size="lg" centered>

                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">
                        Add Game
                      </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <Form onSubmit={submit}>
                        <Form.Group as={Row}>
                          <Form.Label column sm="3">Title</Form.Label>
                          <Col sm="8">
                            <Form.Control type="text" 
                            placeholder="Enter the title of the game here."
                            value={title}
                            onChange={handleTitleInput} />
                          </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                          <Form.Label column sm="3">Description</Form.Label>
                          <Col sm="8">
                            <Form.Control type="text" as="textarea" 
                            placeholder="Enter a brief description of the game here."
                            value={description}
                            onChange={handleDescriptionInput} />
                          </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                          <Form.Label column sm="3">Link</Form.Label>
                          <Col sm="8">
                            <Form.Control type="text" 
                            placeholder="Enter link to your game here. Please include 'https://'"
                            value={link}
                            onChange={handleLinkInput} />
                          </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                          <Form.Label column sm="3">Type of Game</Form.Label>
                          <Col sm="8">
                            <Form.Control type="text" 
                            placeholder="Enter the genre of the game here."
                            value={genre}
                            onChange={handleGenreInput} />
                          </Col>
                        </Form.Group>
                      </Form>

                    </Modal.Body>

                    <Modal.Footer>
                      <Button onClick={submit}>Submit</Button>
                      <Button onClick={handleClose}>Close</Button>
                    </Modal.Footer>

                  </Modal>
                </>
              )}
              <br></br>
            

          </Col>
        </Row>
      </Container>

            <Container>
            <Row>
            {displayGameCards(games)}
            </Row></Container>
    </div>
  )
}
export default Game;
