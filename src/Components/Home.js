import React, { Fragment } from "react";

import Products from "./Products/Products";
import Footer from "./Footer";
import hero from "./img/hero-main.jpg";

export default function Home() {
  return (
    <Fragment>
      <div className="section-main">
        <div className="main">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Order Fresh fish Exclusively! there?
            </h1>
            <p className="main-description">
              Test 2 We get the fish directly from the fishing habour or
              Fishermen, process it and delivery to your at the best market
              price!
            </p>
            <a href="#" className="btn btn-action btn--full">
              Download App
            </a>
          </div>
          <div className="main-img-box">
            <picture>
              <img src={hero} alt="types of fish on ice" className="main-img" />
            </picture>
          </div>
        </div>
      </div>
      <Products />
      <Footer />
    </Fragment>
  );
}
