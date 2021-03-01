

import React from "react"
import { Link } from 'react-router-dom';
export default function Header() {

    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo mr-auto"><a href="index.html">Burger Station</a></h1>
                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#why-us">Why Us?</a></li>
                        <li><a href="#branches">Branches</a></li>
                        <li><a href="#book-a-table">Book a Table</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#chefs">Staff</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li className="book-a-table text-center"><Link to="/Signup">Sign Up</Link></li>
                    </ul>
                </nav>
            </div>
        </header>

    );

}