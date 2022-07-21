import React from "react";
import "./Navbar.css";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTwitch,
  FaQuestion,
  FaRegSquare
} from "react-icons/fa";
import { IoPersonOutline,IoSearchOutline } from "react-icons/io5";
import { RiArrowDownSFill,RiShareCircleLine } from "react-icons/ri";
import logo from '../resc/logo.png';
import logoTransparent from '../resc/logo-transparent.png';

const Navbar = () => {
  return (
    <div className="navbar-all">
      <div className="navbar">
        <div className="logo"><img src={logo} alt="Logo" id="logo"/> FC BARCELONA</div>
        <div className="parent">
          <div className="child1">
            <div className="social-media">
              <h1>FOLLOW FC BARCELONA</h1> <FaTwitter /> <FaFacebookSquare />{" "}
              <FaInstagram />
              <FaYoutube /> <FaTiktok /> <FaTwitch />
            </div>
            <div className="auth">
              <div>
                <IoPersonOutline /> Login
              </div>
              <div className="register">
              <img src={logoTransparent} alt="Logo"/> Register as a Culer
              </div>
              <div className="language-switcher">
                EN <RiArrowDownSFill />
              </div>
              <div>
                All Barça sites <FaRegSquare />
              </div>
            </div>
          </div>
          <div className="child2">
            <div>FIRST TEAM <RiArrowDownSFill /></div>
            <div>TICKETS & MUSEUM <RiArrowDownSFill /></div>
            <div>SHOP <RiShareCircleLine/></div>
            <div>CULERS <RiArrowDownSFill /></div>
            <div>CLUB <RiArrowDownSFill /></div>
            <div>BARCA TEAMS <RiArrowDownSFill /></div>
            <div id="search-icon"><IoSearchOutline/></div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Navbar;
