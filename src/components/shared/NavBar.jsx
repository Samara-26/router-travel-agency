import React from 'react'

function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl" href="/" data-discover="true">Travel Agency</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href="/" data-discover="true">Home</a></li>
      <li><a href="/about" data-discover="true">About</a></li>
      <li><a href="/destinations" data-discover="true">Destinations</a></li>
      <li><a href="/contact" data-discover="true">Contact</a></li>
    </ul>
  </div>
</div>
  )
}

export default NavBar