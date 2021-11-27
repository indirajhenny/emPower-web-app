import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '.././styles/About.css';
//import labyrinth from "../../assets/images/labyrinth.webp";


class About extends Component {
  render() {
    return (
      <div className="About">
        <div class="about-hero-section">
          <h1 style={{
            color: "white",
            fontSize: "60px"}}>emPower Through Play</h1>
          <p>Learning that's fun is fun.</p>
          <p>Diversity and leadership games and resources for educators and students alike.</p>
        </div>

        <div class="row">
            <div class="column">
                <Container>
                    <img src = "url(/labyrinth.webp)"/>
                  {/*
                    <Card
                    style={{
                      alignItems: "center",
                      margin: "0 auto",
                      marginTop: "15%",
                      width: "425pt",
                      height: "275pt"}}>
                        <Card.Title
                        style={{
                            color: "#682D43",
                            textAlign: "center",
                            fontSize: "xx-large",
                            paddingTop: "10pt"}}><h8>Login</h8></Card.Title>
                      </Card>
                    */}

                </Container>
            </div>
            <div class="column">
                <Container>
                  <Card
                  style={{
                    alignItems: "center",
                    margin: "15px",
                    /*margin: "0 auto",*/
                    /*marginTop: "15%",*/
                    width: "425pt",
                    height: "120pt"}}>
                      <Card.Title
                      style={{
                          color: "#682D43",
                          textAlign: "center",
                          fontSize: "xx-large",
                          paddingTop: "10pt"}}><h8>Mission</h8></Card.Title>
                          <Card.Text>
                              emPower Throguh Play's mission is to.....
                          </Card.Text>
                    </Card>

                    <Card
                    style={{
                      alignItems: "center",
                      margin: "15px",
                      /*margin: "0 auto",*/
                      /*marginTop: "15%",*/
                      width: "425pt",
                      height: "120pt"}}>
                        <Card.Title
                        style={{
                            color: "#682D43",
                            textAlign: "center",
                            fontSize: "xx-large",
                            paddingTop: "10pt"}}><h8>Team</h8></Card.Title>
                            <Card.Text>
                                emPower Throguh Play's mission is to.....
                            </Card.Text>
                      </Card>
                </Container>
            </div>
        </div>

      </div>
    )
  }
}
export default About;
