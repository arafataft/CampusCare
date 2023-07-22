/* eslint-disable react/prop-types */
import { Card, Button } from 'react-bootstrap';

const ResearchPapers = ({ recommendedPapers }) => {
  return (
    <div>
      <h2 className="mb-4 text-center">Recommended Research Papers</h2>
      <div className="row">
        {recommendedPapers.map((paper, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{paper.title}</Card.Title>
                <Button variant="primary" href={paper.url} target="_blank" rel="noopener noreferrer">
                  Read Paper
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPapers;
