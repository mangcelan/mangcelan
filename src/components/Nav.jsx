import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

// IMAGE
import logo from '../assets/logo-tc+en.png';

const Nav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top py-4"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      >
        <div className="container-fluid px-5">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="蠻自然logo" className="brand mx-3" />
          </NavLink>

          <button
            className="navbar-toggler btn btn-link"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <ul className="offcanvas-body">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  首頁
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  關於蠻自然
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/works"
                  className="nav-link"
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  作品介紹
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
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

