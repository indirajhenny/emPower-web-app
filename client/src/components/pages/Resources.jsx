import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import article from "../../assets/images/article.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

// Function for Add Resource button Modal
function AddResourceModal(props){
  return(
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Resource
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group as={Row}>
          <Form.Label column sm="3">Title</Form.Label>
          <Col sm="8">
          <Form.Control type="text" placeholder="4 Different Types of Leadership Styles"/>
          </Col>
          </Form.Group>

          <Form.Group as={Row}>
          <Form.Label column sm="3">Description</Form.Label>
          <Col sm="8">
          <Form.Control type="text" as="textarea" placeholder="An article shared by Smriti Chand about the various forms of leadership."/>
          </Col>
          </Form.Group>

          <Form.Group as={Row}>
          <Form.Label column sm="3">Link</Form.Label>
          <Col sm="8">
          <Form.Control type="text"/>
          </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="exampleForm.ControlSelect">
          <Form.Label column sm="3">Topic</Form.Label>
          <Col sm="8">
          <Form.Control as="select" defaultValue="Other">
            <option>Topic 1</option>
            <option>Topic 2</option>
            <option>Topic 3</option>
            <option>Topic 4</option>
            <option>Other</option>
          </Form.Control>
          </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="exampleForm.ControlSelect2">
          <Form.Label column sm="3">Type of Resource</Form.Label>
          <Col sm="8">
          <Form.Control as="select" defaultValue="Other">
            <option>Article</option>
            <option>Video</option>
            <option>Podcast</option>
            <option>Activities and Games</option>
            <option>Other</option>
          </Form.Control>
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

// Displays the button and displays the modal when clicked
function AddResourceButton() {
  // Modal originally set to false 
  const [modalShow, setModalShow] = React.useState(false);

  // Displays on click
  return(
  <>

  <Button variant="primary" onClick={() => setModalShow(true)}>New Resource</Button>

  <AddResourceModal show={modalShow} onHide={() => setModalShow(false)}/>

  </>

  );
}

// change to function in order to
// access loggedIn state
class Resources extends Component {
// Displaying Resources with the backend(IP)
  state = {
    title: '',
    description: '',
    link: '',
    topic: '',
    type: '',
    resources: []
  }

  componentDidMount = () => {
    this.getResourceInfo();
  }

  getResourceInfo = () => {
    axios.get('/api/info')
  }

  render() {    


    // Bootstrap components for headers, cards and topic sidebar
    return (
      <div className="Resources">
        <br></br>

        <Container>
          <Row classname="justify-content-md-center">
          <Col xs lg="10">
        <h1>Resources</h1>
        <h2>Description of resource page...</h2>     
          </Col>

          <Col>
          <br></br><br></br>
          <AddResourceButton/>
          </Col>
          </Row>

        </Container>        

          <br></br><br></br>

          <Container>
            <Row className="justify-content-md-center">

            <Col>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link>Topic 1</Nav.Link>
              <Nav.Link>Topic 2</Nav.Link>
              <Nav.Link>Topic 3</Nav.Link>
              <Nav.Link>Topic 4</Nav.Link>
              <Nav.Link>Other</Nav.Link>
            </Nav>
            </Col>

              <Col xs lg="8">
                  
                  <Card>
                    <Card.Header as="h5"><small>Type of Resource</small></Card.Header>
                    <Card.Body>
                      <Card.Title>Title of Resource</Card.Title>
                      <Card.Text>
                        Description of resource.
                      </Card.Text>
                      <Button variant="primary">Link to Resource</Button>
                    </Card.Body>
                    <Card.Footer><small className="text-muted">Date Added</small></Card.Footer>
                  </Card>

                  <br></br>

                  <Card>
                   <Card.Header as="h5"><small>Article</small></Card.Header>
                   <Card.Body>
                      <Card.Title>4 Different Types of Leadership Styles</Card.Title>
                      <Card.Text>
                        An article shared by Smriti Chand about the various forms of leadership.
                      </Card.Text>
                      <Button variant="primary" href="https://www.yourarticlelibrary.com/business-management/4-different-types-of-leadership-styles/2550">View</Button>
                    </Card.Body>
                  <Card.Footer><small className="text-muted">June 16, 2021</small></Card.Footer>
                  </Card>

              </Col>
            </Row>
          </Container>


      </div>
    )
  }
}
export default Resources;
