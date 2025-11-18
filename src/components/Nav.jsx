import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

// IMAGE
import logo from '../assets/logo-tc+en.png';

const Nav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top py-3"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      >
        <div className="container-fluid px-5">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="蠻自然logo" className="brand mx-3" />
          </NavLink>

          <button
            className="navbar-toggler shadow-none btn border-0 bg-none rounded"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header m-4">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <ul className="offcanvas-body justify-content-end nav-underline">
              <li className="nav-item mx-3">
                <NavLink
                  to="/"
                  className="nav-link link"
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  首頁
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  to="/about"
                  className="nav-link link"
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  關於蠻自然
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  to="/works"
                  className="nav-link link"
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  作品介紹
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  to="/contact"
                  className="nav-link link"
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  聯繫我們
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

