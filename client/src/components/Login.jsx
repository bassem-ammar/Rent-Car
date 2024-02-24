import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TEInput, TERipple } from "tw-elements-react";
import "./Login.css";
import Cookies from 'js-cookie';
// import { useIdentity } from "react-use-identity";
 function Login() {
  const [userpassword, setUserpassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const { setUser } = useIdentity();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/BuyMeAll/signin", {
        user_phOrEmail: userEmail,
        user_password: userpassword,
      });

      const { tok, id } = response.data;

      if (id && tok) {
        const { tok } = response.data;
        Cookies.set("id",response.data.id);
        Cookies.set("authToken", tok, { expires: 60 * 60 * 24 });
        // setUser(response.data);
        setErrorMessage("");
        setSuccessMessage("signup successful");
      console.log("succes")
      navigate(`/`)
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setErrorMessage("Error during login. Please try again.");
      console.error("Error during login:", error);
    }
  };

  return (
    <section className="container-section">
      <div className="container">
        <div className="content">
          <div className="left-column">
            <div className="logo-container">
              <img
                className="logo"
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                alt="logo"
              />
              <h4 className="sub-heading">We are The Lotus Team</h4>
            </div>

            <form className="form-container" onSubmit={handleSubmit}>
              <p className="form-heading">Please login to your account</p>
              <TEInput
                type="text"
                label="Username"
                className="input-field"
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <TEInput
                type="password"
                label="Password"
                className="input-field"
                onChange={(e) => setUserpassword(e.target.value)}
              />

              <div className="button-container">
                <TERipple rippleColor="light">
                  <button className="login-button">Log in</button>
                </TERipple>
                <a href="#!" className="forgot-password">
                  Forgot password?
                </a>
              </div>
            </form>
          </div>

          <div className="right-column">
            <div className="description-container">
              <h4 className="main-heading">We are more than just a company</h4>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login