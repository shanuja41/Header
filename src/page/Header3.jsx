

export default function Header3() {
  return(
  <>
     <div className="top-bar bg-dark text-white">
  <div className="container">
    <div className="row align-items-center">
      {/* Left side: Chat icon + text + arrows */}
      <div className="col-md-8 d-flex align-items-center gap-2">
        <div className="bg-success p-2 rounded-0">
          <i className="bi bi-chat-left-text text-white"></i>
        </div>
        <span className="small">ELEMENTOR IS GREAT WORDPRESS...</span>
        <i className="bi bi-arrow-left mx-2 "></i>
        <i className="bi bi-arrow-right border-start ps-3"></i>
      </div>

      {/* Right side: Social icons + contact button */}
      <div className="col-md-4 d-flex justify-content-center align-items-center gap-3 mt-2 mt-md-0">
        <i className="border-design3 bi bi-facebook"></i>
        <i className="border-design3 bi bi-twitter"></i>
        <i className="border-design3 bi bi-linkedin"></i>
        <i className="border-design3 bi bi-instagram"></i>
        <button className="btn btn-success btn-sm rounded-0">» Contact Me</button>
      </div>
    </div>
  </div>
</div>


      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/logo3.png"
              alt="Logo"
              className="me-2 rounded-circle"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="mainNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <a className="nav-link3 " href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link3" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link3" href="#">
                  SERVICE
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link3" href="#">
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link3" href="#">
                  PAGES
                </a>
              </li>
            </ul>
           <div className="d-flex align-items-center gap-3">
  {/* Search icon + text together */}
  <div className="d-flex align-items-center gap-1">
    <i className="bi bi-search text-success"></i>
    <span className="text-light small">Search</span>
  </div>

  {/* Grid icon remains separate */}
  <i className="bi bi-grid-3x3-gap-fill text-success fs-1"></i>
</div>

          </div>
        </div>
      </nav>
    </>
  )
}
