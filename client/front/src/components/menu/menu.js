import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MenuItem from "./menu-item";
import { useStore } from "../authentication/Login";
import { useCookies } from "react-cookie";
export default function Menu() {
  const [filter, setFilter] = useState([]);
  const [query, setQuery] = useState("");
  const [cookies] = useCookies();
  let role = cookies.user.data.user.role
  const handleChange = (e) => {
    setQuery(e.target.value);
    setFilter(
      items.filter((element) => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      })
    );
  };
  const { setUserData, userData } = useStore();

  const [items, setItems] = useState([]);
  const [types, setTypes] = useState([]);
  const [sortDirection, setSortDirection] = useState(false);

  const handleSort = () => {
    setSortDirection(!sortDirection);
    let arr = [...items];
    if (sortDirection) {
      arr.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    } else {
      arr.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }

        return 0;
      });
    }
    setItems(arr);
    console.log("items", items);
  };
  useEffect(() => {
    axios.get(`http://localhost:8000/api/items`).then((res) => {
      console.log(res);
      setItems(res.data.data.data);
      console.log(items);
      const types = items.reduce((prev, current) => {
        return [...new Set([...prev, current.type])];
      }, []);
      setTypes(types);
    }, []);
  }, []);
  const handleType = (type) => {
    switch (type) {
      case "all":
        axios.get(`http://localhost:8000/api/items`).then((res) => {
          setItems(res.data.data.data);
        });
        break;
      case "food":
        axios.get(`http://localhost:8000/api/items`).then((res) => {
          setItems(res.data.data.data.filter((item) => item.type === "food"));
        });
        break;
      case "drink":
        axios.get(`http://localhost:8000/api/items`).then((res) => {
          setItems(res.data.data.data.filter((item) => item.type === "drink"));
        });
        break;
      default:
        break;
    }
  };
  return (
    <div id="menu">
      <section></section>
      <section id="menu" className="menu section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Menu</h2>
            <p>
              For your taste buds
              <img
                src="assets/img/icons/sort-btn.png"
                alt=""
                style={{ paddingLeft: "40px", cursor: "pointer" }}
                onClick={() => handleSort()}
              />
              {role === "admin" && (
                <Link to="/createitem">
                  <img
                    src="assets/img/icons/plus.png"
                    alt=""
                    style={{ paddingLeft: "40px" }}
                  />
                </Link>
              )}
            </p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li onClick={() => handleType("all")}>All</li>
                <li onClick={() => handleType("drink")}>Drink</li>
                <li onClick={() => handleType("food")}>Food</li>
              </ul>
            </div>
          </div>
          <div
            className="row menu-container"
            data-aos="fade-up"
            data-aos-delay={200}>
            {query && query.length > 0
              ? filter.map((obj) => (
                <MenuItem
                  id={obj._id}
                  name={obj.name}
                  price={obj.price}
                  type={obj.type}
                  setItems={setItems}
                  items={items}
                  setTypes={setTypes}></MenuItem>
              ))
              : items.map((obj) => (
                <MenuItem
                  id={obj._id}
                  name={obj.name}
                  price={obj.price}
                  type={obj.type}
                  setItems={setItems}
                  items={items}
                  setTypes={setTypes}></MenuItem>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
