import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { CgProfile } from "react-icons/cg";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { useStore } from "../authentication/Login";
import SignOut from "../authentication/SignOut";

export default function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  let id = cookies.user.data.user._id;

  const history = useHistory();
  const { setUserData, userData } = useStore();

  return (
    <header id="header" className="fixed-top">
      <div
        className="container d-flex align-items-center"
        style={{ justifyContent: "space-around" }}>
        <h1 className="logo ">
          <a href="home">Burger Station</a>
        </h1>
        <nav style={{ display: "flex" }} className="nav-menu">
          <ul>
            <Scroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <li className="nav-li">
                {" "}
                <a href="#about">About</a>
              </li>
            </Scroll>
            <Scroll
              activeClass="active"
              to="menu"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <li className="nav-li">
                <a href="#menu">Menu</a>
              </li>
            </Scroll>
            <Scroll
              activeClass="active"
              to="why-us"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-menu d-none d-lg-block">
              <li className="nav-li">
                <a href="#why-us">Why Us?</a>
              </li>
            </Scroll>
            <Scroll
              activeClass="active"
              to="branch"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <li className="nav-li">
                <a href="#branch">Branches</a>
              </li>
            </Scroll>
            <Scroll
              activeClass="active"
              to="book-a-table"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <li className="nav-li">
                <a href="#book-a-table">Book a Table</a>
              </li>
            </Scroll>
            <Scroll
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <li className="nav-li">
                <a href="#gallery">Gallery</a>
              </li>
            </Scroll>
            <Scroll
              activeClass="active"
              to="chefs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <li className="nav-li">
                <a href="#chefs">Staff</a>
              </li>
            </Scroll>
            <Scroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <li className="nav-li">
                <a href="#contact">Contact</a>
              </li>
            </Scroll>
            <li className="book-a-table text-center">
              <Link to={`edituser/${id}`}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>user profile</div>
                  <CgProfile
                    style={{ fontSize: "1rem", marginLeft: "0.5rem" }}
                  />
                </div>
              </Link>
            </li>
            <SignOut />
          </ul>
        </nav>
      </div>
    </header>
  );
}
