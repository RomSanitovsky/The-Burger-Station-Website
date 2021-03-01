import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BranchItem from './branch-item';
export default class Branch extends React.Component {


  state = {
    items: [],
    districts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/branches`)
      .then(res => {
        console.log(res);
        const items = res.data.data.data;
        console.log(items);
        const districts = items.reduce((prev, current) => {
          return [...new Set([...prev, current.district])]
        }, []);

        this.setState({ items, districts });
      });
  }

  render() {
    return (
      <div id="branch">
        <section></section>
        <section id="menu" className="menu section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Branches</h2>
              <p>We can bet that you will never find better
                <img src="assets/img/icons/sort-btn.png" alt="" />
                <Link to="/createbranch">
                  <img src="assets/img/icons/plus.png" alt="" />
                </Link>
              </p>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay={100}>
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="menu-flters">
                  <li data-filter="*" className="filter-active">
                    All
                </li>
                  {this.state.districts.map(district =>
                    <li data-filter={`.filter-${district}`}>{district}</li>)}
                </ul>
              </div>
            </div>
            <div
              className="row menu-container"
              data-aos="fade-up"
              data-aos-delay={200}>
              {this.state.items.map(obj => (<BranchItem city={obj.city} address={obj.address} district={obj.district} ></BranchItem>))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
