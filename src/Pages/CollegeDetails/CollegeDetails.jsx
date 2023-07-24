import  { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import axios from "axios";

const CollegeDetails = () => {
  const { id } = useParams(); // Extract the college ID from the URL
  const [college, setCollege] = useState(null);
  console.log(id);
  

  useEffect(() => {
    // Function to fetch data for the specific college from the backend API
    const fetchCollegeDetails = async () => {
      try {
        const response = await axios.get(`https://campus-care-server.vercel.app/college/${id}`);
        setCollege(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching college data:", error);
      }
    };

    fetchCollegeDetails();
  }, [id]); 

  // If the college with the specified ID is not found, handle the error
  if (!college) {
    return <div>Loading...</div>;
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
      
    </Container>
  );
};

export default CollegeDetails;
