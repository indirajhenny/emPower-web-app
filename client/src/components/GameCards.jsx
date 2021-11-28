import Card from 'react-bootstrap/Card';
import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import AuthContext from './context/AuthContext';


function GameCards(props) {
  const [dataID, setdataID] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState([]);
  const [genre, setGenre] = useState([]);
  const { loggedIn } = useContext(AuthContext);



  const handleDelete = (gameIndex) => {
    console.log("Deleted Card Index: " + gameIndex);
  }

  function testDate(d) {

  console.log("New card created");
    d = parseInt(d);
    d = new Date(d).toLocaleDateString();

    return d;
  }


  return (
    <div>
      <br></br>
      <Card
      style={{
        width: '30rem',
        marginRight: "50pt"
      }}>
        <Card.Body>
          <Card.Title>{props.title} <small><i>{props.genre}</i></small></Card.Title>
          <Card.Text>
            {props.description}
            <br></br>
            <br></br>
          </Card.Text>
          <Button variant="primary" href={props.link}>Play {props.title}</Button>
          {loggedIn === true && (
            <Button variant="primary" onClick={handleDelete(props._id)}>Delete</Button>
          )}
        </Card.Body>
        <Card.Footer>{testDate(props.date)}</Card.Footer>
      </Card>
    </div>

  )
}

export default GameCards;


// contains games coming in/being received
/*const displayGameCards = (games) => {
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
          {loggedIn === true && (
            <Button variant="primary" onClick={handleDelete(game._id)}>Delete</Button>
          )}
        </Card.Body>
        <Card.Footer>{testDate(game.date)}</Card.Footer>
      </Card>
    </div>
  ));
};*/
