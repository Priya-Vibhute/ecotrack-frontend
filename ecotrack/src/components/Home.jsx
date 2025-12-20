import React from 'react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left Content */}
            <div className="col-lg-6">
              <span className="badge bg-success mb-3">EcoTrack Platform</span>

              <h1 className="display-5 fw-bold text-dark">
                Smart Recycling for a{' '}
                <span className="text-success">Cleaner Tomorrow</span>
              </h1>

              <p className="lead text-muted mt-3">
                EcoTrack helps users raise recycle pickup requests while admins
                manage approvals efficiently. A simple step towards sustainability.
              </p>

              <div className="mt-4">
                <a href="#" className="btn btn-success btn-lg me-3">
                  Raise Recycle Request
                </a>
                <a href="#" className="btn btn-outline-success btn-lg">
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2920/2920222.png"
                className="img-fluid"
                style={{ maxHeight: '420px' }}
                alt="Eco Recycling"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-white">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">How EcoTrack Works</h2>
            <p className="text-muted">
              Simple, transparent, and eco-friendly process
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body">
                  <h3 className="text-success">📝</h3>
                  <h5 className="card-title mt-3">Create Request</h5>
                  <p className="card-text text-muted">
                    Submit recycle requests with item details and pickup location.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body">
                  <h3 className="text-success">✔️</h3>
                  <h5 className="card-title mt-3">Admin Approval</h5>
                  <p className="card-text text-muted">
                    Admin reviews and approves requests based on availability.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body">
                  <h3 className="text-success">🚛</h3>
                  <h5 className="card-title mt-3">Pickup & Process</h5>
                  <p className="card-text text-muted">
                    Items are collected and sent for eco-friendly processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body">
                  <h3 className="text-success">🌍</h3>
                  <h5 className="card-title mt-3">Green Impact</h5>
                  <p className="card-text text-muted">
                    Contribute towards a cleaner environment and sustainable future.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-success text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Ready to Make an Impact?</h2>
          <p className="mb-4">
            Join EcoTrack today and be part of the recycling revolution.
          </p>
          <a href="#" className="btn btn-light btn-lg fw-semibold">
            Get Started
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
