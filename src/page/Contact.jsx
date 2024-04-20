import style from "./TestHome.module.css";
import styles from "./Services.module.css";
import style1 from "./Home.module.css";


const Contact = () => {
  return (
    <div>
      <header
        id="header"
        className={`fixed-top  ${style1.headertransparent} ${style1.header1}`}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className={style1.logo}>
            <h1>
              <a>PacketAnalyzer</a>
            </h1>

            <a href="index.html">
              <img src="assets/img/logo.png" alt="" className="img-fluid" />
            </a>
          </div>

          <nav id="navbar" className={style1.navbar}>
            <ul>
              <li>
                <a className={`nav-link scrollto ${style1.active}`} href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a className={`${style1.getstarted} scrollto`} href="/packet">
                  Get Started
                </a>
              </li>
            </ul>
            {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
          </nav>
        </div>
      </header>
      <section id="hero" className={`${styles.hero} d-flex align-items-center`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Contact Us</h1>
              <h2>
                Need assistance or have questions? Contact PacketAnalyzer via
                email, phone, or our online form for prompt support.
              </h2>
              <h3>Email : E22CSEU0795@gmail.com</h3>
              <h3>Phone : 9310642252 </h3>
              <div className="d-flex"></div>
            </div>
            <div className={`col-lg-6 order-1 order-lg-2 ${styles.heroimg}`}>
              <img
                src="/communications.png"
                class="img-fluid animated"
                alt=""
              />
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

export default Contact;
