import Footer from "../components/Footer";
import { useState,useEffect } from "react";
import axios from "axios";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";
import { Link } from "react-router-dom";

function Models() {
  const [refrPo,setRefrPo]=useState(false)
  const [postData,setPostData]=useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/api/BuyMeAll/allcarss")
      .then((response) => {
        const responseData = response.data;
          setPostData(responseData)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [refrPo]);
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">



       
          <div className="models-div">
          {(postData.map((data) =>(
            <div className="models-div__box">

           
              <div className="models-div__box__img">
                <img src={data.image} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <h1>{data.Model}</h1>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>{data.rent_per_day}$</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; {data.Model}
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; {data.transmission}
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
             
            </div>
             )))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
