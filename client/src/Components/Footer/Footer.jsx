import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faCertificate, faSyncAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_section">
        <div className="footer_column">
          <h4>ONLINE SHOPPING</h4>
          <ul>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Home & Living</a>
            </li>
            <li>
              <a href="#">Beauty</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Myntra Insider</a>
            </li>
          </ul>
        </div>
        <div className="footer_column">
          <h4>CUSTOMER POLICIES</h4>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">T&C</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">Track Orders</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Cancellation</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
          </ul>
        </div>
        <div className="footer_column">
          <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>
          <div className="app-links">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </a>
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
            </a>
          </div>
          <h3>KEEP IN TOUCH</h3>
          <div className="social-links">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} className='icon'/>
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} className='icon' />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} className='icon' />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className='icon'/>
            </a>
          </div>
        </div>
        <div className="footer_column">
          <p>
            <FontAwesomeIcon icon={faCertificate} className='icon'/> 100% ORIGINAL guarantee for
            all products at myntra.com
          </p>
          <p>
            <FontAwesomeIcon icon={faSyncAlt} className='icon'/> Return within 14 days of
            receiving your order
          </p>
        </div>
      </div>
    </div>
  )
}
export default Footer
