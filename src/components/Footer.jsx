import React from "react";

const Footer = () => {
  return (
    <>
      <div id="footer" class="footer dark-bg ptt-100">
        {/* <!-- FOOTER START --> */}
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
    </>
  );
};

export default Footer;
