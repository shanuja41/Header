export default function Header2() {
  return (
    <>
      {/* Top header section */}
      <div className="img-section top-header">
        <div className="container-fluid border-bottom">
          <div className="container px-3">
            {/* Mobile view: 3 rows layout */}
            <div className="d-lg-none">
              {/* Row 1: Social icons left, search icon right */}
              <div className="d-flex justify-content-between align-items-center border-bottom ">
                <div className="d-flex gap-2">
                  <a href="#" className="text-white fs-6"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-white fs-6"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="text-white fs-6"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-white fs-6"><i className="bi bi-linkedin"></i></a>
                </div>
                <div className="search-icon-wrapper">
                  <i className="bi bi-search text-white fs-5"></i>
                </div>
              </div>

              {/* Row 2: Logo left, Buy Now button right */}
              <div className="d-flex justify-content-between align-items-center  py-2">
                <a className="navbar-brand text-white spacing-1 fw-bold fs-3" href="#">
                  Travele
                </a>
                <button className="button-buy btn fw-bold btn-danger border-0 rounded-0">
                  BUYNOW
                </button>
              </div>

             
            </div>

            {/* Desktop view */}
            <div className="row align-items-center justify-content-between d-none d-lg-flex">
              {/* Contact details */}
              <div className="col-lg-7">
                <div className="d-flex flex-wrap gap-3">
                  <div className="d-flex align-items-center text-white">
                    <i className="bi bi-telephone-fill me-2 text-white fs-6"></i>
                    <span className="fs-6">+01(977)259912</span>
                  </div>
                  <div className="d-flex align-items-center text-white">
                    <i className="bi bi-envelope-fill me-2 text-white fs-6"></i>
                    <span className="fs-6">company@domain.com</span>
                  </div>
                  <div className="d-flex align-items-center text-white">
                    <i className="bi bi-geo-alt-fill me-2 text-white fs-6"></i>
                    <span className="fs-6">3146 Koontz Lane, California</span>
                  </div>
                </div>
              </div>
              {/* Social icons and search */}
              <div className="col-lg-5 d-flex justify-content-lg-end">
                <div className="d-flex align-items-stretch gap-3">
                  <div className="social-icons d-flex gap-3 align-items-center">
                    <a href="#" className="text-white fs-6"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="text-white fs-6"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="text-white fs-6"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="text-white fs-6"><i className="bi bi-linkedin"></i></a>
                  </div>
                  <a href="#" className="d-flex align-items-stretch text-white fs-5">
                    <div className="search-icon-wrapper">
                      <i className="bi bi-search"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation bar */}
        <nav className="navbar navbar-expand-lg navbar-dark py-3 shadow-sm">
          <div className="container px-3 justify-content-center">
            {/* Logo - visible on large screens only */}
            <a className="navbar-brand d-none d-lg-block text-white spacing-1 fw-bold fs-1" href="#">
              Travele
            </a>

             {/* Row 3: Menu toggler center */}
              <div className="d-flex justify-content-center align-items-center border-bottom py-2">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                  <span className="ms-2 text-white fw-bold">Menu</span>
                </button>
              </div>
              
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                {["HOME", "TOUR", "PAGES", "SHOP", "BLOG", "DASHBOARD"].map((menu, idx) => (
                  <li className="nav-item dropdown px-3" key={idx}>
                    <a
                      className="nav-link dropdown-toggle fw-bold text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {menu}
                    </a>
                    <ul className="dropdown-menu only-top-border min-w-250 p-0">
                      <li><a className="dropdown-item" href="#">Item 1</a></li>
                      <li><a className="dropdown-item" href="#">Item 2</a></li>
                    </ul>
                  </li>
                ))}
              </ul>
              <button className="d-none d-lg-block button-buy btn fw-bold btn-danger border-0 rounded-0">
                BUYNOW
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
