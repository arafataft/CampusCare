import CollegeGallery from "./CollegeGallery/CollegeGallery";
import CollegeSection from "./CollegeSection/CollegeSection/CollegeSection";
import ResearchSection from "./ResearchPapers/ResearchSection/ResearchSection";

const Home = () => {
    return (
        <>
            <CollegeSection></CollegeSection>
            <CollegeGallery></CollegeGallery>
            <ResearchSection></ResearchSection>
        </>
    );
};

export default Home;