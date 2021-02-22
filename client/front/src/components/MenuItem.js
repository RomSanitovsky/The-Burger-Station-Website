import React from 'react';
import ReactDOM from 'react-dom';


export default function MenuItem(props){

        return(
            <div className="col-lg-6 menu-item filter-salads">
                                <img src="assets/img/menu/caesar.jpg" className="menu-img" alt="" />
                                <div className="menu-content">
                                    <a href="#">{props.name}</a><span>{props.price}</span>
                                </div>
                            </div>
        );

};