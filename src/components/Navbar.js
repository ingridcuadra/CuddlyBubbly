import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

const Navbar = () => {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/"><a className="navbar-brand">Cuddly Bubbly 🧸</a></Link>
            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link to="category/1"><a className="nav-link">Novedades</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="category/2"><a className="nav-link">Conocenos</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="category/3"><a className="nav-link">Guía de compra</a></Link>
                </li>
              </ul>
              <form className="d-flex form-search">
                <input className="form-control me-sm-2" type="text" placeholder="¿Qué estás buscando?" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
              </form>
              <CartWidget />
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar;