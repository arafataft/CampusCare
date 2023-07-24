import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ResearchPapers from "../ResearchPapers/ResearchPapers";
import axios from "axios";

const ResearchSection = () => {
  const [recommendedPapers, setRecommendedPapers] = useState([]);

  useEffect(() => {
    // Function to fetch data for recommended research papers from the backend API
    const fetchRecommendedPapers = async () => {
      try {
        const response = await axios.get("https://campus-care-server.vercel.app/paper");
        setRecommendedPapers(response.data);
      } catch (error) {
        console.error("Error fetching recommended papers:", error);
      }
    };

    fetchRecommendedPapers();
  }, []);

  return (
    <Container>
      <ResearchPapers recommendedPapers={recommendedPapers} />
    </Container>
  );
};

export default ResearchSection;
