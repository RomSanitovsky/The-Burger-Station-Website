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
    return array.reduce((prev, current) => ({ ...prev, [current._id]: current }), {})
  }


  const findItemName = (itemId) => {
    items.forEach(element => {
      if (element._id === itemId) {
        return element.name;
      }
    });
  }

  if (!items || !data) {
    return (<div>Loading</div>);
  }
  return (
    <div id="branchView">
      <section id="menu" class="menu section-bg">
        <div className="container" data-aos="fade-up">
          <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            {data && (
              <div className="section-title ">
                <h2>Branch </h2>
                <p>St. {data.address}, {data.city}, {data.district}</p>
                {data.itemList.map((item) => (
                  <div>
                    <div className="col-lg-36 menu-item ">
                      <div className="menu-content  row menu-container">
                        <a >{items && items[item]?.name}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="text-center">
          <Link to="/home">
            <div className="php-email-form text-center">
              <button type="submit" className="col-lg-3 col-md-3">
                Back
              </button>
            </div>
          </Link>
        </div>
      </section>

    </div >
  );
}
