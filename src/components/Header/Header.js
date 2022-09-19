import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo" id="logo">
            <h2>
              Ani<span>me</span>
            </h2>
          </div>

          <ul className="nav_list">
            <li className="nav_list-item">
              <div className="search__wrapper">
                <input
                  type="text"
                  placeholder="Search"
                  id="searchBar"
                  className="search__bar"
                />
                <button className="search__btn" id="searchBtn">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
