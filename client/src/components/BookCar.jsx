import { useEffect, useState } from "react";
import axios from "axios"
function BookCar() {
  const [modal, setModal] = useState(false);
  const [carType, setCarType] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postData, setPostData] = useState([]);
  const [image, setCarImg] = useState([]);
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/BuyMeAll/allcarss")
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
 

 
 

 



  
  
  
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  
  // taking value of booking inputs
  const handleCar = (e) => {
    const selectedCar = postData.find((car) => car.Model === e.target.value);
    setCarType(selectedCar.Model);
    setCarImg(selectedCar.image);
  };

  // const handlePick = (e) => {
  //   setPickUp(e.target.value);
  // };

  // const handleDrop = (e) => {
  //   setDropOff(e.target.value);
  // };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };


  const openModal = () => {
    setModal(true);
  };
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    openModal(); // Open modal manually
  };
  const closeModal = () => {
    setModal(false);
  };

  const confirmBooking = (event) => {
    event.preventDefault();
  
    const formData = {
      pickTime: pickTime,
      dropTime: dropTime,
      first_name: name,
      last_name: lastName,
      phoneNumber: phone,
      email: email,
      address: address, 
      city: city,
      userId:1,
      allcarId:1
    };
  
    axios
      .post("http://localhost:5000/api/BuyMeAll/orders", formData)
      .then((response) => {
        console.log("Order placed successfully:", response.data);
        setName("");
        setLastName("");
        setPhone("");
        setAge("");
        setEmail("");
        setAddress("");
        setCity("");
        setPickTime("");
        setDropTime("");
      })
      .catch((error) => {
        console.error("Error placing order:", error);
      });
  };
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
              <div className="box-form__car-type">
  <label>
    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car Type <b>*</b>
  </label>
  <select value={carType} onChange={handleCar}>
    <option>Select your car type</option>
    {postData.map((data, index) => (
      <option key={index} value={data.Model}>{data.Model}</option>
    ))}
  </select>
</div>

         
                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Pick-up <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Drop-of <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button onClick={handleSearch} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
  {/* title */}
  <div className="booking-modal__title">
    <h2>Complete Reservation</h2>
    <i onClick={openModal} className="fa-solid fa-xmark"></i>
  </div>
  {/* message */}
  <div className="booking-modal__message">
    <h4>
      <i className="fa-solid fa-circle-info"></i> Upon completing this
      reservation enquiry, you will receive:
    </h4>
    <p>
      Your rental voucher to produce on arrival at the rental desk and a
      toll-free customer support number.
    </p>
  </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
           
          </div>
          <div className="booking-modal__car-info__model">
            <h5>
              <span>Car -</span> {carType}
            </h5>
            {image && <img src={image} alt="car_img" />}
          </div>
        </div>
        
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={(event)=>setName((event.target.value))}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={(event)=>setLastName((event.target.value))}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={(event)=>setPhone((event.target.value))}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={(event)=>setAge((event.target.value))}
                  type="number"
                  placeholder="18"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={(event)=>setEmail((event.target.value))}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={(event)=>setAddress(event.target.value)}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={(event)=>setCity(event.target.value)}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

             
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="reserve-button">
        <button onClick={confirmBooking}>Reserve Now</button>
      </div>
      <button onClick={closeModal}>Close</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;
