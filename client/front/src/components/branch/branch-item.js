import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useStore } from "../authentication/Login";
export default function BranchItem(props) {
  const { setUserData, userData } = useStore();

  const { id } = props;
  const [cookies] = useCookies();
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/branches/${id}`, {
        headers: {
          Authorization: "Bearer " + cookies.user.token, //the token is a variable which holds the token
        },
      })
      .then((res) => {
        props.setItems(res.data.data);
        console.log("items", props.items);

        // const districts = items.reduce((prev, current) => {
        //   return [...new Set([...prev, current.district])];
        // }, []);
        let arr = props.items.map((item) => item.district);
        props.setDistricts([...new Set(arr)]);
        console.log("delete", res.data.data);
      });
  };
  // props.setDistricts(res.data.data.data);
  return (
    <div className={`col-lg-6 menu-item filter-${props.district}`}>
      <Link to={"/branchview/" + props.id}>
        <img src="assets/img/icons/city-icon.png" className="menu-img" alt="" />
      </Link>
      <div className="menu-content">
        <a>{props.city}</a>
        <span>{props.district}</span>
      </div>
      <div className="menu-ingredients">{props.address}</div>
      {userData.role === "admin" && (
        <div className="menu-ingredients">
          <img
            src="assets/img/icons/delete.png"
            style={{ cursor: "pointer" }}
            onClick={handleDelete}
          />

          <Link to={`/editbranch/${props.id}`}>
            <img src="assets/img/icons/edit.png" />
          </Link>
        </div>
      )}
    </div>
  );
}
