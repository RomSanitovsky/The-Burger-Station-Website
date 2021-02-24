import React from 'react';
import axios from 'axios';
import MenuItem from './menu-item'
export default class Menu extends React.Component {

    state = {
        items: [],
        types: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/items`)
            .then(res => {
                console.log(res);
                const items = res.data.data.data;
                console.log(items);
                const types = items.reduce((prev, current) => {
                    return [...new Set([...prev, current.type])]
                }, []);

                this.setState({ items, types });
            });
    }

    render() {
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
                                    {this.state.types.map(type =>
                                        <li data-filter={`.filter-${type}`}>{type}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="row menu-container" data-aos="fade-up" data-aos-delay={200}>
                            {this.state.items.map(obj => (<MenuItem name={obj.name} price={obj.price} type={obj.type} ></MenuItem>))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}