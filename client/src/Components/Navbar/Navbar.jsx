import { useNavigate } from "react-router-dom"
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo.jpg'




const Navbar = () => {
   const navigate=useNavigate();

  return (
    <div className="first-section">
      <nav className="navbar">
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">MEN</a>
          </li>
          <li>
            <a href="#">WOMEN</a>
          </li>
          <li>
            <a href="#">KIDS</a>
          </li>
          <li>
            <a href="#">HOME & LIVING</a>
          </li>
          <li>
            <a href="#">BEAUTY</a>
          </li>
          <li>
            <a href="#">
              STUDIO <sup>NEW</sup>
            </a>
          </li>
          <li>
            <a href="/admin" className="admin">
              ADMIN
            </a>
          </li>
        </ul>
        <form className="search-bar">
          <div className="search-box">
            <button className="btn-search">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="smallicon" />
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Search for products, brands and more"
            />
          </div>
        </form>
        <div className="icons">
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faUser} className="smallicon" />
            <span>Profile</span>
          </a>
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faHeart} className="smallicon" />
            <span>Wishlist</span>
          </a>
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faBagShopping} className="smallicon" />
            <span>Bag</span>
          </a>
        </div>
      </nav>
    </div>
  )
}
export default Navbar





{
  /* <div className="main-navbar">
      <button onClick={() => navigate("/admin")}>Admin</button>
    </div> */
}