import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import Cookies to handle setting the authentication token

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post('http://localhost:3000/api/BuyMeAll/signup', {
        first_name: firstName,
        last_name: lastName,
        user_password: password,
        user_phOrEmail: email
      });
      console.log(response);
      const { user_phOrEmail, first_name, tok } = response.data;

      if (user_phOrEmail && first_name && tok) {
        Cookies.set('authToken', tok, { expires: 7 }); 
        // Assuming you have a function or state handling for setUser
        // setUser(response.data);
        
        setSuccessMessage('Registration successful');
        setErrorMessage('');
        alert("Sign up successful!");
        // Assuming you have imported useNavigate from 'react-router-dom'
        // navigate(`/`)
      } else {
        setSuccessMessage('');
        setErrorMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error during registration. Please try again.');
      console.error('Error during registration:', error);
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
              <h4 className="sub-heading">Join The Lotus Team</h4>
            </div>

            <form className="form-container" onSubmit={handleSubmit}>
              <TEInput
                type="text"
                label="First Name"
                className="input-field"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TEInput
                type="text"
                label="Last Name"
                className="input-field"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TEInput
                type="email"
                label="Email Address"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TEInput
                type="password"
                label="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="button-container">
                <TERipple rippleColor="light">
                  <button type="submit" className="signup-button">
                    Sign Up
                  </button>
                </TERipple>
              </div>
            </form>
          </div>

          <div className="right-column">
            <div className="description-container">
              <h4 className="main-heading">Why join us?</h4>
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
