import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

function SignUp() {
  const history = useHistory();
  // const [username, setUsername] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [passwordConfirm, setPasswordConfirm] = useState();
  // const [favItem, setFavItem] = useState();
  // const [favBranch, setFavBranch] = useState();
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (user.username == null || user.email == null || user.password == null)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Enter correct Email and at least 8 digit Password!',
    })

    // const newUser = {

    //   username,
    //   email,
    //   password,
    //   passwordConfirm,
    //   favItem,
    //   favBranch,
    // };
    console.log("new", user);
    await axios
      .post("http://localhost:8000/api/users/signup", user)

      .then((res) => console.log(res));
    history.push("/");
  };

  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  const [items, setItems] = useState([]);

  useEffect(async () => {
    if (items.length < 1) {
      const response = await fetch("http://localhost:8000/api/items");
      const data = await response.json();
      setItems(data.data.data);
    } else {
      console.log("else");
      console.log(items);
    }
  }, [items]);

  const [branches, setBranches] = useState([]);

  useEffect(async () => {
    if (branches.length < 1) {
      const response = await fetch("http://localhost:8000/api/branches");
      const data = await response.json();
      setBranches(data.data.data);
      console.log(branches);
    } else {
      console.log("else");
      console.log(branches);
    }
  }, [branches]);

  return (
    <div id="book-a-table">
      <section id="book-a-table" className="book-a-table">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Sign Up</h2>
            <p>Come to the tasty side</p>
          </div>

          <form
            onSubmit={handleSubmit}
          // action="forms/book-a-table.php"
          // className="form-control"
          >
            <div className="form-row">
              <div className="col-lg-12 col-md-12 form-group">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  // onChange={({ target: { value } }) => setUsername(value)}
                  value={user.username}
                  placeholder="Your Username"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  autocomplete="off"
                  onChange={(e) => handleChange(e)}
                />
                <div className="validate" />
              </div>
              <div className="col-lg-12 col-md-12 form-group">
                <input
                  type="email"
                  // onChange={({ target: { value } }) => setEmail(value)}
                  value={user.email}
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                  autocomplete="off"
                  onChange={(e) => handleChange(e)}
                />
                <div className="validate" />
              </div>
              <div className="col-lg-12 col-md-12 form-group">
                <input
                  type="password"
                  // onChange={({ target: { value } }) => setPassword(value)}
                  value={user.password}
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Your Password"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  autocomplete="off"
                  onChange={(e) => handleChange(e)}
                />
                <div className="validate" />
              </div>
              <div className="col-lg-12 col-md-12 form-group">
                <input
                  type="password"
                  // onChange={({ target: { value } }) =>
                  //   setPasswordConfirm(value)
                  // }
                  value={user.passwordConfirm}
                  name="passwordConfirm"
                  className="form-control"
                  id="confirm-password"
                  placeholder="Confirm Your Password"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  autocomplete="off"
                  onChange={(e) => handleChange(e)}
                />
                <div className="validate" />
              </div>
              <div className="col-lg-12 col-md-12 form-group">
                <div className="section-title">
                  <h2>Choose Your Favorite Burger</h2>
                </div>
                <select
                  name="favItem"
                  // onChange={({ target: { value } }) =>
                  //   value !== "" && setFavItem(value)
                  // }
                  onChange={(e) => handleChange(e)}
                  value={user.favItem}
                  className="form-control"
                  id="fav-item"
                  placeholder="Choose Your Favorite Burger"
                  data-rule="minlen:4"
                  autocomplete="off">
                  <option value="" disabled selected hidden>Please Choose Your Favorite Burger...</option>
                  {items.map((item) => {
                    if (
                      item.name.includes("Burger") ||
                      item.name.includes("burger")
                    ) {
                      return <option value={item._id}>{item.name}</option>;
                    }
                  })}
                </select>
                <div className="validate" />
              </div>
              <div className="col-lg-12 col-md-12 form-group">
                <div className="section-title">
                  <h2>Choose Your Favorite Branch</h2>
                </div>
                <select
                  name="favBranch"
                  // onChange={({ target: { value } }) =>
                  //   value !== "" && setFavBranch(value)
                  // }
                  onChange={(e) => handleChange(e)}
                  value={user.favBranch}
                  className="form-control"
                  id="fav-branch"
                  placeholder="Choose Your Favorite Branch"
                  data-rule="minlen:4"
                  autocomplete="off">
                  <option value="" disabled selected hidden>Please Choose Your Favorite Branch...</option>
                  {branches.map((item) => (
                    <option value={item._id}>
                      {item.address} {item.city} {item.district}
                    </option>
                  ))}
                </select>
                <div className="validate" />
              </div>
            </div>
            <div className="text-center">
              {/* <Link to="/"> */}
              <div className="php-email-form text-center">
                <button type="submit" className="col-lg-6 col-md-6">
                  Sign Up
                </button>
              </div>
              {/* </Link> */}
            </div>
            <br></br>
            <div className="text-center">
              <Link to="/">
                <div className="php-email-form text-center">
                  <button type="submit" className="col-lg-6 col-md-6">
                    Are You Already a Burger-Station Member? Sign In
                  </button>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
export default SignUp;
