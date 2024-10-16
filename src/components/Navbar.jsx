import React from 'react';
const Navbar = () => {
  return (
    <nav className="navbar bg-transparent navbar-expand-lg border-bottom fixed-top border-body" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Home</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CV</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Gallery</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
