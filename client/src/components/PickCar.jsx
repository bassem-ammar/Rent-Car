import React, { useState, useEffect } from "react";
import axios from "axios";
import CarBox from "./CarBox";

function PickCar() {
  const [active, setActive] = useState(null);
  const [colorBtn, setColorBtn] = useState("");
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/BuyMeAll/allcarss")
      .then((response) => {
        setPostData(response.data);
        // Set the first car as active by default
        if(response.data.length > 0) {
          setActive(response.data[0].id);
          setColorBtn(response.data[0].id);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const btnID = (id) => {
    setActive(id);
    setColorBtn(id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <section className="pick-section">
      <div className="container">
        <div className="pick-container">
          <div className="pick-container__title">
            <h3>Vehicle Models</h3>
            <h2>Our rental fleet</h2>
            <p>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div className="pick-container__car-content">
            {/* pick car */}
            <div className="pick-box">
              {postData.map((data, index) => (
                <button
                  key={index}
                  className={`${coloringButton(data.id)}`}
                  onClick={() => btnID(data.id)}
                >
                  {data.Model}
                </button>
              ))}
            </div>

            {postData.map((data) => (
              active === data.id && <CarBox key={data.id} data={data} />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default PickCar;
