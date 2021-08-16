import Card from 'react-bootstrap/Card';
import React, { useEffect, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { set } from 'mongoose';


function displayDate(d){

  d = parseInt(d);
  d = new Date(d).toLocaleDateString();

  return d;
}

function Resource() {
  
  // set state that contains value of form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState([]);
  const [topic, setTopic] = useState([]);
  const [type, setType] = useState([]);
  const [resources, setResources] = useState([]);

  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = React.useState(false);


  // get entire resourceInfo data when react page mounts
  useEffect(() => {
    getResourceInfo();
  }, [])

  //gets latest uploadedResource info data from server/DB 
  const getResourceInfo = () => {
    axios.get('/resourceInfo/info')
    // pass promise here
    .then((response) => {
      // get data and set resource state to data received from DB
      const data = response.data;
      setResources(data);
      console.log('Data has been recieved.');

    })

    .catch(() => {
      console.log('Error retrieving data.');
    })
  }

    const handleTitleInput = e => {
      setTitle(e.target.value);
    }

    const handleDescriptionInput = e => {
      setDescription(e.target.value);
    }

    const handleLinkInput = e => {
      setLink(e.target.value);
    }

    const handleTypeInput = e => {
      setType(e.target.value);
    }

    const submit = (event) => {
      event.preventDefault();

      const payload = {
        title: title,
        description: description,
        link: link,
        type: type
      };

      axios({
        url: '/resourceInfo/save',
        method: 'POST',
        data: payload
      })

      .then(() => {
        console.log('Data has been sent to the server');
        resetUserInputs();

        getResourceInfo();
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
      setType('');
    }

    const displayResourceCards = (resources) => {
      
      if(!resources.length) return null;

      return resources.slice(0).reverse().map((resource, index) => (
        <div key={index}>
          <Card>
            <Card.Body>
              <Card.Header as="h5"><small>{resource.type}</small></Card.Header>
              <Card.Title>{resource.title}</Card.Title>
              <Card.Text>
                {resource.description}
              </Card.Text>
              <Button variant="primary" href={resource.link}>View</Button>
            </Card.Body>
            <Card.Footer><small className="text-muted">{displayDate(resource.date)}</small></Card.Footer>
          </Card>
        </div>
      ));
    };

    return (
      <div className="Resources">
        <br></br>

        <Container>
          <Row classname="justify-content-md-center">
          <Col xs lg="10">
        <h1>Resources</h1>
        <h6>Here you will find various educational resources uploaded by our verified educators.</h6>     
          </Col>

          <Col>
          <br></br><br></br>
          {loggedIn === true && (
            <>
            <Button variant="primary" onClick={handleShow}>New Resource</Button>
            
            <Modal show={show} onHide={handleClose} size="lg" centered>

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
          <Form.Control type="text" placeholder="4 Different Types of Leadership Styles" onChange ={handleTitleInput}/>
          </Col>
          </Form.Group>

          <Form.Group as={Row}>
          <Form.Label column sm="3">Description</Form.Label>
          <Col sm="8">
          <Form.Control type="text" as="textarea" placeholder="An article shared by Smriti Chand about the various forms of leadership." onChange = {handleDescriptionInput}/>
          </Col>
          </Form.Group>

          <Form.Group as={Row}>
          <Form.Label column sm="3">Link</Form.Label>
          <Col sm="8">
          <Form.Control type="text" onChange = {handleLinkInput}/>
          </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="exampleForm.ControlSelect2">
          <Form.Label column sm="3">Type of Resource</Form.Label>
          <Col sm="8">
          <Form.Control as="select" defaultValue="Other" onChange = {handleTypeInput}>
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
        <Button variant="submit" onClick={submit}>Submit</Button>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>


      </Modal>
 

            </>
          )}

          </Col>
          </Row>

        </Container>

          <br></br><br></br>

          <Container>
            <Row className="justify-content-md-center">

            <Col>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link>Articles</Nav.Link>
              <Nav.Link>Videos</Nav.Link>
              <Nav.Link>Podcasts</Nav.Link>
              <Nav.Link>Activities and Games</Nav.Link>
              <Nav.Link>Other</Nav.Link>
            </Nav>
            </Col>

              <Col xs lg="8">

                  
                  {displayResourceCards(resources)};


              </Col>
            </Row>
          </Container>

      </div>
    )
}
export default Resource;
