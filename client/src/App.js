import React from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';


import Home from './components/Home';
import Games from './components/Games';
import Resources from './components/Resources';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Forum from './components/Forum';
import Register from './components/Register';

import './App.css';

// import 'bootstrap/dist/css/bootstrap/min.css';

class App extends React.Component {

  // set state that contains value of form inputs
  state = {
    title: '',
    description: '',
    games: []
  }

  // get entire gameInfo data when react page mounts
  componentDidMount = () => {
    this.getGameInfo();
  }

  // gets latest uploadedGame info data from server/DB
  getGameInfo = () => {
    axios.get('/api/info')
      // pass promise here
      .then((response) => {
        // get data and set games state to data received from DB
        const data = response.data;
        this.setState({ games: data });
        console.log('Data has been received!');
      })
      .catch(() => {
        console.log('Error retrieving data!');
      })
  }

  // everytime the user is typing into test inputs
  // update state values. handleChange function does this
  // event is coming in, get target from event
  handleChange = ({target}) => {
    // get value of current element firing in event
    // from target we can get what we need
    const { name, value } = target;
    // use values to update state
    this.setState({
      [name]: value
    });
  };
  // take data input and submitted in form and send to database
  submit = (event) => {
    // stops browser from refreshing
    event.preventDefault();

    // create and format data to be sent to server
    const payload = {
      title: this.state.title,
      description: this.state.description
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
        this.resetUserInputs();
        // after form is submitted, this gets the latest data from
        // the database
        this.getGameInfo();
      })
      .catch(() => {
        console.log('Internal server error');
      });

  };

  resetUserInputs = () => {
    this.setState({
      title: '',
      description: ''
    })
  }
  // contains games coming in/being received
  displayGameCards = (games) => {
    // if empty return
    if (!games.length) return null;
    // else loop through every game
    // always need index when looping through element
    return games.map((game, index) => (
      <div key={index}>
        <h3>{game.title}</h3>
        <p>{game.description}</p>
      </div>
    ));
  };

  render(){
    console.log('State: ', this.state);
    // JSX
    return(

      // Navigation bar
      <>      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Games" component={Games}/>
             <Route path="/Resources" component={Resources}/>
             <Route path="/Login" component={Login}/>
             <Route path="/Forum" component={Forum}/>
             <Route path="/Register" component={Register}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>

      <div>
        <h2>Upload Game:</h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input
              type="text"
              name="title"
              placeholder="Game Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <textarea
              name="description"
              placeholder="Game Description"
              cols="30"
              rows="10"
              value={this.state.description}
              onChange={this.handleChange}
            >
            </textarea>
          </div>
          <button>Submit</button>
        </form>

        <div className="gameCards">
          {this.displayGameCards(this.state.games)}
        </div>
      </div>

      <Footer />
      </>   
      
      
    );   
    }
}

export default App;
