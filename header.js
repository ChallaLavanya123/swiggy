import React from 'react';
import { FaSearch, FaHome, FaTag, FaQuestionCircle, FaShoppingCart, FaBuilding, FaSignInAlt } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <h2 className="logo">Swiggy</h2>
      <nav>
        <a href="#"><FaSearch /> Search</a>
        <a href="#"><FaHome /> Home</a>
        <a href="#"><FaTag /> Offers</a>
        <a href="#"><FaQuestionCircle /> Help</a>
        <a href="#"><FaShoppingCart /> Cart</a>
        <a href="#"><FaBuilding /> Swiggy Corporate</a>
        <a href="#"><FaSignInAlt /> Signin</a>
      </nav>
    </header>
  );
}

export default Header;

