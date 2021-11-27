import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../styles/About.css';
//import labyrinth from "../../assets/images/labyrinth.webp";
//import AnaliliaLabyrinth from "../../assets/images/AnaliliaLabyrinth.webp";


class About extends Component {
  render() {
    return (
      <div className="About">

        <div className="heroContainer" style={{backgroundImage: "url(/AnaliliaMenu.webp)"}}>
          <h1 style={{marginLeft:'4rem', marginTop:'10rem'}}>emPower Through Play</h1>
          <p style={{marginLeft:'4rem'}}>Diversity and leadership games and resources for educators and students alike.</p>
        </div>

      <div className="missionContainer">
        <Card style={{
          width: '33rem',
          height: '20rem',
          marginLeft: '6rem',
          marginRight: '2rem',
          marginTop: '2rem',
          marginBottom: '2rem',
          backgroundImage: "url(/AnaliliaLeader1.webp)"}}>
        </Card>

        <Card style={{
          width: '38rem',
          height: '100%',
          marginLeft: '4rem',
          marginTop: '2rem',
          marginBottom: '2rem',
          backgroundColor: '#ffffff00',
          border: 'none'}}>
          <Card.Title
            style={{
                color: "white",
                textAlign: "left",
                fontSize: "xx-large",
                paddingLeft:'1.3rem',
                paddingTop: "10pt"}}><h8><u>Mission</u></h8>
          </Card.Title>
          <Card.Text style={{
            paddingTop:'0.5rem',
            paddingLeft:'1.3rem',
            paddingRight:'1.3rem',
            paddingBottom:'0.5rem',
            color: "white"}}>
            <b><h8>emPower Through Play</h8></b>'s mission is to provide students, educators, and non-educators alike
            a platform where one can share and access games and resources on diversity and leadership topics. The project
            is guided by Dr. Emily Johnson's motto that 'learning that's fun is fun', motivating emPower Through Play's
            focus on games. To support the start of the emPower Through Play project, a UCF Computer Science Senior Design Team created
            Analilia, a RPG-style fantasy game where players experience the trials of being a women trying to get a leadership
            position, while learning leadership and diversity skills. Analilia can be accessed on the emPower Through Play
            website, along with other diversity and leadership games created by educators. The future of the emPower Through
            Play platform will provide visitors with the following:
            <ul style={{paddingLeft:'1.3rem'}}>
              <li>A moderated forum to ask questions about leadership & diversity topics</li>
              <li>A Resources Page with links to Videos, Articles, Podcasts, etc on learship and diversity provided by educators</li>
            </ul>
          </Card.Text>
        </Card>

      </div>
        <div className="teamContainer">
        {/*
          <h1 style={{
            marginLeft: '6rem',
            marginTop: '2rem'}}
          > Team</h1>
          */}
          <div className="sponsorsContainer">
            <h2 style={{
              paddingLeft:'4rem',
              paddingTop: "1rem",
              paddingBottom: '0.6rem'}}><u>Project Sponsors</u></h2>
            <p style={{
              paddingLeft:'4rem',
              paddingBottom:'1rem'}}>The emPower Through Play project is lead and funded by the following sponsors.</p>
            <div className="sponsorsList">
              <Card style={{
                width: '40rem',
                height:'100%',
                textAlign: 'center',
                border: 'none',
                backgroundColor: '#ffffff00',
                marginBottom: '2rem'}}>
                <Card.Text style={{
                  color: 'white',
                  fontSize: "40px"}}>
                  Dr. Emily Johnson
                  <Card.Text style={{
                    color: 'white',
                    fontSize: "20px"}}>
                    Associate Professor at UCF of Games and Interactive Media
                  </Card.Text>
                </Card.Text>
              </Card>
              <Card style={{
                width: '40rem',
                height:'100%',
                textAlign: 'center',
                border: 'none',
                backgroundColor: '#ffffff00',
                marginBottom: '2rem'}}>
                <Card.Text style={{
                  color: 'white',
                  fontSize: "40px"}}>
                  Dr. Emily Johnson
                  <Card.Text style={{
                    color: 'white',
                    fontSize: "20px"}}>
                    Associate Professor at UCF of Games and Interactive Media
                  </Card.Text>
                </Card.Text>
              </Card>
              <Card style={{
                width: '40rem',
                height:'100%',
                textAlign: 'center',
                border: 'none',
                backgroundColor: '#ffffff00',
                marginBottom: '2rem'}}>
                <Card.Text style={{
                  color: 'white',
                  fontSize: "40px"}}>
                  Dr. Emily Johnson
                  <Card.Text style={{
                    color: 'white',
                    fontSize: "20px"}}>
                    Associate Professor at UCF of Games and Interactive Media
                  </Card.Text>
                </Card.Text>
              </Card>
            </div>
          </div>
          <div className="seniorDesignContainer">
            <h2 style={{
              paddingLeft:'4rem',
              paddingTop: "1rem",
              paddingBottom: '0.6rem'}}><u>Senior Design Team</u></h2>
            <p style={{
              paddingLeft:'4rem',
              paddingBottom:'1rem'}}>The emPower Through Play website and <i>Analilia</i> videogame was created by Senior Design students at UCF.</p>
            <div className="sponsorsList">
            <Card style={{
              width: '20rem',
              height:'100%',
              textAlign: 'center',
              border: 'none',
              backgroundColor: '#ffffff00',
              marginBottom: '1rem'}}>
              <Card.Text style={{
                color: 'white',
                fontSize: "30px"}}>
                Sabrina Gauch
                <Card.Text style={{
                  color: 'white',
                  fontSize: "20px"}}>
                  Project Manager
                </Card.Text>
              </Card.Text>
            </Card>
            <Card style={{
              width: '20rem',
              height:'100%',
              textAlign: 'center',
              border: 'none',
              backgroundColor: '#ffffff00',
              marginBottom: '1rem'}}>
              <Card.Text style={{
                color: 'white',
                fontSize: "30px"}}>
                Indira Avendano
                <Card.Text style={{
                  color: 'white',
                  fontSize: "20px"}}>
                  Project Member
                </Card.Text>
              </Card.Text>
            </Card>
            <Card style={{
              width: '20rem',
              height:'100%',
              textAlign: 'center',
              border: 'none',
              backgroundColor: '#ffffff00',
              marginBottom: '1rem'}}>
              <Card.Text style={{
                color: 'white',
                fontSize: "30px"}}>
                Carlos Beltran
                <Card.Text style={{
                  color: 'white',
                  fontSize: "20px"}}>
                  Project Member
                </Card.Text>
              </Card.Text>
            </Card>
            <Card style={{
              width: '20rem',
              border: 'none',
              height:'100%',
              textAlign: 'center',
              backgroundColor: '#ffffff00',
              marginBottom: '1rem'}}>
              <Card.Text style={{
                color: 'white',
                fontSize: "30px"}}>
                Vincent Tran
                <Card.Text style={{
                  color: 'white',
                  fontSize: "20px"}}>
                  Project Member
                </Card.Text>
              </Card.Text>
            </Card>
            <Card style={{
              width: '20rem',
              height:'100%',
              textAlign: 'center',
              backgroundColor: '#ffffff00',
              border: 'none',
              marginBottom: '1rem'}}>
              <Card.Text style={{
                color: 'white',
                fontSize: "30px"}}>
                Vincent Quan
                <Card.Text style={{
                  color: 'white',
                  fontSize: "20px"}}>
                  Project Member
                </Card.Text>
              </Card.Text>
            </Card>
            </div>
          </div>

        </div>
      </div>

    )
  }
}
export default About;
