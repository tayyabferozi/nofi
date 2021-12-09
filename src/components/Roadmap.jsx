import React from "react";

const Roadmap = () => {
  return (
    <section class="timeline dark-bg bg-pattern2" id="roadmap">
      {/* <!-- Roadmap section start --> */}
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
      {/* <!-- Roadmap section end --> */}
    </section>
  );
};

export default Roadmap;
