import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import article from "../assets/images/article.png";

class Resources extends Component {
  render() {
    return (
      <div className="Resources">
        <br></br>
        <h1>Resources</h1>

        <CardColumns>
          <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={article}></Card.Img> 
            <Card.Body>
              <Card.Title>Articles</Card.Title>
              <Button variant="primary" href="/Articles">View Articles</Button>
            </Card.Body>
          </Card>

          <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={article}></Card.Img> 
            <Card.Body>
              <Card.Title>Videos</Card.Title>
              <Button variant="primary" href="/Articles">View Videos</Button>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    )
  }
}
export default Resources;