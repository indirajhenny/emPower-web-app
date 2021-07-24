import React, { Component, useContext, useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';

import labyrinth from "../../assets/images/labyrinth.webp";
import twine from "../../assets/images/twine.png";
import Resources from "../../assets/images/Resources.png";
import AuthContext from '../context/AuthContext';
// UPDATED
import Popup from '../Popup.js';

//class Home extends Component {
function Home() {
  //render() {
  // UPDATED
  const {loggedIn} = useContext(AuthContext);
  const [buttonPopup, setButtonPopup] = useState(false);

  // UPDATED: only renders ONCE
  useEffect(() => {
    let flagLoggedIn = loggedIn;
    console.log("flag: ", flagLoggedIn);
    if (flagLoggedIn === true)
    {
      setButtonPopup(true);
      flagLoggedIn = false;
    }
  }, []);

    return (
      <div className="Home">

      <h1>Welcome to empower Through Play!</h1>
      <p><b>emPower Through Play</b> is a resource that focuses primarily on diversity and leadership. Check out our <em>Games</em>, <em>Forums</em>, and various <em>Resources</em> by clicking on their respected links up top.</p>

        <Carousel>
          <Carousel.Item interval={10000} style={{'height':700}}>
            <img className="d-block w-100" src={labyrinth} style={{'height':700}} alt="First slide" href="Games" />
              <Carousel.Caption>

                <h3>Play Analilia</h3>
                <a href="Games"><b>Download Analilia</b></a>

              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={10000}>
            <img className="d-block w-100" src={twine} style={{'height':700}} alt="Second slide"/>
              <Carousel.Caption>
               <h3>Twine Game</h3>
               <a href="Games"><b>Play the Twine Game.</b></a>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={10000}>
            <img className="d-block w-100" src={Resources} style={{'height':700}} alt="Third slide"/>
              <Carousel.Caption>
                <h3>Resources</h3>
                <a href="Resources"><b>Click here for resources.</b></a>

              </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>successfully logged in</h3>
        </Popup>

      </div>
    )
  //}
}
export default Home;
