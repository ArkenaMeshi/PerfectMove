import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateHouse = () => {
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
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/home/${id}`)
      .then((res) => {
        console.log(res.data);
        setPropertyType(res.data.propertyType);
        setHouseNumber(res.data.houseNumber);
        setAdressLine(res.data.addressLine);
        setTown(res.data.town);
        setNumberOfBedrooms(res.data.numberOfBedrooms);
        setNumerOfBethrooms(res.data.numberOfBathrooms);
        setFurnishing(res.data.furnishing);
        setMonthlyRent(res.data.monthlyRent);
        setMaxTenants(res.data.maxTenants);
        setTenancyLength(res.data.tenancylength);
        setBillsIncluded(res.data.billsincluded);
        setGardenAccess(res.data.gardenAccess);
        setParking(res.data.parking);
        setFireplace(res.data.fireplace);
        setStudentsAllowed(res.data.studentsAllowed);
        setPetAllowed(res.data.petsAllowed);
        setSmokersAllowed(res.data.smokersAllowed);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateHouse = (e) => {
    e.preventDefault();

    axios
      .patch(`http://localhost:8000/api/home/${id}/edit`, {
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
      }, {withCredentials: true})
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // setValidation({});
        navigate(`/details/${id}`);
      })
      .catch((err) => {
        console.log(err);
        err.response.data.errors
          ? setValidation(err.response.data.errors)
          : console.log(err);
      });
  };
  return (
    <>
      <form onSubmit={updateHouse}>
        <div className="row">
          <h2>Property / Room Details</h2>
          <div className="col">
            <div className="mb-3 ">
              <label htmlFor="propertytype" className="form-label">
                Property Type
              </label>
              <input
              value={propertyType}
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
              value={houseNumber}
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
              value={addressLine}
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
              value={town}
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
              value={numberOfBedrooms}
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
              value={numberOfBathrooms}
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
              value={furnishing}
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
          </div>
        </div>
        <div>
          <h2>Tenancy Details</h2>
          <div className="mb-3">
            <label htmlFor="rent" className="form-label">
              Monthly Rent{" "}
            </label>
            <input
            value={monthlyRent}
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
            value={maxTenants}
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
            value={tenancylength}
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
              checked={gardenAccess}
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
              checked={parking}
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
              checked={billsincluded}
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
              checked={fireplace}
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
            checked={studentsAllowed}
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
            checked={petsAllowed}
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
            checked={smokersAllowed}
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
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateHouse;
