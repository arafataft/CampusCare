import CollegeReviews from './CollegeReviews';

const reviewsData = [
  {
    collegeName: 'Sample College 1',
    rating: 4.5,
    reviewerName: 'John Doe',
    reviewText: 'This college has an excellent faculty and a great campus environment.',
  },
  {
    collegeName: 'Sample College 2',
    rating: 5,
    reviewerName: 'Jane Smith',
    reviewText: 'I had a wonderful experience studying at this college.',
  },
];

const ReviewsSection = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center">Student Reviews</h1>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <CollegeReviews reviews={reviewsData} />
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
