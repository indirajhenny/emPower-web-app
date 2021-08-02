import React from 'react';
import '../../styles/QuestionPopup.css';
// TO-DO: create a form inside here

function QuestionPopup(props) {
  // trigger = trigger to pop-up on window
  // if trigger == true, pop-up will show
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => props.setTrigger(false)}
        >
        Close
        </button>
        {/*pass external elements & other stuff through this popup*/}
        <h2> {props.question.title}</h2>
        {props.question.description}
      </div>
    </div>
  ) : "";
}

export default QuestionPopup;
