export default function Header4() {
  return (
    <>
      <header>
        {/* Top Header Section */}
        <div className="top-header bg-dark py-2">
          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6 col-sm-5">
                <div className="d-flex flex-wrap justify-content-md-start align-item-center gap-2 text-start text-white">
                  {/* Language Dropdown */}
                  <div className="dropdown drop4">
                    <button
                      className="btn btn-sm btn-dark dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          English
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          French
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Currency Dropdown */}
                  <div className="dropdown drop4">
                    <button
                      className="btn btn-sm btn-dark dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      USD
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          USD
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          SLR
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Welcome Text */}
                  <div className="text-white small py-1 px-2 ">
                    Welcome to Ecommerce
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-md-6 col-sm-7">
                <div className="d-flex flex-wrap justify-content-md-end justify-content-md-end text-white gap-3">
                  <div className="dropdown drop4">
                    <a
                      className="dropdown-toggle text-white text-decoration-none"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bi bi-person me-1" />
                      My Account <i className="fa fa-angle-down ms-1" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          My account
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Wishlist
                        </a>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="#"
                    className=" dropdown drop4 text-white text-decoration-none"
                  >
                    <i className="bi bi-heart me-1" />
                    Wishlist
                  </a>

                  <a
                    href="#"
                    className=" dropdown drop4 text-white text-decoration-none"
                  >
                    <i className="bi bi-box-arrow-in-right me-1" />
                    Checkout
                  </a>

                  <a
                    href="#"
                    className=" dropdown drop4 text-white text-decoration-none"
                  >
                    <i className="bi bi-lock-fill me-1" />
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo and Search Section */}
        <div className="Logo-section bg-white py-3 border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-4 col-md-4 col-xs-12">
                <div className="d-flex align-items-center">
                  <div className="logo me-2">
                    <a href="#">
                      <img src="/logo4.png" alt="E-Com Shop" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-8 col-md-8 col-xs-12">
                <div className="d-flex justify-content-between align-items-center">
                  {/* Search Form */}
                  <div className="search flex-grow-1 me-4">
                    <form>
                      <div className="input-group">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary rounded-0 dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                          >
                            All Categories
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Electronics
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Fashion
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Home & Garden
                              </a>
                            </li>
                          </ul>
                        </div>
                        <input
                          type="text"
                          className="form-control rounded-0"
                          placeholder="Search here..."
                        />
                        <button
                          className="btn btn-dark rounded-0"
                          type="submit"
                        >
                          <i className="bi bi-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Call and Cart Section */}
                  <div className="d-flex align-items-center">
                    {/* Call Info */}
                    <div className="me-4">
                      <div className="  d-flex align-items-center">
                        <i className=" bg-warning px-3 py-3 bi bi-telephone me-2"></i>
                        <div className=" box4">
                          <div className="small text-white fw-bold">
                            CALL US FREE:
                          </div>
                          <div className=" text-white fw-bold">
                            +0.1 2.53 5.50 0.9
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="menu-area bg-white py-2 border-bottom">
          <div className="container">
            <div className="d-md-flex justify-content-between align-items-center flex-wrap">
              {/* Categories Button */}
              <div className="mb-2 mb-md-0 me-md-3">
                <div className="categories">
                  <button className="btn btn-warning rounded-0 text-white fw-bold d-flex justify-content-between align-items-center">
                    <span>
                      CATEGORIES
                    </span>
                  </button>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="flex-grow-1 mb-2 mb-md-0">
                <ul className="nav justify-content-center">
                  <li className="nav-item mx-2">
                    <a className="nav-link fw-bold text-dark" href="#">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link fw-bold text-dark" href="#">
                      PAGES
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link fw-bold text-dark" href="#">
                      ABOUT US
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link fw-bold text-dark" href="#">
                      MEN
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link fw-bold text-dark" href="#">
                      WOMEN
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link fw-bold text-dark" href="#">
                      CONTACT US
                    </a>
                  </li>
                </ul>
              </div>

              {/* Cart Box */}
              {/* Cart Box */}
<div className="text-md-end d-flex align-items-center h-100">
  <div className="d-flex align-items-center cart-box">
    <div className="bg-dark text-white px-3 py-2 py-md-3">My Cart</div>
    <div className="bg-warning text-white px-3 py-2 py-md-3 fw-bold">2</div>
  </div>
</div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
}
