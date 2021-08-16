import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
//import Popup from '../../Popup.js';
//import QuestionPopup from './QuestionPopup.js'

function QuestionCard(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  // trigger = trigger to pop-up on window
  // if trigger == true, pop-up will show

  const showPopup = (current_question) => {
    console.log("Open Pop-Up");
    //setButtonPopup(true);
    props.parentCallback(true, current_question);
  }

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

  return (
    <div>
      <Card>
        <Card.Body>
          <h3 onClick = {() => showPopup(props.curr_question)}> {props.curr_question.title}</h3>
          {/*<p>{props.curr_question.description}</p>*/}
          <Button onClick={() => approveQA(props.curr_question._id)}>Approve</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default QuestionCard;
