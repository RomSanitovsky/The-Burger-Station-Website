import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useHistory, Link } from "react-router-dom";
import SignOut from "../authentication/SignOut";
export default function EditUser() {
  const [cookies] = useCookies(["user"]);
  const history = useHistory();

  const { id } = useParams();
  console.log("id", id);
  console.log("token", cookies.user.token);
  const [userData, setUserData] = useState({});
  const [data, setData] = useState({});
  useEffect(() => {
    console.log("as");
    axios
      .get(`http://localhost:8000/api/users/me/${id}`, {
        headers: {
          Authorization: "Bearer " + cookies.user.token, //the token is a variable which holds the token
        },
      })
      .then((res) => setUserData(res.data.data.data));
  }, []);

  // console.log("userData", userData);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log("data", data);
    e.preventDefault();

    axios.patch(`http://localhost:8000/api/users/updateMe/${id}`, data, {
      headers: {
        Authorization: "Bearer " + cookies.user.token, //the token is a variable which holds the token
      },
    });
    history.push("/home");
  };
  const [branches, setBranches] = useState([]);

  useEffect(async () => {
    if (branches.length < 1) {
      const response = await fetch("http://localhost:8000/api/branches");
      const data = await response.json();
      setBranches(data.data.data);
      // console.log(branches);
    } else {
      console.log("else");
      console.log(branches);
    }
  }, [branches]);
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
  return (
    <div id="book-a-table">
      <section id="book-a-table" className="book-a-table">
        <div className="container" data-aos="fade-up">
          <div className="php-email-form text-right">
            {/* <div>
              <p>
                <SignOut />
              </p>
            </div> */}
          </div>
          <div className="section-title">
            <h2>User</h2>
            <p>Edit user info</p>
          </div>
          <form
            // action="forms/book-a-table.php"
            autoComplete="off"
            // className="php-email-form"
            onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="col-lg-12 col-md-12 form-group">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  placeholder="Your Username"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  //   autocomplete="off"
                  defaultValue={userData.username}
                  onChange={(e) => handleChange(e)}
                />
                <div className="validate" />
              </div>
              <div className="col-lg-12 col-md-12 form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                  //   autocomplete="off"
                  defaultValue={userData.email}
                  onChange={(e) => handleChange(e)}
                />
                <div className="validate" />
              </div>
              {/* <div className="col-lg-12 col-md-12 form-group">
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Your Password"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                //   autocomplete="off"
                  defaultValue={userData.email}
                  onChange={(e) => handleChange(e)}
                />
                <div className="validate" />
              </div> */}
              {/* <div className="col-lg-12 col-md-12 form-group">
                <input
                  type="text"
                  name="confirm-password"
                  className="form-control"
                  id="confirm-password"
                  placeholder="Confirm Your Password"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                //   autocomplete="off"
                  onChange={(e) => handleChange(e)}
                />
                <div className="validate" />
              </div> */}
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
                  value={userData.favItem}
                  className="form-control"
                  id="fav-item"
                  placeholder="Choose Your Favorite Burger"
                  data-rule="minlen:4"
                  autocomplete="off">
                  <option> </option>
                  {items.map((item) => {
                    if (
                      item.name.includes("Burger") ||
                      item.name.includes("burger")
                    ) {
                      return <option>{item.name}</option>;
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
                  value={userData.favBranch}
                  className="form-control"
                  id="fav-branch"
                  placeholder="Choose Your Favorite Branch"
                  data-rule="minlen:4"
                  autocomplete="off">
                  <option> </option>
                  {branches.map((item) => (
                    <option>
                      {item.address} {item.city} {item.district}
                    </option>
                  ))}
                </select>
                <div className="validate" />
              </div>
            </div>

            <div className="php-email-form text-center">
              <button type="submit" className="col-lg-6 col-md-6">
                Edit
              </button>
              <p></p>
            </div>
            <p></p>
            <div className="text-center">
              <Link to="/home">
                <div className="php-email-form">
                  <button type="submit" className="col-lg-6 col-md-6">
                    Back
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
