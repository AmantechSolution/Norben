import React from "react";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import abt from "../assets/images/abt.png";
const About = () => {
  return (
    <>
      <section className="container-fluid" id="about">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-3">
              <div id="box">
                <div className="img">
                  <img src={p1} alt="" />
                </div>
                <h4>Commercial Services</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div id="box">
                <div className="img ">
                  <img src={p2} alt="" />
                </div>
                <h4>Janitorial Services</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div id="box">
                <div className="img">
                  <img src={p3} alt="" />
                </div>
                <h4>Floor Cleaning</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div id="box">
                <div className="img">
                  <img src={p4} alt="" />
                </div>
                <h4>Disinfection Services</h4>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <img src={abt} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 px-5 sm-px-0">
              <h1 className="text-Primary">
                Know Something <br />
                About Our Company
              </h1>
              <p>
                There's no greater feeling than coming back to work to an empty
                trash can after stuffing your receptacle with the previous day's
                food, paper, and other refuse. Tasks like trash removal and
                other janitorial services add up and leave your business in a
                radiant condition. With more than 30 years of experience, we
                have ensured customer satisfaction by taking to heart every
                customer's feedback. We strive to improve the way cleaning is
                done in Birmingham, Alabama. Make CCC your first choice for
                commercial cleaning.
              </p>
              <h5>Mission Statement</h5>
              <p>
                he mission of Classic Commercial Cleaning is to give our clients
                outstanding customer service and quality services while
                remaining affordable.
              </p>
              <a href="#" className="btn " id="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
