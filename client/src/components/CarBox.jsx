import React, { useState, useEffect } from "react";
import axios from "axios";

function CarBox({ data }) {
  const [carLoad, setCarLoad] = useState(true);

  // Make sure data is not empty
  if (!data) {
    return <div>No car data available</div>;
  }

  const { image, rent_per_day, Model, mark, year, doors,transmission, fuel } = data;

  return (
    <div className="box-cars">
      {/* car */}
      <div className="pick-car">
        {carLoad && <span className="loader"></span>}
        <img
          style={{ display: carLoad ? "none" : "block" }}
          src={image}
          alt="car_img"
          onLoad={() => setCarLoad(false)}
        />
      </div>
      {/* description */}
      <div className="pick-description">
        <div className="pick-description__price">
          <span>${rent_per_day}</span>/ rent per day
        </div>
        <div className="pick-description__table">
          <div className="pick-description__table__col">
            <span>Model</span>
            <span>{Model}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Mark</span>
            <span>{mark}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Year</span>
            <span>{year}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Doors</span>
            <span>{doors}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Transmission</span>
            <span>{transmission}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Fuel</span>
            <span>{fuel}</span>
          </div>
        </div>
        {/* btn cta */}
        <a className="cta-btn" href="#booking-section">
          Reserve Now
        </a>
      </div>
    </div>
  );
}

export default CarBox;
