import React from "react";
import Products from '../Products/index'
import logo from '../../assets/bg.png'
export default function Home() {
  return (
    <div>
      <div className="card text-bg-dark border-0 home-margin-top">
        <img src={logo} className="card-img" alt="Background"
        height='550px'
        />
        <div className="card-img-overlay d-flex justify-content-end flex-column">
            <div className="container text-center">
          <h5 className="card-title display-3 fw-bold mb-0 text-secondary ">NEW SEASON</h5>
          <p className="card-text  text-secondary fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}
