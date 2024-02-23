import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import "./Login.css"; // Import CSS for component styling

export default function Login(){
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

            <form className="form-container">
              <p className="form-heading">Please login to your account</p>
              <TEInput type="text" label="Username" className="input-field" />
              <TEInput type="password" label="Password" className="input-field" />

              <div className="button-container">
                <TERipple rippleColor="light">
                  <button className="login-button">Log in</button>
                </TERipple>
                <a href="#!" className="forgot-password">Forgot password?</a>
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
