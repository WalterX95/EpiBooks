import { Component } from "react";
import { Card, ListGroup, Container } from "react-bootstrap";

class SingleBook extends Component {
  render() {
        return (
            <Container
              fluid={true}
              className='d-flex flex-wrap justify-content-center mt-5'
            >
                  <Card style={{ width: '16rem' }} key={this.props.libro.asin} className='mx-2 mb-2'>
                    <Card.Img
                      variant='top'
                      src={this.props.libro.img}
                      style={{ height: '400px' }}
                      className='w-100 object-fit-cover'
                    />
                    <Card.Body className='d-flex flex-column justify-content-between'>
                      <Card.Title className='fw-bold'>{this.props.libro.title}</Card.Title>
                      <Card.Text className='ms-auto'>€{this.props.libro.price}</Card.Text>
                    </Card.Body>
                    <ListGroup className='list-group-flush text-center'>
                      <ListGroup.Item className='fs-5 fw-bold'>
                        {this.props.libro.category}
                      </ListGroup.Item>
                      <ListGroup.Item className='fs-6'>
                        ASIN: {this.props.libro.asin}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>

            </Container>
          );
     }
}

export default SingleBook;
