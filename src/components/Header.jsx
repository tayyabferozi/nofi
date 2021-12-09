import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header class="navbar navbar-custom header" id="header">
      {/* <!-- HEADER START --> */}
      <div class="navbar-expand">
        <div class="container">
          <div class="row m-0 align-items-center">
            <div class="col-lg-3 col-6 left-sm p-0">
              <div class="header-middle-left">
                <div class="navbar-header float-none-sm">
                  <a class="navbar-brand page-scroll" href="#0">
                    <img alt="NOFIToken" src="./assets/images/logo.png" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-1 p-0">
              <div class="overlay"></div>
              <div
                id="menu"
                class="navbar-collapse collapse justify-content-center"
              >
                <ul id="menu-main" class="nav navbar-nav">
                  <li class="scroll active">
                    <Link
                      spy={true}
                      class="page-scroll nav-link"
                      to="hero"
                      smooth={true}
                      delay={300}
                      activeClass="active"
                    >
                      Home
                    </Link>
                  </li>
                  <li class="scroll">
                    <Link
                      spy={true}
                      class="page-scroll nav-link"
                      to="token"
                      smooth={true}
                      delay={300}
                      activeClass="active"
                    >
                      Token
                    </Link>
                  </li>
                  <li class="scroll">
                    <Link
                      spy={true}
                      class="page-scroll nav-link"
                      to="roadmap-before"
                      smooth={true}
                      delay={300}
                      activeClass="active"
                    >
                      Roadmap
                    </Link>
                  </li>
                  <li class="scroll">
                    <Link
                      spy={true}
                      class="page-scroll nav-link"
                      to="footer"
                      smooth={true}
                      delay={300}
                      activeClass="active"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-5 p-0">
              <div class="right-side header-right-link">
                <ul>
                  <li>
                    <div class="signin d-none d-lg-block"></div>
                  </li>
                  <li class="side-toggle">
                    <button
                      data-target=".navbar-collapse"
                      data-toggle="collapse"
                      class="navbar-toggle"
                      type="button"
                    >
                      <i class="fas fa-bars"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- HEADER END --> */}
    </header>
  );
};

export default Header;
