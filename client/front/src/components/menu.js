import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./header";
import TopBar from "./top-bar";
import axios from 'axios';
import MenuItem from './MenuItem'
export default class Menu extends React.Component {

    state = {
        items: []
      }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/items`)
          .then(res => {
            console.log(res);
            const items = res.data.data.data.map(obj => (<MenuItem name={obj.name} price={obj.price} type={obj.type} ></MenuItem>));
            console.log(items);
            this.setState({ items });
          });
    }  

    render(){  
        return (
            <div id="menu">
                <section></section>
                <section id="menu" className="menu section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Menu</h2>
                            <p>For your taste buds</p>
                        </div>
                        <div className="row" data-aos="fade-up" data-aos-delay={100}>
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="menu-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-food">Burgers</li>
                                    <li data-filter=".filter-drink">Drinks</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row menu-container" data-aos="fade-up" data-aos-delay={200}>
                            {this.state.items}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}