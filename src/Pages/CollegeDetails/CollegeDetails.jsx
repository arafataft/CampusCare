import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CollegeDetails = () => {
  const { id } = useParams(); // Extract the college ID from the URL

  // Sample data for demonstration purposes
const colleges = [
    {
      id: 1,
      name: 'Sample College 1',
      image: 'https://source.unsplash.com/random/800x607/?college',
      admissionDates: 'August 15 - September 30',
      events: 'College Fest, Career Fair',
      researchHistory: 'Founded in 1950, 50+ years of research excellence',
      sports: 'Football, Basketball, Tennis',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      // Add more fields as needed for other details
    },
    // Add more colleges here...
  ];
  

  // Find the college with the matching ID from the data (assumes unique IDs)
  const college = colleges.find((college) => college.id === parseInt(id));

  // If the college with the specified ID is not found, handle the error
  if (!college) {
    return <div>College not found!</div>;
  }

  return (
    <Container>
      <h2 className='text-center'>{college.name}</h2>
      <img src={college.image} alt={college.name} />
      <p>
        <strong>Admission Dates:</strong> {college.admissionDates}
      </p>
      <p>
        <strong>Events:</strong> {college.events}
      </p>
      <p>
        <strong>Research History:</strong> {college.researchHistory}
      </p>
      <p>
        <strong>Sports:</strong> {college.sports}
      </p>
      <p>
        <strong>Details:</strong> {college.details}
      </p>
      {/* Display other details here based on the fetched data */}
    </Container>
  );
};

export default CollegeDetails;
