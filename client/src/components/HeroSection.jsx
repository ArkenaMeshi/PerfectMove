import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HeroSection = () => {
  const [homes, setHomes] = useState([]);
  const [search, setSearch] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const searchTown = () => {
    axios
      .get("http://localhost:8000/api/search-town", {
        params: {
          search: search,
        },
      })
      .then((res) => {
        console.log(res.data);
        setHomes(res.data);
        setIsOpen(true);
      })
      .catch((err) => console.log(res.data));
  };
  return (
    <div className="hero-section container-fluid position-relative">
      <div className="header container d-flex align-items-center flex-column">
        <h2>
          <em>Renting the way it should be</em>
        </h2>
        <p className="py-2">
          The destination for finding, advertising, and managing rental property
        </p>
        <div className="input-group mb-3 w-50">
          <span className="input-group-text location-radius">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="svg-icons"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </span>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <span className="input-group-text search-radius">
            <button
              type="button"
              className="btn search-button"
              onClick={searchTown}
            >
              Search
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="search-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
        {isOpen && homes && (
          <div className="show-search w-50 bg-white text-dark px-5 py-2">
            {homes.length > 0 &&
              homes.map((home, index) => {
                return (
                  <div className="d-flex">
                    <p className="pe-3">{home.town}</p>
                    <Link to={`/details/${home._id}`}>View Home</Link>
                  </div>
                );
              })}
          </div>
        )}

        {isOpen && homes && homes.length === 0 && (
          <div>
            <p>No homes found!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
