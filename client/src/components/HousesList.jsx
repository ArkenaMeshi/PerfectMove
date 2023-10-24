import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HousesList = (props) => {
  const [housesList, setHousesList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/houses")
      .then((res) => {
        console.log(res.data);
        setHousesList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="list align-items-center text-center">
      {housesList.length > 0 &&
        housesList.map((home, index) => {
          return (
            <div className="card mb-3 w-50 " key={index}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={home.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{home.propertyType}</h5>
                    <p className="card-text"> $ {home.monthlyRent}</p>
                    <p className="card-text">{home.town}</p>
                    {!home.rented && (
                      <Link
                        className="search-button p-2 link-offset-2 link-underline link-underline-opacity-0"
                        to={`/details/${home._id}`}
                      >
                        View Details
                      </Link>
                    )}
                    {home.rented && (
                      <div
                        className="d-inline-block cursor-na search-button p-2 link-offset-2 link-underline link-underline-opacity-0"
                      >
                        Unavailable
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default HousesList;
