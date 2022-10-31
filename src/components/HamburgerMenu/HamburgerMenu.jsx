import React, { useState } from 'react'
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isActive, setActive]  = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  }
  
  return (

    <><div className={isActive ? "navbar_panel" : "navbar_panel is-active"} id="panel">
      <ul className="navbar_nav-items">
        <li>
          <Link onClick={handleToggle} className="a" id="inicio" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handleToggle} className="a" id="catalogo" to="/category/mtb">
            MTB
          </Link>
        </li>
        <li>
          <Link onClick={handleToggle} className="a" id="catalogo" to="/category/urban">
            URBAN
          </Link>
        </li>
        <li>
          <Link onClick={handleToggle} className="a" id="catalogo" to="/category/bmx">
            BMX
          </Link>
        </li>
        <li>
          <Link onClick={handleToggle} className="a" id="carrito" to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
      </ul>
    </div><button onClick={handleToggle} className={isActive ? "hamburger hamburger--emphatic menu-h" : "hamburger hamburger--emphatic menu-h is-active"} type="button" aria-label="Menu" aria-controls="navigation">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button></>
  )
}

export default HamburgerMenu