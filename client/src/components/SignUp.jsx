import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import "./SignUp.css"; // Import CSS for component styling

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation and submission logic here
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
              <p className="form-heading">Create your account</p>
              <TEInput
                type="text"
                label="Full Name"
                className="input-field"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
              <TEInput
                type="password"
                label="Confirm Password"
                className="input-field"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
