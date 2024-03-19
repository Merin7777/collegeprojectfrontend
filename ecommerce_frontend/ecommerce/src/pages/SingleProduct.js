import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import Container from "../components/Container";
import PopularProductCard from "../components/PopularProductCard";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [grid] = useState(4);
  const [orderedProduct, setorderedProduct] = useState(true);
  // const {ProductId} = useParams();
  // const product = ProductCard.find((e) => e.id === Number(ProductId));
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <img
                src="https://www.infotechsnepal.com/wp-content/uploads/2023/03/dell-celeron-5470.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://www.infotechsnepal.com/wp-content/uploads/2023/03/dell-celeron-5470-left-port.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.infotechsnepal.com/wp-content/uploads/2023/03/dell-celeron-5470-right.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">Dell 5470</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">NPR 37,500.00</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">Based on 2 reviews</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex align-items-center gap-10">
                  <h5>Processor :</h5>
                  <h6>Intel® Celeron™ N4100</h6>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <h5>RAM:</h5>
                  <h6>8 GB, DDR4, 2400 MHz</h6>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <h5>Display:</h5>
                  <h6>14.0″ FHD (1920 x 1080) Anti-Glare, Non-Touch</h6>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <h5>OS:</h5>
                  <h6>Windows 10 Pro</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>

            <div className="bg-white p-3">
              <p>
                Jeep spokesperson confirmed the Renegade’s cancellation to
                Automotive News. Motor1 reached out to the automaker for a
                statement on the matter, and we will update this story if we
                receive a comment.The Stellantis brand told Auto News that it
                will continue to offer the Renegade in Mexico, Europe, and other
                markets.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="#">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-3">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Anjan</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>

                  <p className="mt-3">
                    Jeep spokesperson confirmed the Renegade’s cancellation to
                    Automotive News. Motor1 reached out to the automaker for a
                    statement on the matter, and we will update this story if we
                    receive a comment.The Stellantis brand told Auto News that
                    it will continue to offer the Renegade in Mexico, Europe,
                    and other markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default SingleProduct;
