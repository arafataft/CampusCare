/* eslint-disable react/prop-types */
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
  return (
    <Card>
      <Card.Img variant="top" src={college.image} alt={college.name} />
      <Card.Body>
        <Card.Title>{college.name}</Card.Title>
        <Card.Text>
          <strong>Admission Dates:</strong> {college.admissionDates}
        </Card.Text>
        <Card.Text>
          <strong>Events:</strong> {college.events}
        </Card.Text>
        <Card.Text>
          <strong>Research History:</strong> {college.researchHistory}
        </Card.Text>
        <Card.Text>
          <strong>Sports:</strong> {college.sports}
        </Card.Text>

        <Link to={`/colleges/${college.id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CollegeCard;
