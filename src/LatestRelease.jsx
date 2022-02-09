import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import romance from "../src/romance.json";

class LatestRelease extends Component {
  render() {
    return (
      <Container>
        <Row>
          {romance.map((book) => (
            <Col xs={12} md={4} lg={3} key={book.asin}>
              <Card key={book.asin}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price}</Card.Text>
                  <Button variant="primary">{book.category}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
