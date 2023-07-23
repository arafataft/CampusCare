
import { Container } from "react-bootstrap";
import ResearchPapers from "../ResearchPapers/ResearchPapers";

const recommendedPapers = [
  {
    title: 'Research Paper 1',
    url: 'https://example.com/paper1',
  },
  {
    title: 'Research Paper 2',
    url: 'https://example.com/paper2',
  },
  {
    title: 'Research Paper 3',
    url: 'https://example.com/paper2',
  },
  // Add more research paper objects here...
];

const ResearchSection = () => {
  return (
    <Container>
      <ResearchPapers recommendedPapers={recommendedPapers} />
    </Container>
  );
};

export default ResearchSection;
