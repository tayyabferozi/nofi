import React, { useEffect } from "react";
// import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
import { Link } from "react-scroll";

// ChartJS.register(ArcElement, Tooltip);

const data = {
  datasets: [
    {
      data: [9, 4.66, 3.33, 15.66, 67.35],
      backgroundColor: ["#f3545d", "#fdaf4b", "#1d7af3", "#34e4ef", "#e80ae5"],
      borderWidth: 2,
      borderColor: "#1f0e9c",
    },
  ],

  labels: [
    "Founders",
    "Research & Development",
    "Investors",
    "Pre Sales",
    "Public ICO",
  ],
};
// {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

const Landing = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    // script1.src = "./assets/js/chart.min.js";
    script1.async = true;
    document.body.appendChild(script1);
  }, []);

  return (
    <div id="page-top" class="homepage work-zoom one-page" data-spy="scroll">
      <div class="se-pre-con">
        <div class="spinner">
          <div class="triple-spinner"></div>
        </div>
      </div>

      <div id="current" class="main">
        {/* <!-- HEADER START --> */}
        <header class="navbar navbar-custom header" id="header">
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
        </header>
        {/* <!-- HEADER END --> */}
        {/* <!-- BANNER STRAT --> */}
        <section class="home-banner banner-bg" id="hero">
          <div class="background-shape">
            <svg
              class="shape_1"
              width="400"
              height="232"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="1200 386 698 405"
              fill="#4e11be"
            >
              <path d="M1242,624l188-204l468,371h-445L1242,624z" />
              <path d="M1339 386c76.8 0 139 62.2 139 139s-62.2 139-139 139-139-62.2-139-139 62.2-139 139-139z" />
            </svg>
            <svg
              class="shape_2"
              width="150"
              height="150"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="223 105 100 100"
            >
              <path
                fill="#4e11be"
                d="M273 105c27.6 0 50 22.4 50 50s-22.4 50-50 50-50-22.4-50-50 22.4-50 50-50z"
              />
            </svg>
            <svg
              class="shape_3"
              width="350"
              height="350"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="844 111 601 604"
            >
              <path
                fill="#4e11be"
                d="M1175.9,111L1445,456.9L1113.1,715L844,369.1L1175.9,111z"
              />
            </svg>
          </div>
          <div class="banner">
            <div class="banner-inner d-lg-flex align-items-center">
              <div class="container-fluid p-0">
                <div class="row">
                  <div class="col-lg-6"></div>
                  <div
                    class="
                    col-lg-6 col-sm-10 col-12
                    offset-lg-0 offset-sm-1
                    wow
                    animate__fadeInRight animate__animated
                    col-sup-left
                  "
                    data-wow-duration="2s"
                  >
                    <div class="banner-img"></div>
                    <div
                      class="token-sale-count"
                      style={{ paddingTop: "60px" }}
                    >
                      <div
                        class="
                        heading-part
                        wow
                        animate__fadeInUp animate__animated
                      "
                      >
                        {/* <h3 class="sub_title heading mb-40"></h3> */}
                      </div>
                      <div class="countdown-box">
                        <div
                          class="
                          item-offer-clock
                          mb-40 mb-sm-30
                          wow
                          animate__fadeInUp animate__animated
                        "
                          data-wow-delay="0.1s"
                        >
                          <ul class="countdown-clock">
                            <li>
                              <span class="days">0</span>
                              <p class="days_ref">days</p>
                            </li>
                            <li class="seperator">:</li>
                            <li>
                              <span class="hours">00</span>
                              <p class="hours_ref">hrs</p>
                            </li>
                            <li class="seperator">:</li>
                            <li>
                              <span class="minutes">00</span>
                              <p class="minutes_ref">min</p>
                            </li>
                            <li class="seperator">:</li>
                            <li>
                              <span class="seconds">00</span>
                              <p class="seconds_ref">sec</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="banner-detail">
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="col-lg-6 col-12">
                        <div class="banner-detail-inner slider-animation">
                          <span
                            class="
                            slogan
                            wow
                            animate__fadeInLeft
                            animate__animated
                            animate__delay-1s
                          "
                          >
                            Get in the know with NOFI.
                          </span>
                          <h1
                            class="
                            banner-title
                            wow
                            animate__fadeInLeft
                            animate__animated
                            animate__delay-1_5s
                          "
                          >
                            NOFI Token
                            <br />
                            <span>Cryptocurrency</span>
                          </h1>
                          <p
                            class="
                            wow
                            animate__fadeInLeft
                            animate__animated
                            animate__delay-2s
                          "
                          >
                            Come join our community by clicking below.
                          </p>
                          <a
                            class="
                            btn btn-color
                            wow
                            animate__fadeInLeft
                            animate__animated
                            animate__delay-2_5s
                          "
                            target="_blank"
                            href="https://discord.gg/nofitoken"
                            rel="noreferrer"
                          >
                            <img
                              src="./assets/images/discord.png"
                              width="50%"
                              height="50%"
                              alt="discord"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- BANNER END --> */}
        {/* <!-- Token Sale Start --> */}
        <section id="token" class="token bg-position">
          {/* <!-- Animated Background HTML --> */}
          <div class="background-shape_2">
            <ul class="shape"></ul>
          </div>
          {/* <!-- End Animated Background HTML --> */}
          <div class="ptb-100">
            <div class="container">
              <div class="row m-0">
                <div class="col-12 p-0 mb-40 wow animate__fadeInUp animate__animated">
                  <div class="heading-part align-center">
                    <h6 class="heading-sub-title title-line">Token</h6>
                  </div>
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 wow animate__zoomIn animate__animated"
                  data-wow-duration="2s"
                >
                  <div class="blue-bg token-info">
                    <div class="row align-items-center">
                      <div class="col-lg-5">
                        <div class="token-table">
                          <table class="table table-token-s1 table-borderless">
                            <tbody>
                              <tr>
                                <td class="table-head">Token Symbol</td>
                                <td class="table-des">NOFI</td>
                              </tr>
                              <tr>
                                <td class="table-head">Seed funding</td>
                                <td class="table-des">Nov 01, 2021</td>
                              </tr>
                              <tr>
                                <td class="table-head">
                                  Projected Project Release
                                </td>
                                <td class="table-des">Spring, 2022</td>
                              </tr>
                              <tr>
                                <td class="table-head">Seed Funding End</td>
                                <td class="table-des">TBA</td>
                              </tr>
                              <tr>
                                <td class="table-head">Acceptable Currency</td>
                                <td class="table-des">ETH, BNB, USDT, CAKE</td>
                              </tr>
                              <tr>
                                <td class="table-head">Token Seeding Supply</td>
                                <td class="table-des">~93,960,000</td>
                              </tr>
                              <tr>
                                <td class="table-head">Token Supply</td>
                                <td class="table-des">600,000,000</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="col-lg-7">
                        <div class="token-list-info h-100">
                          <div class="row">
                            <div class="token-sale-chart mb-md-30">
                              <div
                                class="
                                heading-part
                                align-center
                                wow
                                animate__fadeInUp animate__animated
                              "
                              >
                                <h3 class="sub_title heading mb-40 mb-xs-10">
                                  Supply Breakdown
                                </h3>
                              </div>
                              <div class="row align-items-center">
                                <div class="col-xl-8 col-sm-6 col-12">
                                  <div class="chart-part">
                                    <div class="chart chart-sm">
                                      <canvas
                                        id="chartjs-doughnut"
                                        class="wow animate__zoomIn"
                                        style={{
                                          width: "auto",
                                          height: "260px",
                                        }}
                                      ></canvas>
                                    </div>
                                    <div class="chart-logo"></div>
                                  </div>
                                </div>
                                <div class="offset-xl-2">
                                  <div class="chart-legend">
                                    <ul>
                                      <li
                                        class="
                                        wow
                                        animate__fadeInUp animate__animated
                                      "
                                        data-wow-delay="0.1s"
                                      >
                                        <span class="chart-label color-1">
                                          Founders
                                        </span>
                                      </li>
                                      <li
                                        class="
                                        wow
                                        animate__fadeInUp animate__animated
                                      "
                                        data-wow-delay="0.2s"
                                      >
                                        <span class="chart-label color-2">
                                          R&D
                                        </span>
                                      </li>
                                      <li
                                        class="
                                        wow
                                        animate__fadeInUp animate__animated
                                      "
                                        data-wow-delay="0.3s"
                                      >
                                        <span class="chart-label color-3">
                                          Investors
                                        </span>
                                      </li>
                                      <li
                                        class="
                                        wow
                                        animate__fadeInUp animate__animated
                                      "
                                        data-wow-delay="0.4s"
                                      >
                                        <span class="chart-label color-4">
                                          Phase two funding
                                        </span>
                                      </li>
                                      <li
                                        class="
                                        wow
                                        animate__fadeInUp animate__animated
                                      "
                                        data-wow-delay="0.5s"
                                      >
                                        <span class="chart-label color-5">
                                          Phase three
                                        </span>
                                      </li>
                                    </ul>
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
              </div>
              <div class="pt-100">
                <div class="row">
                  <div class="col-lg-6"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Token Sale End --> */}
        {/* <!-- Roadmap section start --> */}
        <section class="timeline dark-bg bg-pattern2" id="roadmap">
          <div class="container" id="roadmap-before">
            <div class="row m-0">
              <div class="col-12 p-0 mb-40 wow animate__fadeInUp animate__animated">
                <div class="heading-part align-center">
                  <h6 class="heading-sub-title title-line">Timeline</h6>
                  <h2 class="main_title heading mb-15">Road Map</h2>
                  <p class="heading-des"></p>
                </div>
              </div>
            </div>
            <div class="main-roadmap">
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="
                    h-border
                    wow
                    animate__animated animate__fadeInLeftBig animate__delay-0.5s
                  "
                  ></div>
                </div>
              </div>
              <div class="row">
                <div class="roadmap-slider owl-carousel">
                  <div class="item roadmap">
                    <div class="roadmap-box text-center">
                      <div
                        class="
                        date-title
                        wow
                        animate__fadeInDown animate__animated animate__delay-2s
                      "
                      >
                        <span>Phase 1</span>
                      </div>
                      <div class="map-graphic">
                        <div
                          class="
                          small-round
                          wow
                          animate__zoomIn animate__animated animate__delay-1s
                        "
                        >
                          <span></span>
                        </div>
                        <div
                          class="
                          v-row
                          wow
                          animate__fadeInDown
                          animate__animated
                          animate__delay-1_5s
                        "
                        ></div>
                      </div>
                      <div
                        class="
                        roadmap-detail-box
                        wow
                        animate__fadeInUp animate__animated animate__delay-2s
                      "
                      >
                        {/* <h3 class="roadmap-title bottom-title-line"></h3> */}
                        <p>Digital Branding</p>
                        <p>Building the Community</p>
                        <p>Creating a user interface</p>
                        <p>Technical improvements</p>
                        <p>Wallet integration</p>
                        <p>Social media campaigns</p>
                        <p>Digital announcement event</p>
                        <p>Whitepaper v1</p>
                        <p>Token</p>
                      </div>
                    </div>
                  </div>
                  <div class="item roadmap">
                    <div class="roadmap-box text-center">
                      <div
                        class="
                        date-title
                        wow
                        animate__fadeInDown
                        animate__animated
                        animate__delay-2_5s
                      "
                      >
                        <span>Phase 2</span>
                      </div>
                      <div class="map-graphic">
                        <div
                          class="
                          small-round
                          wow
                          animate__zoomIn animate__animated animate__delay-1_5s
                        "
                        >
                          <span></span>
                        </div>
                        <div
                          class="
                          v-row
                          wow
                          animate__fadeInDown
                          animate__animated
                          animate__delay-2s
                        "
                        ></div>
                      </div>
                      <div
                        class="
                        roadmap-detail-box
                        wow
                        animate__fadeInUp animate__animated animate__delay-2_5s
                      "
                      >
                        {/* <h3 class="roadmap-title bottom-title-line"></h3> */}
                        <p>Multi Exchange Support</p>
                        <p>Security audits (Certik)</p>
                        <p>Monthly Newsletter</p>
                        <p>Governance announcement</p>
                        <p>Building a voting system</p>
                        <p>Creating partnerships</p>
                      </div>
                    </div>
                  </div>
                  <div class="item roadmap">
                    <div class="roadmap-box text-center">
                      <div
                        class="
                        date-title
                        wow
                        animate__fadeInDown animate__animated animate__delay-3s
                      "
                      >
                        <span>Phase 3</span>
                      </div>
                      <div class="map-graphic">
                        <div
                          class="
                          small-round
                          wow
                          animate__zoomIn animate__animated animate__delay-2s
                        "
                        >
                          <span></span>
                        </div>
                        <div
                          class="
                          v-row
                          wow
                          animate__fadeInDown
                          animate__animated
                          animate__delay-2_5s
                        "
                        ></div>
                      </div>
                      <div
                        class="
                        roadmap-detail-box
                        wow
                        animate__fadeInUp animate__animated animate__delay-3s
                      "
                      >
                        {/* <h3 class="roadmap-title bottom-title-line"></h3> */}
                        <p class="roadmap-des">To be announced.</p>
                      </div>
                    </div>
                  </div>
                  <div class="item roadmap">
                    <div class="roadmap-box text-center">
                      <div
                        class="
                        date-title
                        wow
                        animate__fadeInDown
                        animate__animated
                        animate__delay-3_5s
                      "
                      >
                        <span>Phase 4</span>
                      </div>
                      <div class="map-graphic">
                        <div
                          class="
                          small-round
                          wow
                          animate__zoomIn animate__animated animate__delay-2_5s
                        "
                        >
                          <span></span>
                        </div>
                        <div
                          class="
                          v-row
                          wow
                          animate__fadeInDown
                          animate__animated
                          animate__delay-3s
                        "
                        ></div>
                      </div>
                      <div
                        class="
                        roadmap-detail-box
                        wow
                        animate__fadeInUp animate__animated animate__delay-3_5s
                      "
                      >
                        {/* <h3 class="roadmap-title bottom-title-line"></h3> */}
                        <p class="roadmap-des">To be announced.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Roadmap section end --> */}
        {/* <!-- FOOTER START --> */}

        <div id="footer" class="footer dark-bg ptt-100">
          <div class="container">
            <div class="footer-inner">
              <div class="footer-middle">
                <div class="row">
                  <div
                    class="col-lg-4 f-col wow animate__fadeInUp animate__animated"
                    data-wow-delay="0.2s"
                  >
                    <div class="footer-static-block">
                      <div class="f-logo mb-30">
                        <a href="#0" class="">
                          <img
                            src="./assets/images/footer-logo.png"
                            alt="NOFIToken"
                          />
                        </a>
                      </div>
                      <div class="footer-block-contant">
                        <p>Get in the know with NOFI.</p>
                        <ul class="social-icon"></ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="row">
                      <div
                        class="
                        col-lg-3
                        f-col
                        wow
                        animate__fadeInUp animate__animated
                      "
                        data-wow-delay="0.4s"
                      >
                        <div class="footer-static-block">
                          <span class="opener plus"></span>
                          <h3 class="title">
                            Social<span></span>
                          </h3>
                          <ul class="footer-block-contant link">
                            <li>
                              <a
                                href="https://discord.gg/nofitoken"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Discord
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.twitch.tv/NOFIToken"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Twitch
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.reddit.com/r/NOFIToken/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Reddit
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://twitter.com/nofitoken"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Twitter
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.tiktok.com/@nofitoken"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Tiktok
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://t.me/nofitoken"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Telegram
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        class="
                        col-lg-6
                        f-col
                        wow
                        animate__fadeInUp animate__animated
                      "
                        data-wow-delay="0.8s"
                      >
                        <div class="footer-static-block">
                          <span class="opener plus"></span>
                          <h3 class="title">
                            Contact Us<span></span>
                          </h3>
                          <div class="footer-block-contant">
                            <ul class="address-footer">
                              <li class="item">
                                <div class="address-icon icon3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="952 534 16 12"
                                  >
                                    <path
                                      fill="#fff"
                                      d="M966.7 534h-13.3c-.7 0-1.3.6-1.3 1.3v9.3c0 .7.6 1.3 1.3 1.3h13.3c.7 0 1.3-.6 1.3-1.3v-9.3c0-.7-.6-1.3-1.3-1.3zm-13.4.7h13.4l-6.3 5.8c-.1.1-.3.2-.5.2s-.4-.1-.5-.2l-6.3-5.8h.2zm-.6 10v-9.5l5.3 4.8-5.3 4.9v-.2zm14 .6h-13.5l5.3-4.9c.2.2.4.4.6.5.3.2.6.4.9.4s.7-.1.9-.4c.2-.1.4-.3.6-.5l5.3 4.9h-.1zm.6-.6v.2L962 540l5.3-4.8v9.5z"
                                    />
                                    <defs />
                                  </svg>
                                </div>
                                <p>
                                  <a href="mailto:info@nofitoken.com">
                                    info@nofitoken.com
                                  </a>
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="footer-bottom">
            <div class="copy-right-bg">
              <div class="container">
                <div class="row align-center">
                  <div class="col-12">
                    <div class="copy-right">
                      © 2021 All Rights Reserved
                      <a href="#0"> NOFI Token</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="scroll-top">
          <div class="scrollup"></div>
        </div>
        {/* <!-- FOOTER END --> */}
      </div>
    </div>
  );
};

export default Landing;
