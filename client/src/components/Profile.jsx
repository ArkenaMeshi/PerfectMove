import React from "react";
import icon_home from "../assets/icon_home.png"
import { Link } from "react-router-dom";
import LogOut from "./LogOut";

const Profile=({stateLoged, setStateLoged})=>{

    return(
          
        <div className="profile d-flex w-75 mx-auto">
           
        <div className="col-md-4 list" > 
        {/* <i className="bi bi-person-circle "></i> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
<a href="#" className="link-secondary link-offset-2  link-underline-opacity-0 ms-2">
<LogOut stateLoged={stateLoged} setStateLoged={setStateLoged} />
</a>
        
            <ul className="list-group ms-3 mt-4 ">
                <li><Link   className="link-secondary   link-offset-2 link-underline-opacity-0 col-xs-3 list-group-item border-0 " to={'/profile'} > Dashboard</Link></li>
                <li><a href="#" className="link-secondary  link-offset-2   link-underline-opacity-0 col-xs-3 list-group-item border-0">Favourites</a></li>
            </ul>
        </div>
        <div className="col-md-9">
            <h2>Dashboard</h2>
            <p className="col-md-15">Welcome to your management dashboard.</p>
            <p>
As you use PerfectMove's services your dashboard will serve relevant content here.
You can also use the links on the left to navigate more areas of the site.</p>
<div className="d-flex gap-3 justify-content-center ">
<div className="card mb-3 w-50 mx-0 ">
          <div className="row g-0 align-items-center">
          

            <div className="col-md-">
            <div className="col-md-10 mx-auto p-1">
              <img src={icon_home} className="img-fluid rounded-start" alt="..." />
            </div>
              <div className="card-body text-center">
                <h5 className="card-title ">Search Listings</h5>
                <p className="card-text ">
                Join the PerfectMove revolution today!

                Find properties by location or by commute time
                Just click below to begin the search for your next home.
                </p>
                <Link className="search-button p-2 link-offset-2 link-underline link-underline-opacity-0" to={'/'}> Search Listining</Link>
                
              </div>
            </div>
            
          </div>
        </div>

        <div className="card mb-3 w-50 align-items-center ">
          <div className="row g-0 align-items-center">
          

            <div className="col-md-">
            <div className="col-md-10 mx-auto ">
              <img src={icon_home} className="img-fluid rounded-start" alt="..." />
            </div>
              <div className="card-body text-center">
                <h5 className="card-title ">Ready to complete your property listing?</h5>
                <p className="card-text ">
                Finish adding details to your advert now.
                </p>
                <Link className="search-button p-2 link-offset-2 link-underline link-underline-opacity-0" to={'/create'}>Complete Listing Process</Link>
                
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        
        
       
    )

}

export default Profile 