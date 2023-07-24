import { useState, useEffect } from 'react';
import axios from 'axios';
import CollegeReviews from './CollegeReviews';

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from the backend
    axios
      .get('https://campus-care-server.vercel.app/reviews')
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center">Student Reviews</h1>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <CollegeReviews reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
