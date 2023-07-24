import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CollegeCard from "../CollegeCard/CollegeCard";
import axios from "axios";

const CollegeSection = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    // Function to fetch data from the backend API
    const fetchColleges = async () => {
      try {
        const response = await axios.get("https://campus-care-server.vercel.app/colleges");
        const data = response.data.slice(0, 3); // Show only the first three records
        setColleges(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchColleges();
  }, []); 

  return (
    <Container>
      <h2 className="text-center">Colleges</h2>
      <div className="row">
        {colleges.map((college) => (
          <div key={college._id} className="col-md-4 mb-4">
            <CollegeCard college={college} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CollegeSection;
