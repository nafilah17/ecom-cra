import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div class="card text-bg-dark text-black border-0">
        <img
          src="/assets/images/bg.webp"
          class="card-img"
          alt="Background"
        ></img>
        <div class="card-img-overlay d-flex flex-column">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
