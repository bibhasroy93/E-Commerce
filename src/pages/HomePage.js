import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://i.ibb.co/prtKnkv/slider1.jpg",
    //caption: 'Slide my1'
  },
  {
    url: "https://i.ibb.co/2hdkjpw/slider2.jpg",
    //caption: 'Slide 2'
  },
  {
    url: "https://i.ibb.co/tKwCWrb/slider3.jpg",
    //caption: 'Slide 3'
  },
];

function HomePage() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            SKart
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Top Offers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Mobiles
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link">Electronics</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Furniture</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Fashion</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Today's Deal</a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search for products"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div style={{ backgroundImage: `url(${slideImage.url})` }}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <div>
        
      </div>
    </div>
  );
}

export default HomePage;
