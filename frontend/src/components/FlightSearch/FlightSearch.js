import { useState } from "react";
import FoundFlight from "../FoundFlight/FoundFlight";
import styles from "./FlightSearch.module.css";

const FlightSearch = () => {
  const [way, setWay] = useState(true);
  const [srcCity, setSrcCity] = useState("");
  const [srcAirport, setSrcAirport] = useState("");
  const [dstCity, setDstCity] = useState("");
  const [dstAirport, setDstAirport] = useState("");
  const [depDate, setDepDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const srcCityHandler = (event) => {
    setSrcCity(event.target.value);
  };

  const dstCityHandler = (event) => {
    setDstCity(event.target.value);
  };

  const srcAirportHandler = (event) => {
    setSrcAirport(event.target.value);
  };

  const dstAirportHandler = (event) => {
    setDstAirport(event.target.value);
  };

  const depDateHandler = (event) => {
    setDepDate(event.target.value);
  };

  const returnDateHandler = (event) => {
    setReturnDate(event.target.value);
  };

  const wayHandler = (event) => {
    setWay(event.target.value == "One Way");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new URLSearchParams();

    formData.append("src_city", srcCity);
    formData.append("src_airport", srcAirport);
    formData.append("dst_city", dstCity);
    formData.append("dst_airport", dstAirport);
    formData.append("dep_date", depDate);
    formData.append("return_date", returnDate);
    formData.append("isOneWay", way);
  };

  return (
    <div>
      <form className={styles.flightSearch}>
        <h2>Search Flights</h2>
        <div>
          <div>
            <label>From</label>
            <div>
              <input
                type="text"
                placeholder="New York City"
                onChange={srcCityHandler}
              />
              <input
                type="text"
                placeholder="JFK"
                onChange={srcAirportHandler}
              />
            </div>
          </div>
          <div>
            <label>To</label>
            <div>
              <input
                type="text"
                placeholder="Chicago"
                onChange={dstCityHandler}
              />
              <input
                type="text"
                placeholder="O'Hare"
                onChange={dstAirportHandler}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <select onChange={wayHandler}>
              <option>One Way</option>
              <option>Two Way</option>
            </select>
            <label>Departure</label>
            <input type="date" onChange={depDateHandler} />
          </div>
          {!way && (
            <div>
              <label>Return</label>
              <input type="date" onChange={returnDateHandler} />
            </div>
          )}
        </div>
        <button onClick={submitHandler}>Search</button>
      </form>
      <FoundFlight />
    </div>
  );
};

export default FlightSearch;
