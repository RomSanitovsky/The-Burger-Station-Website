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
      .then((res) => setItems(res.data.data.data));

  }, []);

  
  const findItemName = (itemId) => {
    items.forEach(element => {
      //console.log('findItemFunc:');
      if (element._id === itemId){
        return element.name;
      }
    });
  }

    // const findItem = (item) => {
    //   axios
    //     .get(`http://localhost:8000/api/items/${item}`)
    //     .then((res) => setItems(res.data.data.data.data.name));
    // };

  console.log("data", data);
  return (
    <div id="branchView">
      <section id="branchView" className="branchView section-bg">
        <div className="container" data-aos="fade-up">
          <div>
            {data && (
              <div className="section-title">
                <h2>Branch </h2>
                <div>{data.city}</div>
                <div>{data.address}</div>
                <div>{data.district}</div>
                {data.itemList.map((item) => (
                  <div>{(item)}</div>
                ))}
              </div>
            )}
          </div>
        </div>
        <Link to="/home">
                <button type="submit" className="col-lg-12 col-md-12">
                  Back
                </button>
              </Link>
      </section>
      
    </div>
  );
}
