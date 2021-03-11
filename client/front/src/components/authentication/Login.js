import React, { Component, useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import create from "zustand";
import { useCookies } from "react-cookie";

export const useStore = create((set) => ({
  userData: {},
  setUserData: (userData) => set({ userData }),
}));

export const Login = () => {
  const [data, setData] = useState({});
  const [cookies, setCookie] = useCookies();

  const history = useHistory();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  // const userData;
  // console.log("logIn");
  const { setUserData, userData } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/Api/users/login", data).then((res) => {
      setCookie("user", res.data, { path: "/" });
      setUserData(res.data.data.user);

      if (res.data.status == "success") return history.push("/home");
    });
  };
  return (
    <div id="book-a-table">
      <section id="book-a-table" className="book-a-table">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Sign In</h2>
            <p>Come to the tasty side</p>
          </div>
          <form
            // action="form/-a-table.php"
            // className="php-email-form"
            onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="col-lg-6 col-md-6 form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  autocomplete="off"
                  onChange={(e) => handleChange(e)}
                />
                <div className="validate" />
              </div>
              <div className="col-lg-6 col-md-6 form-group">
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Your Password"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  autocomplete="off"
                  onChange={(e) => handleChange(e)}
                  type="password"
                />
                <div className="validate" />
              </div>
            </div>
            <div className="mb-3">
              {/* <div className="loading">Loading</div> */}
              <div className="error-message" />
              <div className="sent-message">
                Your booking request was sent. We will call back or send an
                Email to confirm your reservation. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Sign In</button>
            </div>
            <p></p>
            <div className="text-center">
              <Link to="/signup">
                <button type="submit">
                  Want to join to the tasty side? Sign Up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
