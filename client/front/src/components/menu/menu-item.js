import React from 'react';


export default function MenuItem(props) {

    return (
        <div className={`col-lg-6 menu-item filter-${props.type}`}>
            <img src={"assets/img/menu/" + props.name + ".png"} className="menu-img" alt="" />
            <div className="menu-content">
                <a>{props.name}</a><span>{props.price + "$"}</span>
            </div>
        </div>
    );

};