import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="/">
        <NavLink class="navbar-brand" to="/">Inicio</NavLink>  
        </a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
               <NavLink class="nav-link active" aria-current="page" to="/"> Inicio </NavLink>
              </a>
              
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">               
              <NavLink class="nav-link" to="/course"> Capacitaciones </NavLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">               
                Soluciones Tecnológicas
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Consultoría
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
              <NavLink class="nav-link" to="/about"> Nosotros </NavLink>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
