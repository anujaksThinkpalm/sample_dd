import React from "react";
import brandLogo from '../images/brand-logo.png'

const login = () => {
  return (
    <div>
      <div className="wrapper login-wrap">
        <div className="caption">
          <h1>Fast and secure Drydocking Solution</h1>
          <h4>
            Lorem Ipsum has been the industry's when an unknown printer took a
            galley of standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type ...
            You've visited this page many times.
          </h4>

          <button className="primary-btn xlarge col-4  my-3">View Tour</button>
        </div>
        <div className="card login-card">
          <div className="brand-logo mb-5">
            <a href="">
              <img src={brandLogo} alt="" className="" />
            </a>
          </div>

          <h4 className="main-head mt-5">Hello! Welcome back.</h4>
          <p className="mb-5 mt-2">
            Login with your data that will populated during your registration
          </p>

          <div className="mb-5 d-flex flex-column">
            <label for="" className="mb-1">
              Username
            </label>
            <input type="text" className="text-box xlarge" />
          </div>

          <div className="mb-5 d-flex flex-column">
            <label for="" className="mb-1">
              Password
            </label>
            <input type="password" className="text-box xlarge" />
          </div>

          <div className="d-flex justify-content-end">
            Forgot your{" "}
            <a href="" className="link-btn">
              {" "}
              password?
            </a>
          </div>
          <button
            className="primary-btn xlarge full-width my-3"
            onclick="location.href='projects.html'"
          >
            Login
          </button>
        </div>
      </div>

      <div className="footer">
        <div className="container">© 2021 Thinkpalm. All rights reserved.</div>
      </div>
    </div>
  );
};
export default login;
