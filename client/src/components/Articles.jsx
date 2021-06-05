import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';

class Articles extends Component {
  render() {
    return (
      <div className="Games">
        <h1>Articles</h1>
        <Card>
            <Card.Header>Date Posted</Card.Header>
            <Card.Body>
                <Card.Title>Title of Article</Card.Title>
                <Card.Text>
                    Description of Article
                </Card.Text>
                <Button variant="primary">Article</Button>
            </Card.Body>
        </Card>
      </div>
    )
  }
}
export default Articles;