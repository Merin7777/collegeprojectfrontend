import React from "react";
import { RiHeartAddLine } from "react-icons/ri";
import { AiOutlineUserAdd, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">DigiWorld</Link>
              </h2>
            </div>

            <Search />

            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <a
                    className="d-flex align-items-center ml-2"
                    href="/wishlist"
                  >
                    <RiHeartAddLine className="nav-icons" />
                    <p className="mb-0">Wishlist</p>
                  </a>
                </div>
                <div>
                  <a className="d-flex align-items-center" href="/cart">
                    <AiOutlineShoppingCart className="nav-icons" />
                    <p className="mb-0">Cart</p>
                  </a>
                </div>
                <div>
                  <a className="d-flex align-items-center" href="/login">
                    <AiOutlineUserAdd className="nav-icons" />
                    <p className="mb-0">Profile</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div className="brands">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Shop by Brands</option>
                    <option value="1">DELL</option>
                    <option value="2">ACER</option>
                    <option value="3">LENOVO</option>
                  </select>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
