import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BranchItem from "./branch-item";
import { useCookies } from "react-cookie";
import { useStore } from "../authentication/Login";

export default function Branch() {
  const [cookies] = useCookies(["user"]);
  const [items, setItems] = useState([]);
  const [sortDirection, setSortDirection] = useState(false);
  const [districts, setDistricts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [query, setQuery] = useState("");
  const { userData } = useStore();
  console.log("userData", userData.role);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/branches`).then((res) => {
      setItems(res.data.data.data);
      console.log("items", items);

      // const districts = items.reduce((prev, current) => {
      //   return [...new Set([...prev, current.district])];
      // }, []);
      let arr = items.map((item) => item.district);
      setDistricts([...new Set(arr)]);
    });
  }, []);
  const handleChange = (e) => {
    setQuery(e.target.value);
    // console.log(query);
    setFilter(
      items.filter((element) => {
        return element.city.toLowerCase().includes(query.toLowerCase());
      })
    );

    // console.log(
    //   "filter",
    //   items.filter((element) => {
    //     return (
    //       //   element.name.toLowerCase().includes(query.toLowerCase()) ||
    //       parseInt(element.price) == parseInt(query)
    //     );
    //   })
    // );
  };
  const handleType = (type) => {
    switch (type) {
      case "all":
        axios.get(`http://localhost:8000/api/branches`).then((res) => {
          setItems(res.data.data.data);
        });
        break;
      case "Northern":
        axios.get(`http://localhost:8000/api/branches`).then((res) => {
          setItems(
            res.data.data.data.filter((item) => item.district === "Northern")
          );
        });
        break;
      case "Central":
        axios.get(`http://localhost:8000/api/branches`).then((res) => {
          setItems(
            res.data.data.data.filter((item) => item.district === "Central")
          );
        });
        break;
      case "Southern":
        axios.get(`http://localhost:8000/api/branches`).then((res) => {
          setItems(
            res.data.data.data.filter((item) => item.district === "Southern")
          );
        });
        break;
      default:
        break;
    }
  };
  const handleSort = () => {
    setSortDirection(!sortDirection);
    let arr = [...items];
    if (sortDirection) {
      arr.sort(function (a, b) {
        var cityA = a.city.toUpperCase();
        var cityB = b.city.toUpperCase();
        if (cityA < cityB) {
          return -1;
        }
        if (cityA > cityB) {
          return 1;
        }

        return 0;
      });
    } else {
      arr.sort(function (a, b) {
        var cityA = a.city.toUpperCase();
        var cityB = b.city.toUpperCase();
        if (cityA < cityB) {
          return 1;
        }
        if (cityA > cityB) {
          return -1;
        }

        return 0;
      });
    }
    setItems(arr);
    console.log("items", items);
  };

  return (
    <div id="branch">
      <section></section>
      <section id="menu" className="menu section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Branches</h2>
            <p>
              We can bet that you will never find better
              <img
                src="assets/img/icons/sort-btn.png"
                alt=""
                style={{ paddingLeft: "40px", cursor: "pointer" }}
                onClick={() => handleSort()}
              />
              {userData.role === "admin" && (
                <Link to="/createbranch">
                  <img
                    src="assets/img/icons/plus.png"
                    alt=""
                    style={{ paddingLeft: "40px" }}
                  />
                </Link>
              )}
              {/* <input
                type="text"
                name="searchMenu"
                className="form-control"
                id="searchMenu"
                placeholder="Search"
                onChange={(e) => handleChange(e)}
              /> */}
            </p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li onClick={() => handleType("all")}>All</li>
                <li onClick={() => handleType("Northern")}>Northern</li>
                <li onClick={() => handleType("Central")}>Central</li>
                <li onClick={() => handleType("Southern")}>Southern</li>
              </ul>
            </div>
          </div>
          <div
            className="row menu-container"
            data-aos="fade-up"
            data-aos-delay={200}>
            {query && query.length > 0
              ? filter.map((obj) => (
                <BranchItem
                  id={obj.id}
                  itemList={obj.itemList}
                  city={obj.city}
                  address={obj.address}
                  district={obj.district}
                  setDistricts={setDistricts}
                  setItems={setItems}
                  items={items}></BranchItem>
              ))
              : items.map((obj) => (
                <BranchItem
                  id={obj.id}
                  itemList={obj.itemList}
                  city={obj.city}
                  address={obj.address}
                  district={obj.district}
                  setDistricts={setDistricts}
                  setItems={setItems}
                  items={items}></BranchItem>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
