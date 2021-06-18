import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class Games extends Component {
  render() {
    return (
      <div className="Games">
        This is the games page.
        <Button variant="primary">Primary</Button>{' '}
      </div>
    )
  }
}
export default Games;
