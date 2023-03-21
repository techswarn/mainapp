import React, {useState} from 'react';
import useAxios from '../../hooks/useAxios';
import Loader from '../uicomps/Loader';

export default function Products() {

  const [size, setSize] = useState() 
  const {data, loading, error }= useAxios('https://localhost:1337/api/products?populate=*')
  console.log(data)
  const fish = data?.data
  console.log(fish)
  console.log(loading)
  if(loading) {
    console.log("loading")
  } else {
    console.log("Notloading")
  }
  const variety = fish
  console.log(variety)

  return (
      <div className="section-fish">
        <div className="container">
          <span className="subheading">Avialable fish</span>
          <h2 className="heading-secondary heading-center">
            Choose between variety of fish.
          </h2>
        </div>
        <div className="container grid grid--3-cols" >
        {loading ? (<Loader/>): (fish.map( fish => (
          <div className="card-fish" key={fish.id}>
          <img src={"http://localhost:1337" + fish?.attributes?.img1?.data?.attributes?.url} alt="Sardine fish" className="fish-img" />
          <div className="fish-content">
            <div className="fish-tags">
              <span className="tag tag--vegan"><p>mediaum</p></span>
              <span className="tag tag--paleo">200</span>
            </div>
            <p className="fish-title">{fish.attributes.Title}</p>
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
        )))}
        </div>
      </div>
  )
}
