import React from 'react';

import sardine from './../img/meals/sardine-main.jpg'

export default function Hotels() {
  return (
      <div className="section-fish">
        <div className="container">
          <span className="subheading">Avialable fish</span>
          <h2 className="heading-secondary heading-center">
            Choose between variety of fish.
          </h2>
        </div>

        <div className="container grid grid--3-cols">
          <div className="card-fish">
            <img src={sardine} alt="Sardine fish" className="fish-img" />
            <div className="fish-content">
              <div className="fish-tags">
                <span className="tag tag--vegan">Medium</span>
                <span className="tag tag--paleo">200</span>
              </div>
              <p className="fish-title">Sardin</p>
              <ul className="fish-attributes">
                <li className="fish-attribute">
                  <ion-icon className="fish-icon" name="flame-outline"></ion-icon>
                  <span><strong>400</strong> calories</span>
                </li>
                <li className="fish-attribute">
                  <ion-icon
                    className="fish-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>NutriScore &reg; <strong>92</strong></span>
                </li>
                <li className="fish-attribute">
                  <ion-icon className="fish-icon" name="star-outline"></ion-icon>
                  <span><strong>4.8</strong> rating (441)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-fish">
          <img src={sardine} alt="Sardine fish" className="fish-img" />
          <div className="fish-content">
            <div className="fish-tags">
              <span className="tag tag--vegan">Medium</span>
              <span className="tag tag--paleo">200</span>
            </div>
            <p className="fish-title">Sardin</p>
            <ul className="fish-attributes">
              <li className="fish-attribute">
                <ion-icon className="fish-icon" name="flame-outline"></ion-icon>
                <span><strong>400</strong> calories</span>
              </li>
              <li className="fish-attribute">
                <ion-icon
                  className="fish-icon"
                  name="restaurant-outline"
                ></ion-icon>
                <span>NutriScore &reg; <strong>92</strong></span>
              </li>
              <li className="fish-attribute">
                <ion-icon className="fish-icon" name="star-outline"></ion-icon>
                <span><strong>4.8</strong> rating (441)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-fish">
        <img src={sardine} alt="Sardine fish" className="fish-img" />
        <div className="fish-content">
          <div className="fish-tags">
            <span className="tag tag--vegan"><p>Medium</p></span>
            <span className="tag tag--paleo">200</span>
          </div>
          <p className="fish-title">Sardin</p>
          <div className="dropdown">
            <button className="dropbtn">Size</button>
              <div className="dropdown-content">
                <a href="#">Large</a>
                <a href="#">Medium</a>
                <a href="#">Small</a>
              </div>
          </div>       
          <ul className="fish-attributes">
            <li className="fish-attribute">
              <ion-icon className="fish-icon" name="flame-outline"></ion-icon>
              <span><strong>400</strong> calories</span>
            </li>
            <li className="fish-attribute">
              <ion-icon
                className="fish-icon"
                name="restaurant-outline"
              ></ion-icon>
              <span>NutriScore &reg; <strong>92</strong></span>
            </li>
            <li className="fish-attribute">
              <ion-icon className="fish-icon" name="star-outline"></ion-icon>
              <span><strong>4.8</strong> rating (441)</span>
            </li>
          </ul>
        </div>
      </div>

        </div>
      </div>
  )
}
