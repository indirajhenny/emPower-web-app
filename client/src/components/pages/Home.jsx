import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';

import labyrinth from "../../assets/images/labyrinth.webp";
import twine from "../../assets/images/twine.png";
import Resources from "../../assets/images/Resources.png";

import '../styles/home.css';


class Home extends Component {
  render() {

    return (

      <div className="Home">

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

              <h2 class = "homeHeader">About us</h2>
              <p><b>emPower Through Play</b> is a resource that focuses primarily on diversity and leadership.
              Check out our <em>Games</em>, <em>Forums</em>, and various <em>Resources</em> by clicking on their respected links up top.
              <b> Our goal</b> is to help people become more aware about different groups and cultures while also educating others on various leadership skills that we can use to become successful during our lifetime.
               If you have any serious questions, or require any serious assistance about empower Through Play, you can email us by clicking <a href="mailto:emPowerUCF@gmail.com">here</a>!
               If you have any suggestions for us, you may discuss that on the <a href="Forum">Forum</a> page.
               </p>




      </div>

    )
  }
}
export default Home;
