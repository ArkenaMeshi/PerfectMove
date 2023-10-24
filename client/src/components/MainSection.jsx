import React, { useState, useEffect } from "react";
import landlord from "../assets/landlord.jpg";
import tenant from "../assets/tenant.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const MainSection = () => {
  const [latestHomes, setLatestHomes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/latest-homes", {
        params: {
          limit: 3,
        },
      })
      .then((res) => {
        console.log(res.data);
        setLatestHomes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="text-center max-w-70%">
        <p className="display-5">
          {" "}
          5.9 million Tenants and Landlords
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="heart-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          PerfectMove
        </p>
      </div>
      <div className="cards">
        <div className="card mb-3 w-50">
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <img
                src={landlord}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 ">
              <div className="card-body">
                <h5 className="card-title text-center">Landlords</h5>
                <p className="card-text">
                  We find you tenants and help with referencing, contracts and
                  more if you need it. PerfectMove gives you the best possible
                  chance of finding your ideal tenant, and you stay in control.
                  <ul>
                    <li>100% Free</li>
                    <li>Advertising Option </li>
                    <li>No Hidden Fees </li>
                    <li>No Renewal Fees </li>
                    <li> No Credit Card to Get Started</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 w-50">
          <div className="row g-0 align-items-center">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-center">Tenants</h5>
                <p className="card-text">
                  On PerfectMove there are never any admin fees. Ever. We take
                  down listings as soon as they are let, so no more ghost
                  adverts. And we'll protect your deposit and rent money.
                  <ul>
                    <li> No Admin Fees</li>
                    <li>No Dead Listings </li>
                    <li>Rent & Deposit Protected </li>
                  </ul>
                  The safer, faster and cheaper way to rent.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={tenant} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>

        <div>
          <h1 className="fw-light text-center">Latest Uploads</h1>
          <div className="d-flex gap-3 justify-content-center ">
            {latestHomes.length > 0 &&
              latestHomes.map((latestHome, index) => {
                return (
                  <div className="card mb-3 w-25 mx-0 " key={index}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <Link to={`/details/${latestHome._id}`}>
                          <img
                            src={latestHome.image}
                            className="img-fluid rounded-start mw-100"
                            alt="..."
                          />
                        </Link>
                      </div>
                      <div className="col-md-10">
                        <div className="card-body text-center">
                          <h5 className="card-title">
                            {latestHome.propertyType}
                          </h5>
                          {/* <p className="card-text">{latestHome.monthlyRent}</p>
                        <p className="card-text">{latestHome.town}</p> */}
                          <p className="card-text">
                            {latestHome.numberOfBedrooms} Bedrooms{" "}
                            {latestHome.propertyType} , Monthly Rent $
                            {latestHome.monthlyRent} {latestHome.town}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="text-center">
          {!latestHomes.rented && (
            <Link
              className="search-button p-2 link-offset-2 link-underline link-underline-opacity-0"
              to={`/list`}
            >
              View More
            </Link>
          )}
          </div>
        </div>
      </div>

      <div className="container-fluid px-0 mt-5 ">
        <footer className="bg-dark text-center text-lg-start text-dark">
          <div className="container p-4 p-3 mb-2 bg-light text-dark">
            <div className="row mt-4">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">See other books</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a
                      href="#!"
                      className="text-dark link-offset-2 link-underline link-underline-opacity-0"
                    >
                      <i className="fas fa-book fa-fw fa-sm me-2"></i>
                      Bestsellers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-dark link-offset-2 link-underline link-underline-opacity-0"
                    >
                      <i className="fas fa-book fa-fw fa-sm me-2"></i>All books
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-dark link-offset-2 link-underline link-underline-opacity-0"
                    >
                      <i className="fas fa-user-edit fa-fw fa-sm me-2"></i>Our
                      authors
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Execution of the contract</h5>

                <ul className="list-unstyled">
                  <li>
                    <a
                      href="#!"
                      className="text-dark link-offset-2 link-underline link-underline-opacity-0"
                    >
                      <i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>
                      Supply
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-dark link-offset-2 link-underline link-underline-opacity-0"
                    >
                      <i className="fas fa-backspace fa-fw fa-sm me-2"></i>
                      Returns
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-dark link-offset-2 link-underline link-underline-opacity-0"
                    >
                      <i className="far fa-file-alt fa-fw fa-sm me-2"></i>
                      Regulations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-dark link-offset-2 link-underline link-underline-opacity-0"
                    >
                      <i className="far fa-file-alt fa-fw fa-sm me-2"></i>
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Publishing house</h5>

                <ul className="list-unstyled">
                  <li>
                    <a
                      href="#!"
                      className="text-dark link-offset-2 link-underline link-underline-opacity-0"
                    >
                      The BookStore
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-dark link-offset-2 link-underline link-underline-opacity-0"
                    >
                      123 Street
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-dark link-offset-2 link-underline link-underline-opacity-0"
                    >
                      05765 NY
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-dark link-offset-2 link-underline link-underline-opacity-0"
                    >
                      <i className="fas fa-briefcase fa-fw fa-sm me-2"></i>Send
                      us a book
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Write to us</h5>

                <ul className="list-unstyled">
                  <li>
                    <a
                      href="#!"
                      className="text-dark link-offset-2 link-underline link-underline-opacity-0"
                    >
                      <i className="fas fa-at fa-fw fa-sm me-2"></i>Help in
                      purchasing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-dark link-offset-2 link-underline link-underline-opacity-0"
                    >
                      <i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>
                      Check the order status
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-dark link-offset-2 link-underline link-underline-opacity-0"
                    >
                      <i className="fas fa-envelope fa-fw fa-sm me-2"></i>Join
                      the newsletter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center p-3 bg-secondary">
            <p className="text-dark">PerfectMove</p>
          </div>
        </footer>
      </div>
    </>
  );
};
export default MainSection;
