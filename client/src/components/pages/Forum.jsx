import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import Button from 'react-bootstrap/Button';


function ForumSample() {

  // set state that contains value of form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [games, setGames] = useState([]);


  const {loggedIn} = useContext(AuthContext);

  // get entire gameInfo data when react page mounts
  useEffect(() => {
    getGameInfo();
    console.log(loggedIn);

    // notice the [] below: this prevents a constant trigger
    // whenever a component is updated, we only need a trigger once
  }, [])

  // gets latest uploadedGame info data from server/DB
  const getGameInfo = () => {

    axios.get('/api/info')
      // pass promise here
      .then((response) => {
        // get data and set games state to data received from DB
        const data = response.data;
        setGames(data);
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
    setTitle(e.target.value );
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
      approved: false
    };

    // makes http request call
    // make a POST request to send data to server
    axios({
      // where the server is waiting for request
      // react app is communicating to our server using url
      // and targeting specific route (/save) in order to
      // send 'data' to server
      url: '/api/save',
      method: 'POST', // what data are you sending
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');


        resetUserInputs();
        // after form is submitted, this gets the latest data from
        // the database
        getGameInfo();
      })
      .catch(() => {
        console.log('Internal server error');
      });

  };

//update the database to approve the forum cards
  const approve = (index) =>
  {
    // create and format data to be sent to server
    const payload = {
      _id:games[index]._id,
      title: games[index].title, // get current value of useState
      description: games[index].description,
      approved: true
    };


// makes http request call
// make a POST request to send data to server
axios({
  // where the server is waiting for request
  // react app is communicating to our server using url
  // and targeting specific route (/save) in order to
  // send 'data' to server
  url: '/api/:id',
  method: 'PUT', // what data are you sending
  data: payload
})
  .then(() => {
    console.log('Data has been sent to the server');


    // after form is submitted, this gets the latest data from
    // the database
    getGameInfo();
  })
  .catch(() => {
    console.log('Internal server error');
  });
  }

  // when user submits form, resets text input boxes to
  // be empty/blank
  const resetUserInputs = () => {
    setTitle('');
    setDescription('');
  }
  // contains games coming in/being received
  const displayGameCards = (gamesList) => {


    // if empty return
    if (!gamesList.length) return null;
    // else loop through every game
    // always need index when looping through element
    return gamesList.map((game, index) => (

      <div key={index}>
        <h3>{index+".) "+game.title}</h3>
        <p>{game.description}</p>

      <Button button="submit" onClick = {() => approve(index)}>Approve?</Button>
      </div>

    ));
  };

  const displayCardApproval = (gamesList) => {


    if (!gamesList.length)
    {return null;}

  console.log(gamesList);
  }

  // JSX

  return(

    <div>
      <h2>Upload Game</h2>
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
            placeholder="Game Description"
            cols="30"
            rows="10"
            value={description}
            onChange={handleDescriptionInput}
          >
          </textarea>
        </div>
        <button>Submit</button>
      </form>



{
//debugging only!

console.log(games),
//console.log(games[0].(_id)),
displayCardApproval(games)
}

{loggedIn === true && (

      <div className="gameCards">
        {
          displayGameCards(games)
        }
      </div>
)}


    </div>
  );
}

export default ForumSample;
