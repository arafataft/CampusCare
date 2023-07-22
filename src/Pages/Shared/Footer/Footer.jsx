import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col>
            <h5>About Us</h5>
            <p>
              CampusCare is your go-to platform for college management and student success. We
              provide innovative solutions to streamline administrative tasks and enhance the
              college experience for both students and staff.
            </p>
          </Col>
          <Col>
            <h5>Contact Us</h5>
            <p>Email: contact@campuscare.com</p>
            <p>Phone: +88 01234-567890</p>
          </Col>
          <Col>
            <h5>Social Media</h5>
            <div>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="mr-3" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="mr-3" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="mr-3" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
