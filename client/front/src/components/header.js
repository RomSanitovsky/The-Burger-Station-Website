<<<<<<< HEAD


import React, { useEffect, useRef } from "react"
import Menu from './menu';
=======
import { Link, NavLink, Route, Router } from 'react-router-dom';
import Login from './login';
>>>>>>> login-page

export default function Header() {

    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo mr-auto"><Link to="/">Burger Station</Link></h1>
                <nav className="nav-menu d-none d-lg-block">
                    <ul>
<<<<<<< HEAD
                        <li className="active"><a href="index.html">Home</a></li>
                        <li>
                            <a href="#about">About</a>
                        </li>

                        <li className="active" onClick={() => window.location = "#menu"}> Menu</li>



                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#chefs">Chefs</a></li>
                        <li><a href="#branches">Branches</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li className="book-a-table text-center"><a href="#book-a-table">Book a table</a></li>
=======
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/login/">Login</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to ="#gallery">Gallery</Link></li>
                        <li><Link to="#chefs">Chefs</Link></li>
                        <li><Link to="/branches">Branches</Link></li>
                        <li><Link to="#contact">Contact</Link></li>
                        <li className="book-a-table text-center"><Link to="#book-a-table">Book a table</Link></li>
>>>>>>> login-page
                    </ul>
                </nav>
            </div>
        </header>

    );

}