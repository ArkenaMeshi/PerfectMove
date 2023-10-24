import React from "react";
import icon_home from "../assets/icon_home.png";
import { Link } from "react-router-dom";
import tenant_icon from "../assets/tenant_icon.png";

const About = () => {
  return (
    <>
      <div className="about_image position-relative"></div>

      {/* <img src={about_image} className=" about_image img-fluid rounded-start" alt="..." /> */}

      <div className="w-75 mx-auto"> 
      <div className="text-about text-align-center p-3 mx-auto">
        <h3>Built for Landlords & Tenants</h3>
        <p>
          Whether you’re a landlord or a tenant, OpenRent brings renting into
          the 21st century. It’s goodbye to tenant fees, dead listings and
          landlords paying 10% fees to find new tenants. Renting will never be
          the same again.
        </p>
      </div>
      <div className="about d-flex ">
        <div className="card my-3 mb-3 align-items-center ">
          <div className="row g-0 align-items-center">
            <div className="col">
              <div className="col-md-4 mx-auto p-2">
                <img
                  src={tenant_icon}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Tenants</h5>
                <p className="card-text text-center">
                  We want everyone to be able to find their dream home on
                  PerfectMove. What is more, we want you to feel safe and in control
                  while you find it. We led the way on banning tenant fees, and
                  still provide the best experience for tenants. No more ghost
                  adverts, pushy agents or annoying trips to the agent's office.
                  We make it easy to find your perfect landlord, with filters
                  for DSS, pets, students, and other groups often overlooked by
                  the market. Finding a new home is easier than ever, no matter
                  what you need.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card ms-3 my-3 align-items-center">
          <div className="row g-0 align-items-center">
            <div className="col">
              <div className="col-md-4 mx-auto p-2">
                <img
                  src={icon_home}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Landlords</h5>
                <p className="card-text text-center">
                  You want renting out your property or room to be cheap,
                  painless and risk-free. So did we, and in 2012 we fixed it. We
                  now let more properties than anyone else in the UK. Our prices
                  are totally transparent. Starting from a totally free service,
                  ranging up to a £69 service for our full tenant-find package
                  which includes advertising on Rightmove, Zoopla, and other
                  major property portals. We will support you all the way from
                  creating your advert, finding the right tenant, and everything
                  involved in creating a tenancy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default About;
