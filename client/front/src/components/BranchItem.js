import React from 'react';
import ReactDOM from 'react-dom';


export default function BranchItem(props){


        return(
            <div className={`col-lg-6 menu-item filter-${props.district}`}>
                <img
                  src="assets/img/menu/lobster-bisque.jpg"
                  className="menu-img"
                  alt=""
                />
                <div className="menu-content">
                  <a href="#">{props.city}</a>
                  <span>{props.district}</span>
                </div>
                <div className="menu-ingredients">
                  {props.address}
              </div>
              </div>
        );

};