import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useStore } from "../authentication/Login";
export default function MenuItem(props) {
  const { setUserData, userData } = useStore();

  const { id } = props;
  const [cookies] = useCookies();
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/items/${id}`, {
        headers: {
          Authorization: "Bearer " + cookies.user.token, //the token is a variable which holds the token
        },
      })
      .then((res) => {
        props.setItems(res.data.data);
        console.log(props.items);
        const types = props.items.reduce((prev, current) => {
          return [...new Set([...prev, current.type])];
        }, []);
        props.setTypes(types);
        console.log("delete", res.data.data);
      });
  };
  return (
    <div className={`col-lg-6 menu-item filter-${props.type}`}>
      <img
        src={"assets/img/menu/" + props.name + ".png"}
        className="menu-img"
        alt=""
      />
      <div className="menu-content">
        <a>{props.name}</a>
        <span>{props.price + " $"}</span>
      </div>
      {userData.role === "admin" && (
        <div className="menu-ingredients" style={{ display: "flex" }}>
          <div style={{ cursor: "pointer" }} onClick={handleDelete}>
            <img src="assets/img/icons/delete.png" />
          </div>

          <Link
            to={`/edititem/${props.id}/${props.name}/${props.price}/${props.type}`}>
            <img src="assets/img/icons/edit.png" />
          </Link>
        </div>
      )}
    </div>
  );
}
