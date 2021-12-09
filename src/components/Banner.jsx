import React from "react";

const Banner = () => {
  return (
    <section class="home-banner banner-bg" id="hero">
      {/* <!-- BANNER STRAT --> */}
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
                <div class="token-sale-count" style={{ paddingTop: "60px" }}>
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
      {/* <!-- BANNER END --> */}
    </section>
  );
};

export default Banner;
