import React from "react";
import Marquee from "react-fast-marquee";
import ProductCard from "../components/ProductCard";
import PopularProductCard from "../components/PopularProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import image1 from "../images/Predator.jpg";
import image2 from "../images/Zenbook-Q410VA.jpg";
import image3 from "../images/hp-14s.jpg";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image1} className="d-block w-100" alt="slide" />
              </div>
              <div className="carousel-item ">
                <img src={image2} className="d-block w-100" alt="slide" />
              </div>
              <div className="carousel-item ">
                <img src={image3} className="d-block w-100" alt="slide" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <PopularProductCard />
        </div>
      </Container>
      <Container className="marquee-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="marquee-inner-wrapper card-wrapper">
            <Marquee className="d-flex">
              <div className="mx-4 w-25">
                <img src="images/brand-01.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-02.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-03.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-04.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-05.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-06.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-07.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-08.png" alt="brand" />
              </div>
            </Marquee>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
