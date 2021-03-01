import React from 'react';
import { Link } from 'react-router-dom';

export default function BranchItem(props) {

  return (
    <div className={`col-lg-6 menu-item filter-${props.district}`}>
      <Link to={"/branch/" + props.id}><img src="assets/img/icons/city-icon.png" className="menu-img" alt="" /></Link>
      <div className="menu-content">
        <a>{props.city}</a>
        <span>{props.district}</span>
      </div>
      <div className="menu-ingredients">
        {props.address}
      </div>
      <div className="menu-ingredients">
        <Link to="/deletebranch">
          <img src="assets/img/icons/delete.png" />
        </Link>
        <Link to="/editbranch">
          <img src="assets/img/icons/edit.png" />
        </Link>
      </div>
    </div>
  );

};