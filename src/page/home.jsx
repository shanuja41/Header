import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="back-color">
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-between mb-4">
            <nav className="navbar navbar-dark navbar-expand-lg w-100">

              {/* Logo */}
              <a
                href="/"
                className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
              >
                <img src="/logo.png" alt="logo" className="logo" />
              </a>

              {/* Toggler for mobile only */}
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Desktop Nav - shown only on large screens */}
              <div className="d-none d-lg-flex justify-content-between align-items-center w-100">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 flex-row">
                  <li className="nav-item">
                    <a href="#" className="nav-link link-light px-3">Buy & Sell</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link link-light px-3">Development</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link link-light px-3">Work</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link link-light px-3">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link link-light px-3">Upgrade</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link link-light px-3">Docs</a>
                  </li>
                </ul>
                <div className="d-flex">
                  <button type="button" className="btn btn-custom-outline me-2">Sign In</button>
                  <button type="button" className="btn btn-custom">Sign Up</button>
                </div>
              </div>

              {/* Offcanvas - Mobile View only */}
              <div className="d-lg-none">
                <div
                  className="offcanvas offcanvas-end offcanvasSize"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
                    <ul className="navbar-nav text-center">
                      <li className="nav-item">
                        <a href="#" className="nav-link link-dark px-3">Buy & Sell</a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link link-dark px-3">Development</a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link link-dark px-3">Work</a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link link-dark px-3">Portfolio</a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link link-dark px-3">Upgrade</a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link link-dark px-3">Docs</a>
                      </li>
                    </ul>
                    <div className="text-center">
                      <button type="button" className="btn btn-custom-outline me-2 mt-4">Sign In</button>
                      <button type="button" className="btn btn-custom mt-4">Sign Up</button>
                    </div>
                  </div>
                </div>
              </div>

            </nav>
          </header>

        </div>
      </div>

      <div>
        <h1><Link to="/header2" className="text-decoration-none text-dark">header2</Link></h1>
        <h1><Link to="/header3" className="text-decoration-none text-dark">header3</Link></h1>
        <h1><Link to="/header4" className="text-decoration-none text-dark">header4</Link></h1>
        
      </div>
    </>
  );
}
