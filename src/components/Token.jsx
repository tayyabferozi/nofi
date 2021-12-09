import React from "react";

const Token = () => {
  return (
    <section id="token" class="token bg-position">
      {/* <!-- Token Sale Start --> */}
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
                          <div class="row align-items-center justify-content-center">
                            <div class="col-lg-8 col-sm-12 col-sm-12 col-9">
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
                            <div class="">
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
                                    <span class="chart-label color-2">R&D</span>
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
      {/* <!-- Token Sale End --> */}
    </section>
  );
};

export default Token;
