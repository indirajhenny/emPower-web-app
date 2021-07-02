import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

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

class Games extends React.Component {

  // set state that contains value of form inputs
  state = {
    title: '',
    description: '',
    link: '',
    genre: '',
    games: []
  }

  // get entire gameInfo data when react page mounts
  componentDidMount = () => {
    this.getGameInfo();
  }

  // gets latest uploadedGame info data from server/DB
  getGameInfo = () => {
    axios.get('/gameInfo/info')
      // pass promise here
      .then((response) => {
        // get data and set games state to data received from DB
        const data = response.data;
        this.setState({ games: data });
        console.log('Data has been received!');
      })
      .catch(() => {
        console.log('Error retrieving data!');
      })
  }

  // everytime the user is typing into test inputs
  // update state values. handleChange function does this
  // event is coming in, get target from event
  handleChange = ({ target }) => {
    // get value of current element firing in event
    // from target we can get what we need
    const { name, value } = target;
    // use values to update state
    this.setState({
      [name]: value
    });
  };
  // take data input and submitted in form and send to database
  submit = (event) => {
    // stops browser from refreshing
    event.preventDefault();

    // create and format data to be sent to server
    const payload = {
      title: this.state.title,
      description: this.state.description,
      link: this.state.link,
      genre: this.state.genre
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
        this.resetUserInputs();
        // after form is submitted, this gets the latest data from
        // the database
        this.getGameInfo();
      })
      .catch(() => {
        console.log('Internal server error');
      });

  };

  resetUserInputs = () => {
    this.setState({
      title: '',
      description: '',
      link: '',
      genre: ''
    })
  }
  // contains games coming in/being received
  displayGameCards = (games) => {
    // if empty return
    if (!games.length) return null;
    // else loop through every game
    // always need index when looping through element
    return games.map((game, index) => (
      <div key={index}>
        <h3>{game.title}</h3>
        <p>{game.description}</p>
      </div>
    ));
  };

  render() {
    return (
      <div className="Resources">
        <br></br>

        <Container>
          <Row classname="justify-content-md-center">
            <Col xs lg="8">
              <h1>Welcome to the Games Section!</h1>
              <h4>Here you will find a list of games submitted by various users! If you are logged in
                and would like to share a game, please click the button below to add your own game.
              </h4>
              <AddGameButton/>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }

}
export default Games;
