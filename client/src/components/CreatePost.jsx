import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import add_home from "../assets/add_home.jpg";

const CreatePost = () => {
  const [propertyType, setPropertyType] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [addressLine, setAdressLine] = useState("");
  const [town, setTown] = useState("");
  const [numberOfBedrooms, setNumberOfBedrooms] = useState("");
  const [numberOfBathrooms, setNumerOfBethrooms] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [maxTenants, setMaxTenants] = useState("");
  const [tenancylength, setTenancyLength] = useState("");
  const [billsincluded, setBillsIncluded] = useState(false);
  const [gardenAccess, setGardenAccess] = useState(false);
  const [parking, setParking] = useState(false);
  const [fireplace, setFireplace] = useState(false);
  const [studentsAllowed, setStudentsAllowed] = useState(false);
  const [petsAllowed, setPetAllowed] = useState(false);
  const [smokersAllowed, setSmokersAllowed] = useState(false);
  const navigate = useNavigate();
  const [val, setValidation] = useState({});
  const [image, setImage] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8000/api/home",
        {
          propertyType,
          houseNumber,
          addressLine,
          town,
          numberOfBedrooms,
          numberOfBathrooms,
          furnishing,
          monthlyRent,
          maxTenants,
          tenancylength,
          gardenAccess,
          parking,
          fireplace,
          studentsAllowed,
          petsAllowed,
          smokersAllowed,
          billsincluded,
          image,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // setValidation({})
        navigate("/list");
      })
      .catch((err) => {
        console.log(err);
        err.response.data.errors
          ? setValidation(err.response.data.errors)
          : console.log(err);
      });
  };

  return (
    <div className="w-50 mx-auto d-flex">
      <form onSubmit={onSubmitHandler}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={add_home}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  We've made creating a listing super easy.
                </h5>
                <p className="card-text">
                  Simply provide us with your property or room details, and
                  we'll make sure potential tenants know your place is
                  available. We will put potential tenants in touch with you -
                  you handle the viewings. If you want us to we can also
                  reference your tenants, put together the contract and handle
                  the deposit. We're here every step of the way, to make letting
                  your property as straight forward as possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <h2>Property / Room Details</h2>
          <div className="col">
            <div className="mb-3 ">
              <label htmlFor="propertytype" className="form-label">
                Property Type
              </label>
              <input
                onChange={(e) => setPropertyType(e.target.value)}
                type="text"
                className="form-control"
              />
              {val.propertyType ? (
                <p className="text-danger">{val.propertyType.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="housenumber" className="form-label">
                House Number
              </label>
              <input
                onChange={(e) => setHouseNumber(e.target.value)}
                type="text"
                className="form-control"
              />
              {val.houseNumber ? (
                <p className="text-danger">{val.houseNumber.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="addressline" className="form-label">
                Address Line{" "}
              </label>
              <input
                onChange={(e) => setAdressLine(e.target.value)}
                type="text"
                className="form-control"
              />
              {val.addressLine ? (
                <p className="text-danger">{val.addressLine.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="town" className="form-label">
                Town{" "}
              </label>
              <input
                onChange={(e) => setTown(e.target.value)}
                type="text"
                className="form-control"
              />
              {val.town ? (
                <p className="text-danger">{val.town.message}</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="bedrooms" className="form-label">
                Number Of Bedrooms{" "}
              </label>
              <input
                onChange={(e) => setNumberOfBedrooms(e.target.value)}
                type="number"
                className="form-control"
              />
              {val.numberOfBedrooms ? (
                <p className="text-danger">{val.numberOfBedrooms.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="bathrooms" className="form-label">
                Number of Bathrooms{" "}
              </label>
              <input
                onChange={(e) => setNumerOfBethrooms(e.target.value)}
                type="number"
                className="form-control"
              />
              {val.numberOfBathrooms ? (
                <p className="text-danger">{val.numberOfBathrooms.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label>Furnishing Options</label>
              <select
                onChange={(e) => setFurnishing(e.target.value)}
                className="form-select"
                aria-label=" select example"
              >
                <option defaultValue="">Select</option>
                <option value="Furnished">Furnished</option>
                <option value="Unfurnished">UnFurnished</option>
              </select>
              {val.furnishing ? (
                <p className="text-danger">{val.furnishing.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="imge" className="form-label">
                Image Url{" "}
              </label>
              <input
                onChange={(e) => setImage(e.target.value)}
                type="text"
                className="form-control"
              />
              {val.image ? (
                <p className="text-danger">{val.image.message}</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div>
          <h2>Tenancy Details</h2>
          <div className="mb-3">
            <label htmlFor="rent" className="form-label">
              Monthly Rent{" "}
            </label>
            <input
              onChange={(e) => setMonthlyRent(e.target.value)}
              type="number"
              className="form-control"
            />
            {val.monthlyRent ? (
              <p className="text-danger">{val.monthlyRent.message}</p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="maxtenants" className="form-label">
              Max Tenants{" "}
            </label>
            <input
              onChange={(e) => setMaxTenants(e.target.value)}
              type="number"
              className="form-control"
            />
            {val.maxTenants ? (
              <p className="text-danger">{val.maxTenants.message}</p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="tenancylength" className="form-label">
              Tenany Length{" "}
            </label>
            <input
              onChange={(e) => setTenancyLength(e.target.value)}
              type="text"
              className="form-control"
            />
            {val.tenancylength ? (
              <p className="text-danger">{val.tenancylength.message}</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row">
          <h2>Features</h2>
          <div className="col">
            <div className="mb-3">
              <input
                onChange={(e) => setGardenAccess(e.target.checked)}
                className="form-check-input"
                type="checkbox"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Garden Access
              </label>
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setParking(e.target.checked)}
                className="form-check-input"
                type="checkbox"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Parking
              </label>
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <input
                onChange={(e) => setBillsIncluded(e.target.checked)}
                className="form-check-input"
                type="checkbox"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Bills Included
              </label>
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setFireplace(e.target.checked)}
                className="form-check-input"
                type="checkbox"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                FirePlace
              </label>
            </div>
          </div>
          <h2>Tenant Preferences</h2>
          <div className="mb-3">
            <input
              onChange={(e) => setStudentsAllowed(e.target.checked)}
              className="form-check-input"
              type="checkbox"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Students Allowed
            </label>
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setPetAllowed(e.target.checked)}
              className="form-check-input"
              type="checkbox"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Pets Allowed
            </label>
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setSmokersAllowed(e.target.checked)}
              className="form-check-input"
              type="checkbox"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Smokers Allowed
            </label>
          </div>
        </div>

        <button type="submit" className="btn search-button">
          Submit
        </button>
      </form>
    </div>
  );
};
export default CreatePost;
