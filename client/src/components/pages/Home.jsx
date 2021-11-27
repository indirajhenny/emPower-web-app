import React, { Component, useContext, useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '.././styles/home.css';


//import labyrinth from "../../assets/images/labyrinth.webp";
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
        <div
        style={{
            backgroundImage: "url(/AnaliliaMenu.webp)",
            backgroundSize: "cover",
            height:"100vh",
        }}>
          <h1 style={{
            paddingLeft: "65%",
            paddingTop: "11%",
            color: "white",
            fontSize: "60px"}}>Analilia</h1>
              <Container fluid>
                <Row className="justify-content-md-center">
              <Col>

              <Card
              style={{
                width: '40rem',
                marginTop: "5pt",
                marginRight: "11pt",
                marginBottom: "10px",
                float: "right",
                backgroundColor: "rgb(16,18,51)",
                boxShadow: "5px 10px 8px rgb(16, 18, 60)"}}>
                <Card.Body>
                  <Card.Text style={{color:'white'}}>
                  <b><h8>Analilia</h8></b> is a free-to-play, RPG style fantasy game developed in order to give the player a perspective of the trials of being a women trying to get a leadership position.
              The game features a young woman, Analilia, who is trying to get a promotion at her tech job but battles the internal conflicts of lacking confidence and the external conflicts of
              sexism that prevent her from confronting her boss. She falls asleep and is transported to a "labyrinth" in which she experiences a path to leadership, encountering mythical creatures
              and problem solving puzzles. Analilia was developed by a group of University of Central Florida computer science senior design students.
                  </Card.Text>
                </Card.Body>
                <div className="text-center">
                <Button size="lg" variant="secondary">Download</Button>
                </div>
              </Card></Col></Row>
            </Container>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>Successfully logged in!</h3>
            </Popup>


</div>
      </div>

    )
  //}
}
export default Home;
