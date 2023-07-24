import { useContext, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';

const Admission = () => {
  const { user } = useContext(AuthContext);


  const {
    handleSubmit,
    control,
    reset  } = useForm();

  const [collegeName, setCollegeName] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    data.collegeName=collegeName;
    // Post data to the backend
    axios.post('http://localhost:3000/admission', data)
      .then((response) => {
        console.log('Data submitted successfully!', response.data);
        if (response.data.error) {
          // If there is an error message from the backend, show it on the frontend
          alert(response.data.error);
        } else {
          setSubmittedData(response.data); // Store the submitted data to show a confirmation message
          // Reset the form after successful submission
          reset();
        }
      })
      .catch((error) => {
        alert('Error submitting data.You may already admitted(Check My College)');
      console.error('Error submitting data:', error);
      });
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <h2>Select a College</h2>
          <ul>
            <li className='mb-1' onClick={() => setCollegeName('Massachusetts Institute of Technology')}><Button variant='secondary' size='sm'>Massachusetts Institute of Technology</Button></li>
            <li className='mb-1' onClick={() => setCollegeName('California Institute of Technology')}><Button variant='secondary' size='sm'>California Institute of Technology</Button></li>
            <li className='mb-1' onClick={() => setCollegeName('Dartmouth College')}><Button variant='secondary' size='sm'>Dartmouth College</Button></li>
            <li className='mb-1' onClick={() => setCollegeName('Williams College')}><Button variant='secondary' size='sm'>Williams College</Button></li>
            <li className='mb-1' onClick={() => setCollegeName('Swarthmore College')}><Button variant='secondary' size='sm'>Swarthmore College</Button></li>
          </ul>
        </Col>
        <Col md={8}>
          {collegeName && (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <h2>{collegeName}</h2>
              <Form.Group controlId="candidateName">
                <Form.Label>Candidate Name</Form.Label>
                <Controller
                  name="candidateName"
                  control={control}
                  defaultValue={user?.displayName}
                  render={({ field }) => (
                    <Form.Control
                      type="text"
                      {...field}
                      required
                    />
                  )}
                />
              </Form.Group>
              <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Controller
                  name="subject"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      type="text"
                      {...field}
                      required
                    />
                  )}
                />
              </Form.Group>
              <Form.Group controlId="candidateEmail">
                <Form.Label>Candidate Email</Form.Label>
                <Controller
                  name="candidateEmail"
                  control={control}
                  defaultValue={user?.email}
                  render={({ field }) => (
                    <Form.Control
                      type="email"
                      {...field}
                      required
                    />
                  )}
                />
              </Form.Group>
              <Form.Group controlId="candidatePhone">
                <Form.Label>Candidate Phone</Form.Label>
                <Controller
                  name="candidatePhone"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      type="tel"
                      {...field}
                      required
                    />
                  )}
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      as="textarea"
                      rows={3}
                      {...field}
                      required
                    />
                  )}
                />
              </Form.Group>
              <Form.Group controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Controller
                  name="dateOfBirth"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      type="date"
                      {...field}
                      required
                    />
                  )}
                />
              </Form.Group>
              <Form.Group controlId="candidateImage">
                <Form.Label>Candidate Image</Form.Label>
                <Controller
                  name="candidateImage"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e) => field.onChange(e.target.files[0])}
                      
                    />
                  )}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}

          {submittedData && (
            <div className="mt-4">
              <h3>Thank you for submitting your admission form!</h3>
              <p>Here are the details you submitted:</p>
              <pre>{JSON.stringify(submittedData.message, null, 2)}</pre>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Admission;
