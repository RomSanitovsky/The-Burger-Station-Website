import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function EditBranchItem() {
  const history = useHistory();
  const [data, setData] = useState({});
  const [items, setItems] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [multi, setMulty] = useState([]);
  const [cookies] = useCookies();
  const { id } = useParams();

  useEffect(() => {
    setData({ ...data, itemList: multi });
  }, [multi]);
  useEffect(async () => {
    await axios
      .get(`http://localhost:8000/api/branches/${id}`)
      .then((res) => setData(res.data.data.data));
    await axios.get("http://localhost:8000/api/branches").then((res) => {
      let arrDis = res.data.data.data.map((item) => item.district);
      setDistricts([...new Set(arrDis)]);
    });
    await axios.get("http://localhost:8000/api/items").then((res) => {
      setItems(res.data.data.data);
    });
  }, []);

  console.log("data", data.itemList);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (
    //   data.city.length < 1 ||
    //   data.address.length < 1 ||
    //   data.district.length < 1 ||
    //   data.items.length < 1
    // )
    //   return alert("all fields are required");

    // const change = { name: nameInput, price: priceInput, type: typeInput };
    await axios.patch(`http://localhost:8000/api/branches/${id}`, data, {
      headers: {
        Authorization: "Bearer " + cookies.user.token, //the token is a variable which holds the token
      },
    });
    history.push("/home");
  };
  return (
    <div id="book-a-table">
      <section id="book-a-table" className="book-a-table">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Branch</h2>
            <p>Edit branch</p>
          </div>
          <form onSubmit={handleSubmit}>
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
                  autoComplete="off"
                  onChange={(e) => handleChange(e)}
                  value={data.city}
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
                  autoComplete="off"
                  onChange={(e) => handleChange(e)}
                  value={data.address}
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
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your booking request was sent. We will call back or send an
                Email to confirm your reservation. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="col-lg-12 col-md-12">
                Edit
              </button>
              <p></p>
              <Link to="/home">
                <button type="submit" className="col-lg-12 col-md-12">
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
