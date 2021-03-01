import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';



function SignUp() {
    const [fullName, setFullName] = useState({
        fName: "",
        lName: ""
    });

    const [items, setItems] = useState([]);

    useEffect(async () => {
        if (items.length < 1) {
            const response = await fetch("http://localhost:8000/api/items");
            const data = await response.json();
            setItems(data.data.data)
        }
        else { console.log("else"); console.log(items) }
    }, [items])


    const [branches, setBranches] = useState([]);

    useEffect(async () => {
        if (branches.length < 1) {
            const response = await fetch("http://localhost:8000/api/branches");
            const data = await response.json();
            setBranches(data.data.data)
            console.log(branches)
        }
        else { console.log("else"); console.log(branches) }
    }, [branches])

    //handle the change
    function handleChange(event) {
        const { value, name } = event.target;

        setFullName(prevValue => {
            if (name === "fName") {
                return {
                    fName: value,
                    lName: prevValue.lName
                };
            } else if (name === "lName") {
                return {
                    fName: prevValue.fName,
                    lname: value
                };
            }
        });
    }
    return (

        <div id="book-a-table">
            <section id="book-a-table" className="book-a-table">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Sign Up</h2>
                        <p>Come to the tasty side {fullName.fName}</p>
                    </div>

                    <form action="forms/book-a-table.php" className="php-email-form" >
                        <div className="form-row">
                            <div className="col-lg-12 col-md-12 form-group">
                                <input type="text" name="fName" className="form-control" id="username" onChange={handleChange} value={fullName.fName} placeholder="Your Username" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" autocomplete="off" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group">
                                <input type="text" name="password" className="form-control" id="password" placeholder="Your Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group">
                                <input type="text" name="confirm-password" className="form-control" id="confirm-password" placeholder="Confirm Your Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group">
                                <div className="section-title">
                                    <h2>Choose Your Favorite Burger</h2>
                                </div>
                                <select name="fav-item" className="form-control" id="fav-item" placeholder="Choose Your Favorite Burger" data-rule="minlen:4" autocomplete="off">
                                    <option> {" "}</option>
                                    {items.map(item => { if (item.name.includes("Burger") || item.name.includes("burger")) { return <option>{item.name}</option> } })}
                                </select>
                                <div className="validate" />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group">
                                <div className="section-title">
                                    <h2>Choose Your Favorite Branch</h2>
                                </div>
                                <select name="fav-branch" className="form-control" id="fav-branch" placeholder="Choose Your Favorite Branch" data-rule="minlen:4" autocomplete="off" >
                                    <option> {" "}</option>
                                    {branches.map(item => <option>{item.address} {item.city} {item.district}</option>)}
                                </select>
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Sign Up</button>         <Link to="/">
                            <button type="submit">
                                Back
     </button>
                        </Link></div>


                        <div className="text-center"><Link to="/Signin">
                            <button type="submit">
                                Already have a user? Sign In
     </button>
                        </Link></div>
                    </form>
                </div>
            </section>
        </div>
    );
}
export default SignUp;
