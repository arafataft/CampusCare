import { Container } from "react-bootstrap";
import CollegeCard from "../CollegeCard/CollegeCard";

const colleges = [
  {
    name: 'Sample College 1',
    image: 'https://source.unsplash.com/random/800x607/?college',
    admissionDates: 'August 15 - September 30',
    events: 'College Fest, Career Fair',
    researchHistory: 'Founded in 1950, 50+ years of research excellence',
    sports: 'Football, Basketball, Tennis',
  },
  {
    name: 'Sample College 1',
    image: 'https://source.unsplash.com/random/800x607/?college',
    admissionDates: 'August 15 - September 30',
    events: 'College Fest, Career Fair',
    researchHistory: 'Founded in 1950, 50+ years of research excellence',
    sports: 'Football, Basketball, Tennis',
  },
  {
    name: 'Sample College 1',
    image: 'https://source.unsplash.com/random/800x607/?college',
    admissionDates: 'August 15 - September 30',
    events: 'College Fest, Career Fair',
    researchHistory: 'Founded in 1950, 50+ years of research excellence',
    sports: 'Football, Basketball, Tennis',
  },
  
];

const CollegeSection = () => {
  return (
    <Container>
      <h2 className="text-center">Colleges</h2>
      <div className="row">
        {colleges.map((college, index) => (
          <div key={index} className="col-md-4 mb-4">
            <CollegeCard college={college} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CollegeSection;
