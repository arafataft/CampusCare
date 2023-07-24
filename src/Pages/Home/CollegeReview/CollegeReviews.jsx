/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';

const CollegeReviews = ({ reviews }) => {
  return (
    <div>
      <h2>College Reviews</h2>
      {reviews.map((review, index) => (
        <Card key={index} className="mb-4">
          <Card.Body>
            <Card.Title>{review.collegeName}</Card.Title>
            <Card.Text>
              <strong>Rating: {review.rating}</strong>
            </Card.Text>
            <Card.Text>
              <strong>Reviewer: </strong> {review.name}
            </Card.Text>
            <Card.Text>{review.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CollegeReviews;
