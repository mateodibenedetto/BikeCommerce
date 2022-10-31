import React from "react"; 
import logoB from "../../assets/imgs/logoBlack.png";
import logoW from "../../assets/imgs/logoWhite.png";
import CardWidget from "../CardWidget";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";  
const NavBar = () => {
  const { theme, toggleColorMode } = useTheme(); 

  return (
    <div className={`nav-container ${theme}`}>
      <nav className={`navbar_nav`}>
        <div className="navbar_logo">
          <Link id="inicio" to="/" className="navbar_title">
            {theme === "light" 
            ? <img className="navbar_img" src={logoW} alt="logo" />
            : <img className="navbar_img" src={logoB} alt="logo" />
            }
          </Link>
        </div>

        <div className="navbar_menu" id="menu">
          <ul className="navbar_nav-items">
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

        <div className="navbar_menu"> 
          <ul className="navbar_nav-items"> 
              <IconButton onClick={() => toggleColorMode()} color="inherit" >
                {theme === "light" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton> 
            <li>
              <Link className="carrito" id="carrito" to="/cart">
                <CardWidget />
              </Link>
            </li>
          </ul>
        </div>

        <HamburgerMenu />
      </nav>
    </div>
  );
};

export default NavBar;
