import React from 'react'


const NavbarCreator = () => {

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu >
          <li className="menu-text">XXL DINERS BISTRO</li>
          <li><a href="#1">About Us</a></li>
          <li><a href="#2">Reservations</a></li>
          <li><a href="#3">Sample menu</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavbarCreator
