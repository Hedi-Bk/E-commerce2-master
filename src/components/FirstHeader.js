import React, { useState } from "react";
import { Dropdown, Container, Nav, Navbar } from "react-bootstrap";
import { FaHome, FaMoon, FaSun, FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContextProvider";
import { useWindowSize } from "../hooks/useWindowSize";
import { useFilterBarState } from "../context/FilterBar";
import SearchBar from "./SearchBar";

//Import Components
//Imort Images
import logo from "../images/Logo.png";

export default function FirstHeader() {
  //getting windowSize from useWindowSize() custom hook
  const windowSize = useWindowSize();

  //getting the current theme from ThemeContext
  const { theme, setTheme } = useTheme();

  //visibility status of the sidebar
  const { visible, setVisible } = useFilterBarState();

  //searchbar (below searchbar- the one on smaller screen) visibility status
  const [searchBarVisible, setsearchBarVisible] = useState(false);

  const themeHandler = () => {
    //toggles theme
    let bodyBg = "white";
    if (theme === "light") {
      setTheme("dark");
      bodyBg = "var(--pitchDark)";
    } else {
      setTheme("light");
    }
    document.body.style.background = bodyBg;
  };

  return (
    <>
      <div className="header ">
        {/* Top navbar STARTS ------------ */}
        <Navbar
          style={{ height: 80 }}
          className={`${theme === "light" ? "lightHeader" : "darkHeader"}`}
        >
          <Container>
            <div className="navLeftItems">
              {/* Containg the logo */}
              <div className="d-flex justify-content-between align-items-center ">
                <Navbar.Brand style={{ color: theme === "dark" && "white" }}>
                  <Link to="/">
                    <img
                      className=""
                      src={logo}
                      alt="None"
                      width={"70px"}
                    ></img>
                  </Link>
                </Navbar.Brand>
                <Nav className=" p-5">
                  <div className="navlinks mx-1">
                    <Nav.Link disabled href="/cart">
                      Machines à Coures
                    </Nav.Link>
                  </div>
                  <div className="navlinks mx-1">
                    <Nav.Link disabled href="/cart">
                      Piéces Machines à Coures
                    </Nav.Link>
                  </div>
                  <div className="navlinks mx-1">
                    <Nav.Link disabled href="/cart">
                      Piéces électroniques
                    </Nav.Link>
                  </div>
                </Nav>
              </div>
            </div>

            {/* Containg the cart icon with dropdown of all the products in the cart */}
            <Nav className="navIcons  ">
              <Dropdown>
                <button className="firstbtn ">Login / Register</button>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
        {/* ------------ Top navbar ENDS */}

        {/* Lower navbar STARTS ------------ */}
        <Navbar bg="dark" variant="dark" className="lowerNav mb-5">
          <Container>
            {/* - Hamberger icon for sidebar toggling on smaller sceen
                             - Only visible on smaller sceen ( width < 1100) */}
            <div
              className="navLeftItems filterMenuIcon"
              style={{ display: windowSize.width > 1100 && "none" }}
              onClick={() => setVisible(!visible)}
            >
              <FaBars fontSize="25px" />
            </div>

            {/* Containing the search bar / search icon, home button and theme button */}
            <Nav className="navIcons">
              {/* - Search bar for smaller screen
                                 - Only visible on smaller sceen and when searchBarVisible = true  */}
              {searchBarVisible && windowSize.width <= 1100 && <SearchBar />}

              {/* search button */}
              <span
                className="searchIcon m-auto"
                onClick={() => setsearchBarVisible(!searchBarVisible)}
              >
                {!searchBarVisible ? (
                  <FaSearch fontSize="20px" />
                ) : (
                  <span style={{ fontSize: 20 }}>X</span>
                )}
              </span>

              {/* Home button */}
              <Link to="/">
                <FaHome fontSize="25px" className="ms-3 mt-2" />
              </Link>

              {/* Theme button */}
              <span onClick={themeHandler} className="themeLogo ms-3 mt-1">
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </span>
            </Nav>
          </Container>
        </Navbar>
      </div>
      {/* ------------ Lower navbar ENDS */}
    </>
  );
}
