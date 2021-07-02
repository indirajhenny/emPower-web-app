import React from 'react';
import './styles/Popup.css';

function Popup(props) {
  // trigger = trigger to pop-up on window
  // if trigger == true, pop-up will show
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => props.setTrigger(false)}
        >Close</button>
        {/*pass external elements & other stuff through this popup*/}
        { props.children }
      </div>
    </div>
  ) : "";
}

export default Popup;
