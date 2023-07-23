import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Admission = () => {
  const [collegeName, setCollegeName] = useState('');
  const [candidateName, setCandidateName] = useState('');
  const [subject, setSubject] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [candidateImage, setCandidateImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform any submission logic, like sending the data to a backend server.
    // For this example, we'll just reset the form fields.
    setCollegeName('');
    setCandidateName('');
    setSubject('');
    setCandidateEmail('');
    setCandidatePhone('');
    setAddress('');
    setDateOfBirth('');
    setCandidateImage(null);
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <h2>Select a College</h2>
          <ul>
            <li onClick={() => setCollegeName('College 1')}>College 1</li>
            <li onClick={() => setCollegeName('College 2')}>College 2</li>
            <li onClick={() => setCollegeName('College 3')}>College 3</li>
            {/* Add more college names here */}
          </ul>
        </Col>
        <Col md={8}>
          {collegeName && (
            <Form onSubmit={handleSubmit}>
              <h2>{collegeName}</h2>
              <Form.Group controlId="candidateName">
                <Form.Label>Candidate Name</Form.Label>
                <Form.Control
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="candidateEmail">
                <Form.Label>Candidate Email</Form.Label>
                <Form.Control
                  type="email"
                  value={candidateEmail}
                  onChange={(e) => setCandidateEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="candidatePhone">
                <Form.Label>Candidate Phone</Form.Label>
                <Form.Control
                  type="tel"
                  value={candidatePhone}
                  onChange={(e) => setCandidatePhone(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="candidateImage">
                <Form.Label>Candidate Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCandidateImage(e.target.files[0])}
                  
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Admission;
