import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

const Navbar = () => {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Cuddly Bubbly 🧸</Link>
            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="category/1">Novedades</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="category/2">Más vendidos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="category/3">Nuestra recomendación</Link>
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