import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Games extends Component {
  render() {
    return (
      <div className="Games">
        This is the Forum page.
        <Button variant="submit">Submit</Button>{' '}
      </div>
    )
  }
}
export default Games;