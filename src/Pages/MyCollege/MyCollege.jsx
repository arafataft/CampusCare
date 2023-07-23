import  { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const collegeDetails = [
    {
      name: 'Sample College 1',
      address: '123 College Street, Cityville, State 12345',
      phone: '(123) 456-7890',
      // Add more fields as needed for other college details
    },
    
    // Add more college objects here...
  ];
const MyCollege = () => {
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Here, you can perform any logic to submit the review.
    // For this example, we'll just reset the review fields.
    setReviewRating(0);
    setReviewText('');
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>My College Details</h2>
          <p>
            <strong>College Name:</strong> {collegeDetails[0].name}
          </p>
          <p>
            <strong>Address:</strong> {collegeDetails[0].address}
          </p>
          <p>
            <strong>Phone:</strong> {collegeDetails[0].phone}
          </p>
          {/* Display other college details as needed */}
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Add a Review</h2>
          <Form onSubmit={handleSubmitReview}>
            <Form.Group controlId="reviewRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                as="select"
                value={reviewRating}
                onChange={(e) => setReviewRating(e.target.value)}
                required
              >
                <option value="0">Select Rating</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="reviewText">
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Review
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MyCollege;
