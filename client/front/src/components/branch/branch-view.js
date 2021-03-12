import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

export default function BranchView() {
  const [data, setData] = useState();
  const [items, setItems] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/branches/${id}`)
      .then((res) => setData(res.data.data.data));

    axios.get("http://localhost:8000/api/items")
      .then((res) => setItems(fromArrayToObj(res.data.data.data)));

  }, []);

  const fromArrayToObj = (array) => {
    return array.reduce((prev,current)=>({...prev, [current._id]:current}),{})
  }


  const findItemName = (itemId) => {
    items.forEach(element => {
      //console.log('findItemFunc:');
      if (element._id === itemId) {
        return element.name;
      }
    });
  }

  // const findItem = (item) => {
  //   axios
  //     .get(`http://localhost:8000/api/items/${item}`)
  //     .then((res) => setItems(res.data.data.data.data.name));
  // };

  if( !items|| !data ){
    return (<div>Loading</div>);
  }
  return (
    <div id="branchView">
      <section id="branchView" className="branchView section-bg book-a-table">
        <div className="container" data-aos="fade-up">
          <div>
            {data && (
              <div className="section-title">
                <h2>Branch </h2>
                <div>{data.city}</div>
                <div>{data.address}</div>
                <div>{data.district}</div>
                {data.itemList.map((item) => (
                  <div>{items && items[item]?.name}</div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="text-center">
          <Link to="/home">
            <div className="php-email-form text-center">
              <button type="submit" className="col-lg-6 col-md-6">
                Back
              </button>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
