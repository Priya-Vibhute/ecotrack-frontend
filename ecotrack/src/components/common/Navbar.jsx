import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-success shadow">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">
      🌱 EcoTrack
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#ecoNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="ecoNavbar">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">How It Works</a>
        </li>

        <li class="nav-item">
          <Link className="nav-link" to="/raise-request">Raise Request</Link>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>

        <li class="nav-item ms-lg-3">
          <Link className="btn btn-light text-success fw-semibold" to="/login">Login</Link>
        </li>

        <li class="nav-item ms-2">
          <Link className="btn btn-outline-light fw-semibold" to="/register">Register</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar