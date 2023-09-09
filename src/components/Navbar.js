import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
          <nav className="navbar navbar-expand-lg navbar-light navColor">
          <div className="container-fluid navItem">
          <a className="navbar-brand textColor" href="/">{props.brand}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item ">
          <a className="nav-link  textColor" aria-current="page" href="/">{props.home}</a>
          </li>
          <li className="nav-item ">
          <a className="nav-link textColor" href="/">{props.about}</a>
          </li>
          </ul>
          <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success text-dark" type="submit">{props.searchbar}</button>
          </form>
          </div>
          </div>
          </nav> 
  )
}

Navbar.prototype = {
     brand: PropTypes.string,
     home: PropTypes.string,
     about: PropTypes.string,
     searchbar : PropTypes.string,
}
