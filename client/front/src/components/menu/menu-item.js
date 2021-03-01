import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuItem(props) {

    return (
        <div className={`col-lg-6 menu-item filter-${props.type}`}>
            <img src={"assets/img/menu/" + props.name + ".png"} className="menu-img" alt="" />
            <div className="menu-content">
                <a>{props.name}</a><span>{props.price + " $"}</span>
            </div>
            <div className="menu-ingredients">
                <Link to="/deleteitem">
                    <img src="assets/img/icons/delete.png" />
                </Link>
                <Link to={`/edititem/${props.id}/${props.name}/${props.price}/${props.type}`}>
                    <img src="assets/img/icons/edit.png" />
                </Link>
            </div>
        </div>
    );

};