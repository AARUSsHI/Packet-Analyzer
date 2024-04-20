import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PacketPage = () => {
  const [networkData, setNetworkData] = useState([]);
  const [formData, setFormData] = useState({
    sourceIP: "",
    destIP: "",
    sourcePort: "",
    destPort: "",
    protocol: "",
    packetLen: "",
    packetType: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // Handle checkbox inputs separately
      if (checked) {
        setFormData({ ...formData, [name]: [...formData[name], value] });
      } else {
        setFormData({
          ...formData,
          [name]: formData[name].filter((item) => item !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData.weight)
    console.log(formData);
    const response = await fetch("http://127.0.0.1:8001/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source_ip: formData.sourceIP,
        destination_ip: formData.destIP,
        source_port: formData.sourcePort,
        destination_port: formData.destPort,
        protocol: formData.protocol,
        packet_length: formData.packetLen,
        packet_type: formData.packetType,
      }),
    });
    const data = await response.json();
    console.log(data);
    setNetworkData(data);
    toast("Your data is ready!");
  };
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
              <img src="/virus.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section
        id="details"
        style={{ marginLeft: "180px", padding: "10px" }}
        className={style.details}
      >
        {/* <div className="container"> */}
        {/* <div className={`row ${style.content}`}> */}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-10">
              <label for="inputEmail4">Source IP</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                name="sourceIP"
                placeholder="Source IP (192.168.1.100)"
                value={formData.sourceIP}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-10">
              <label for="inputPassword4">Destination IP</label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                name="destIP"
                placeholder="Destination IP (203.0.113.10)"
                value={formData.destIP}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group col-md-10">
            <label for="inputAddress">Source Port</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              name="sourcePort"
              placeholder="Source Port (54321)"
              value={formData.sourcePort}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-10">
            <label for="inputAddress2">Destination Port</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              name="destPort"
              placeholder="Destination Port (80)"
              value={formData.destPort}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-10">
            <label for="inputAddress2">Protocol</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              name="protocol"
              placeholder="Protocol (TCP)"
              value={formData.protocol}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-10">
            <label for="inputAddress2">Packet Type</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              name="packetType"
              placeholder="Packet Type (data)"
              value={formData.packetType}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-10">
            <label for="inputAddress2">Packet Length</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              name="packetLen"
              placeholder="Packet Length (1500)"
              value={formData.packetLen}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            style={{ marginTop: "25px", marginRight: "19%" }}
            className="btn btn-primary mb-3"
          >
            Make Recommendation
          </button>
        </form>
        <Popup
          trigger={
            <button
              type="submit"
              style={{ marginTop: "25px", marginRight: "19%" }}
              className="btn btn-primary mb-3"
            >
              Get Recommendation
            </button>
          }
          position="top middle"
          contentStyle={{
            width: "800px",
            padding: "20px",
            height: "340px",
            overflowY: "auto",
          }}
          // closeOnDocumentClick={false}
        >
          <div>
            <h3>Information about Network</h3>
            <textarea
              value={networkData.output1}
              onChange={handleChange}
              style={{ width: "100%", height: "300px", resize: "none" }}
              disabled
            />
          </div>
          <div>
            <h3>Information of Malware</h3>
            <textarea
              value={networkData.output2}
              onChange={handleChange}
              style={{ width: "100%", height: "150px", resize: "none" }}
              disabled
            />
          </div>
          <div>
            <h3>Information of attack type</h3>
            <textarea
              value={networkData.output3}
              onChange={handleChange}
              style={{ width: "100%", height: "150px", resize: "none" }}
              disabled
            />
          </div>
        </Popup>
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
      <ToastContainer />
    </div>
  );
};

export default PacketPage;
