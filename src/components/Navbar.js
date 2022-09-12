import React from 'react';
import CartWidget from "./CartWidget";

const Navbar = () => {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Cuddly Bubbly 🧸</a>
            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Novedades</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Conocenos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Guía de compra</a>
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