import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaWhatsapp, FaMobile, FaMailBulk } from 'react-icons/fa';
import './css/Footer.css';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = ({setLimit}) => {
  const handleLogoClick = () => {
    setLimit(16);
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p><FaLocationDot/> KD-315, 2nd floor<br/>
                              Kohat Enclave, Pitampura<br/>
                              Delhi-110034</p>
          <p><FaMailBulk/> Email: <a href="mailto:enquiry.tridentproperties@gmail.com">enquiry.tridentproperties@gmail.com</a></p>
          <p><FaWhatsapp /> WhatsApp: <a href="https://wa.me/+919999404381">+91 9999 404381</a></p>
          <p><FaMobile /> Phone: <a href="tel:+91 9999 404381">+91 9999 404381</a>, <a href="tel:+91 9999 404127">+91 9999 404127</a></p>
          <div className="social-icons">
            <a href="https://www.instagram.com/homesigmadubai" aria-label="Instagram"><FaInstagram /></a>
            {/* <a href="https://www.linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.youtube.com" aria-label="YouTube"><FaYoutube /></a> */}
            <a href="https://www.facebook.com/share/bK5711LHL9HmKmDq/?mibextid=LQQJ4d" aria-label="Facebook"><FaFacebook /></a>
          </div>
        </div>
        <div className="our-services">
          <h3>Our Services</h3>
          <ul>
            <li>
            <Link to={"/category/Buy%20a%20Property"} className="buy" onClick={handleLogoClick}>
                <a>Buy a Property</a>
              </Link>
              </li>
            {/* <li><a href="#sell">Sell a Property</a></li> */}
            <li>
            <Link to={"/category/Rent%20a%20Property"} className="rent" onClick={handleLogoClick}>
              <a>Rent a Property</a>
              </Link>
              </li>
          </ul>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
            <Link to={"/about-home-sigma"} className="about">
              <a>About Trident Properties</a>
            </Link>  
            </li>
            <li>
            <Link to={"/terms-of-service"} className="about">
              <a>Terms of Service</a>
            </Link>
            </li>
            <li>
            <Link to={"/our-team"} className="about">
              <a>Our Team</a>
            </Link>
            </li>
            <li>
            <Link to={"/faq"} className="about">
              <a>FAQ</a>
            </Link>
            </li>
          </ul>
        </div>
        <div className="featured-areas">
          <h3>Featured Areas</h3>
          <ul>
            <li><a href="#downtown">Kundli</a></li>
            <li><a href="#business-bay">Rohini</a></li>
            {/* <li><a href="#creek-harbour">Dubai Creek Harbour</a></li> */}
            {/* <li><a href="#dubai-land">Dubai Land</a></li>
            <li><a href="#jvc">JVC</a></li> */}
            <li><a href="#mbr-city">Gurugram</a></li>
            <li><a href="#all-areas">All Our Areas</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Trident Properties – Made with ❤️ in India.</p>
      </div>
    </footer>
  );
}

export default Footer;
