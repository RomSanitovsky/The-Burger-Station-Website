import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Swal from 'sweetalert2';

export default function CreateBranchItem() {
  const [data, setData] = useState({});
  const [districts, setDistricts] = useState([]);
  const [items, setItems] = useState([]);
  const [multi, setMulty] = useState([]);
  const [cookies] = useCookies(["user"]);
  const history = useHistory();
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value });
    console.log("data", data);
  };
  useEffect(() => {
    setData({ ...data, itemList: multi });
  }, [multi]);
  console.log(multi, "multy");
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/branches", data, {
        headers: {
          Authorization: "Bearer " + cookies.user.token, //the token is a variable which holds the token
        },
      })
      .then((res) => {
        if (res.data.status === "success") return history.push("/home");
      }).catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message,
        })
      })
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/branches").then((res) => {
      let arrDis = res.data.data.data.map((item) => item.district);
      setDistricts([...new Set(arrDis)]);
    });
    axios.get("http://localhost:8000/api/items").then((res) => {
      setItems(res.data.data.data);
    });
  }, []);

  return (
    <div id="book-a-table">
      <section id="book-a-table" className="book-a-table">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Branch</h2>
            <p>Create branch</p>
          </div>
          <form
            onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="col-lg-12 col-md-12 form-group">
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  id="city"
                  placeholder="City"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  autocomplete="off"
                  onChange={(e) => handleChange(e)}
                />
                <div className="validate" />
              </div>
              <div className="col-lg-12 col-md-12 form-group">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  id="address"
                  placeholder="Address"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  autocomplete="off"
                  onChange={(e) => handleChange(e)}
                />
                <div className="validate" />
              </div>
              <div className="col-lg-12 col-md-12 form-group">
                <div className="section-title">
                  <h2>Choose District</h2>
                </div>
                <select
                  name="district"
                  className="form-control"
                  id="district"
                  placeholder="Choose District"
                  data-rule="minlen:4"
                  autocomplete="off"
                  onChange={(e) => handleChange(e)}>
                  <option value="" disabled selected hidden>Please Choose Branch's District ...</option>
                  {districts.map((district, i) => (
                    <option key={i}> {district}</option>
                  ))}
                </select>
                <div className="validate" />
              </div>
              <div className="col-lg-12 col-md-12 form-group">
                <div className="section-title">
                  <h2>Choose Items For The Branch</h2>
                </div>
                <select
                  multiple
                  name="itemList"
                  className="form-select"
                  id="itemList"
                  placeholder="Choose Items For The Branch"
                  data-rule="minlen:4"
                  autocomplete="off">
                  {items.map((item, i) => (
                    <option
                      key={i}
                      onClick={() => setMulty([...multi, item._id])}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <div className="validate" />
              </div>
            </div>
            <div className="text-center">
              <div className="php-email-form text-center">
                <button type="submit" className="col-lg-6 col-md-6">
                  Create
                </button>
              </div>
              <p> </p>
              <Link to="/home">
                <div className="php-email-form text-center">
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
