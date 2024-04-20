import React, { useEffect } from "react";
import style from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  return (
    <div>
      <header
        id="header"
        className={`fixed-top  ${style.headertransparent} ${style.header1}`}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className={style.logo}>
            <h1>
              <a>PacketAnalyzer</a>
            </h1>

            <a href="index.html">
              <img src="assets/img/logo.png" alt="" className="img-fluid" />
            </a>
          </div>

          <nav id="navbar" className={style.navbar}>
            <ul>
              <li>
                <a className={`nav-link scrollto ${style.active}`} href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a className={`${style.getstarted} scrollto`} href="/packet">
                  Get Started
                </a>
              </li>
            </ul>
            {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
          </nav>
        </div>
      </header>
      <section id="hero" className={`${style.hero1} d-flex align-items-center`}>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
            >
              <div>
                <h1>PacketAnalyzer: Simplified Network Packet Insights</h1>
                <h2>
                  PacketAnalyzer: Simplified Network Packet Insights
                  PacketAnalyzer offers streamlined network packet analysis.
                </h2>
              </div>
            </div>
            <div
              className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img"
              data-aos="fade-up"
            >
              <img src="/hero-img.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="details" className={style.details}>
        <div className="container">
          <div className={`row ${style.content}`}>
            <div className="col-md-4" data-aos="fade-right">
              <img src="/details-1.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-4" data-aos="fade-up">
              <h3>Advanced Threat Detection - Unleash the Power of Pro</h3>
              <p className="fst-italic">
                Advanced Threat Detection - Unleash the Power of Pro Unlock the
                full potential of PacketAnalyzer with our upcoming Pro feature:
                Advanced Threat Detection.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check"></i> Real-Time Analysis: Our
                  upcoming Pro feature introduces advanced algorithms and deep
                  learning models that continuously monitor and analyze network
                  traffic in real-time.
                </li>
                <li>
                  <i className="bi bi-check"></i> Comprehensive Threat
                  Detection: Detect even the most sophisticated threats and
                  attacks, including zero-day exploits and targeted malware,
                  with unparalleled accuracy and efficiency.
                </li>
                <li>
                  <i className="bi bi-check"></i> Proactive Defense Measures:
                  Gain proactive defense measures to safeguard your network
                  infrastructure, ensuring robust protection against evolving
                  threats.
                </li>
                <li>
                  <i className="bi bi-check"></i> Stay Ahead of Threats: Stay
                  ahead of evolving threats with our Pro feature's proactive
                  defense measures, providing peace of mind for your network
                  security.
                </li>
              </ul>
              <p>
                Keep an eye out for Advanced Threat Detection, the next level of
                security for PacketAnalyzer Pro, coming soon to enhance your
                network protection.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div id="main">
        <footer id="footer" className={style.footer}>
          <div className={`${style.container} d-md-flex py-4`}>
            <div className="me-md-auto text-center text-md-start">
              <div className="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>PacketAnalyzer</span>
                </strong>
                . All Rights Reserved
              </div>
              <div className={style.credits}>
                Designed by{" "}
                <a href="https://github.com/h-a-r-s-h-s-r-a-h">Aarushi</a>
              </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="#" class="twitter">
                <i class="bx bxl-twitter"></i>
              </a>
              <a href="#" class="facebook">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="#" class="instagram">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="#" class="google-plus">
                <i class="bx bxl-skype"></i>
              </a>
              <a href="#" class="linkedin">
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
