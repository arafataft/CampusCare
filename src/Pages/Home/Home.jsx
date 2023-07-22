import CollegeGallery from "./CollegeGallery/CollegeGallery";
import ReviewsSection from "./CollegeReview/ReviewsSection";
import CollegeSection from "./CollegeSection/CollegeSection/CollegeSection";
import ResearchSection from "./ResearchPapers/ResearchSection/ResearchSection";

const Home = () => {
    return (
        <>
            <CollegeSection></CollegeSection>
            <CollegeGallery></CollegeGallery>
            <ResearchSection></ResearchSection>
            <ReviewsSection></ReviewsSection>
        </>
    );
};

export default Home;