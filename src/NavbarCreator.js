import React from 'react'


const NavbarCreator = () => {

  return (

    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#1">XXL DINERS BISTRO</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul className="nav navbar-nav navbar-right">
            <li><a href="#1">About Us</a></li>
            <li><a href="#2">Sample Menu</a></li>
            <li><a href="#3">Reservations</a></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavbarCreator
