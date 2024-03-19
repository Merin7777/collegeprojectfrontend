import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-4">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img
                  src="https://www.infotechsnepal.com/wp-content/uploads/2023/03/dell-celeron-5470.jpg"
                  alt="laptop"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Dell 5470</h5>
                <h6 className="price mb-3 mt-3">NPR 37,500.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand: </h5>
                    <p>Dell</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img
                  src="https://www.infotechsnepal.com/wp-content/uploads/2024/01/1-9.jpg"
                  alt="laptop"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title">HP Envy x360 14</h5>
                <h6 className="price mb-3 mt-3">NPR 106,500.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand: </h5>
                    <p>HP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
