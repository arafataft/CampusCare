import { Image, Row, Col, Container } from 'react-bootstrap';
import './CollegeGallery.css';

const CollegeGallery = () => {
  const images = [
    {
      id: 1,
      src: 'https://source.unsplash.com/random/800x600/?graduation',
      alt: '',
    },
    {
      id: 2,
      src: 'https://source.unsplash.com/random/800x601/?graduation',
      alt: '',
    },
    {
      id: 3,
      src: 'https://source.unsplash.com/random/800x602/?graduation',
      alt: '',
    },
    {
      id: 4,
      src: 'https://source.unsplash.com/random/800x603/?graduation',
      alt: '',
    },
    {
      id: 5,
      src: 'https://source.unsplash.com/random/800x604/?graduation',
      alt: '',
    },
    {
      id: 6,
      src: 'https://source.unsplash.com/random/800x605/?graduation',
      alt: '',
    },
    {
      id: 7,
      src: 'https://source.unsplash.com/random/800x606/?graduation',
      alt: '',
    },
    {
      id: 8,
      src: 'https://source.unsplash.com/random/800x607/?graduation',
      alt: '',
    },
    {
      id: 9,
      src: 'https://source.unsplash.com/random/800x608/?graduation',
      alt: '',
    },
    {
      id: 10,
      src: 'https://source.unsplash.com/random/800x610/?graduation',
      alt: '',
    },
    {
      id: 11,
      src: 'https://source.unsplash.com/random/800x611/?graduation',
      alt: '',
    },
    {
      id: 12,
      src: 'https://source.unsplash.com/random/800x612/?graduation',
      alt: '',
    },
  ];

  return (
    <div className="gallery-section">
      <Container>
        <h2 className="section-title">Our Gallery</h2>
        <Row>
          {images.map((image) => (
            <Col xs={6} md={3} key={image.id} className="mb-4">
              <div className="gallery-image-wrapper">
                <Image src={image.src} alt={image.alt} fluid />
                <div className="gallery-image-overlay">
                  <p className="gallery-image-caption">{image.alt}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CollegeGallery;

