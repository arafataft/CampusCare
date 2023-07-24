import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../Providers/AuthProvider';
import { useForm, Controller } from 'react-hook-form';

const MyCollege = () => {
  const [collegeDetails, setCollegeDetails] = useState(null);
  const { user } = useContext(AuthContext);

  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => {
    // Add the college name to the form data before submitting
    data.collegeName = collegeDetails.collegeName;
    data.name = collegeDetails.name;
    data.email = collegeDetails.email;

    axios
      .post('https://campus-care-server.vercel.app/reviews', data)
      .then((response) => {
        console.log('Review submitted successfully!', response.data);
        // Reset the form after successful submission
        reset();
      })
      .catch((error) => {
        console.error('Error submitting review:', error);
      });
  };

  useEffect(() => {
    axios
      .get(`https://campus-care-server.vercel.app/mycollege?email=${user?.email}`)
      .then((response) => {
        setCollegeDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching college details:', error);
      });
  }, [user?.email]);

  return (
    <Container>
      {collegeDetails ? (
        <Row>
          <Col>
            <h2>My College Details</h2>
            <p>
              <strong>College Name:</strong> {collegeDetails.collegeName}
            </p>
            <p>
              <strong>Address:</strong> {collegeDetails.address}
            </p>
            <p>
              <strong>Phone:</strong> {collegeDetails.phone}
            </p>
          </Col>
        </Row>
      ) : (
        <p>
          You have not been admitted yet. It is essential to complete the admission process before proceeding any further.
        </p>
      )}
      <Row>
        <Col>
          <h2>Add a Review</h2>
          {collegeDetails && (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="reviewRating">
                <Form.Label>Rating</Form.Label>
                <Controller
                  name="reviewRating"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <Form.Control as="select" {...field} required>
                      <option value="0">Select Rating</option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </Form.Control>
                  )}
                />
              </Form.Group>
              <Form.Group controlId="reviewText">
                <Form.Label>Review</Form.Label>
                <Controller
                  name="reviewText"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control as="textarea" rows={3} {...field} required />
                  )}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit Review
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MyCollege;
