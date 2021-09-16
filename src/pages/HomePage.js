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

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 6,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 7,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]
function HomePage() {
  return (
    <div>
<<<<<<< HEAD
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
=======
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SKart</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Top Offers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mobiles</a>
              </li>

              <li className="nav-item">
                <a className="nav-link">Electronics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Furniture</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Fashion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Today's Deal</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search for products" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
>>>>>>> 14789cdf7a9b98f84d5f6c0209105566aa73836a
            </form>
          </div>
        </div>
      </nav>

      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
<<<<<<< HEAD
              <div style={{ backgroundImage: `url(${slideImage.url})` }}>
=======
              <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
>>>>>>> 14789cdf7a9b98f84d5f6c0209105566aa73836a
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>

<<<<<<< HEAD
      <div>
        
=======

      <div className="card">
        <div className="card-body">
         <h4>Today's Deal</h4> 
       
      <div className="wrapper">
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
      </div>
      </div>
      </div>

      <div className="card">
        <div className="card-body">
         <h4>Festival Offers</h4> 
       
      <div className="wrapper">
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        
        
      </div>
      </div>
      </div>

      <div className="card">
        <div className="card-body">
         <h4>Fashion</h4> 
       
      <div className="wrapper">
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        
       
      </div>
      </div>
      </div>

      <div className="card">
        <div className="card-body">
         <h4>Mobiles</h4> 
       
      <div className="wrapper">
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        
      </div>
      </div>
      </div>

      <div className="card">
        <div className="card-body">
         <h4>Electronics</h4> 
       
      <div className="wrapper">
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' className="card-img-top" alt="..." />

          </div>
        </div>
    
      </div>
      </div>
>>>>>>> 14789cdf7a9b98f84d5f6c0209105566aa73836a
      </div>
    </div>

  );
}

export default HomePage;
