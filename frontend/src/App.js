import React from "react";

import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Amazon</Link>
            {/* <a href="index.html">Amazon</a> */}
          </div>
          <div className="header-links">
            <a href="">Cart</a>
            <a href="">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Sopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="">Pants</a>
            </li>
            <li>
              <a href="">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/product/:id" exact={true} component={ProductScreen} />
          </div>
        </main>
        <footer className="footer">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
