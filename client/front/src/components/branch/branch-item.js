import React from 'react';

export default function BranchItem(props) {

  return (
    <div className={`col-lg-6 menu-item filter-${props.district}`}>
      <img
        src="assets/img/city-icon.png"
        className="menu-img"
        alt=""
      />
      <div className="menu-content">
        <a>{props.city}</a>
        <span>{props.district}</span>
      </div>
      <div className="menu-ingredients">
        {props.address}
      </div>
    </div>
  );

};