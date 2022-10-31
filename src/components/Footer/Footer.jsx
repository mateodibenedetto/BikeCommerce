import React from 'react'
import { Link } from 'react-router-dom';
import { useTheme } from "../../context/ThemeContext";

import logoB from "../../assets/imgs/logoBlack.png";
import logoW from "../../assets/imgs/logoWhite.png";

const Footer = () => {

  const { theme } = useTheme(); 

  return (
    <footer className={`footer-container ${theme}`}>
      <div className="footer">
      <div className="logo">
        <Link id="inicio" to="/" className="navbar_title">
          {theme === "light" 
            ? <img className="navbar_img" src={logoW} alt="logo" />
            : <img className="navbar_img" src={logoB} alt="logo" />
            }
        </Link>
      </div>
      <div className="copy">
        <p>BikeCommerce all rigths reserved &copy;</p>
      </div>
      <div className="nav"> 
          <ul className="nav-items">
            <li>
              <Link className="a" id="catalogo" to="/category/mtb">
                MTB
              </Link>
            </li>
            <li>
              <Link className="a" id="catalogo" to="/category/urban">
                Urban
              </Link>
            </li>
            <li>
              <Link className="a" id="catalogo" to="/category/bmx">
                BXM
              </Link>
            </li>
          </ul>
        </div> 
        </div>
    </footer>
  )
}

export default Footer