import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function ForumSample() {

  // set state that contains value of form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // array of game data we've received from the database
  const [questions, setQuestions] = useState([]);
  const [reply, setReply] = useState('');
  const [buttonPopup, setButtonPopup] = useState(false);

  const {loggedIn} = useContext(AuthContext);
  console.log(loggedIn);

  // get entire gameInfo data when react page mounts
  useEffect(() => {
    getQuestionInfo();
    // notice the [] below: this prevents a constant trigger
    // whenever a component is updated, we only need a trigger once
  }, [])

  // gets latest uploadedGame info data from server/DB
  const getQuestionInfo = () => {
    axios.get('/forumQA/info')
      // pass promise here
      .then((response) => {
        // get data and set question state to data received from DB
        const data = response.data;
        setQuestions(data);
        console.log('Data has been received!');
      })
      .catch(() => {
        console.log('Error retrieving data!');
      })
  }


  // everytime the user is typing into test inputs
  // update state values. handleChange function does this
  // event is coming in, get target from event
  const handleTitleInput = e => {
    setTitle(e.target.value);
  }
  const handleDescriptionInput = e => {
    setDescription(e.target.value );
  }
  // take data input and submitted in form and send to database
  const submit = (event) => {
    // stops browser from refreshing
    event.preventDefault();

    // create and format data to be sent to server
    const payload = {
      title: title, // get current value of useState
      description: description,
      approved: false,
      reply: reply
    };
    console.log(payload);
    // makes http request call
    // make a POST request to send data to server
    axios({
      // where the server is waiting for request
      // react app is communicating to our server using url
      // and targeting specific route (/save) in order to
      // send 'data' to server
      url: '/forumQA/save',
      method: 'POST', // what data are you sending
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        resetUserInputs();
        // after form is submitted, this gets the latest data from
        // the database
        getQuestionInfo();
      })
      .catch(() => {
        console.log('Internal server error');
      });

  };
  // qa_id is the datapoint's id -> what we use to differentiate
  // this data point from all others in our mongoDB database
  const approveQA = (qa_id) => {
    // use qa_id to update the proper datapoint
    console.log(qa_id);
    axios.put('/forumQA/update/:id', {
      approved: true,
      id: qa_id
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  // when user submits form, resets text input boxes to
  // be empty/blank
  const resetUserInputs = () => {
    setTitle('');
    setDescription('');
  }
  // contains question coming in/being received
  const displayQuestionCards = (questionsList) => {
    if (!questionsList.length) return null;
    // else loop through every game
    // always need index when looping through element
    return questionsList.map((question, index) => (
      <div key={index}>
      {question.approved === false && (
        <Card>
          <Card.Body>
            <h3>{question.title}</h3>
            <p>{question.description}</p>


            <p>{"Approved = " +question.approved}</p>
            <Button onClick={() => approveQA(question._id)}>Approve</Button>
          </Card.Body>
        </Card>

        )}
      </div>
    ));
  };

  function showAlert()
  {


    console.log("testing link");


  }

  const displayApprovedQuestionCards = (questionsList) => {
    if (!questionsList.length) return null;
    // else loop through every game
    // always need index when looping through element
    return questionsList.map((question, index) => (


      <div key={index}>
      {question.approved === true && (
        <Card
        bg = {'dark'}
        border = {'light'}
        text = {'light'}
        >
          <Card.Body onClick = {() => showAlert()}>

            <h4><a href = "#" >{question.title}</a></h4>

            {/*{<p>{question.description}</p>}*/}
            {/*for testing*/}
            {/*<p>{"Approved = " +question.approved}</p>*/}

          </Card.Body>
        </Card>
      )}
      </div>
    ));
  };

  // JSX
  return(
    <div>
      <h2>Upload Question</h2>
      <form onSubmit={submit}>
        <div className="form-input">
          <input
            type="text"
            name="title"
            placeholder="Game Title"
            value={title}
            onChange={handleTitleInput}
          />
        </div>
        <div className="form-input">
          <textarea
            name="description"
            placeholder="Question Description"
            cols="30"
            rows="10"
            value={description}
            onChange={handleDescriptionInput}
          >
          </textarea>
        </div>
        <button>Submit</button>
      </form>

      {loggedIn === true &&(
      <div className="questionCards">
        {
          displayQuestionCards(questions)
        }
      </div>
    )}

    {loggedIn === false &&(
      <div>
        {
          displayApprovedQuestionCards(questions)
        }
      </div>
    )}
    </div>
  );

}

export default ForumSample;
