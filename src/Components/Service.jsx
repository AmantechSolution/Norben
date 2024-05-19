import React from "react";
import s1 from "../assets/images/1.jpg";
import s2 from "../assets/images/3.jpg";
import s3 from "../assets/images/2.jpg";
import s4 from "../assets/images/4.jpg";
import { FaArrowRight } from "react-icons/fa";
const Service = () => {
  return (
    <>
      <section className="container-fluid" id="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="textDark text-center">CC Cleaning Services</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                feugiat interdum nunc.
              </p>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-3 col-md-6">
              <div className="serviceBox mb-2 mb-lg-0">
                <div className="imgSec">
                  <img src={s1} alt="" />
                </div>
                <div className="content">
                  <h4>Window Cleaning</h4>
                  <p>
                    No matter which residential cleaning services fit your
                    budget and cleaning needs, you have much to gain and nothing
                    to lose. That's be....
                  </p>
                  <a href="#">
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="serviceBox mb-2 mb-lg-0">
                <div className="imgSec">
                  <img src={s2} alt="" />
                </div>
                <div className="content">
                  <h4>Vacuuming</h4>
                  <p>
                    No matter which residential cleaning services fit your
                    budget and cleaning needs, you have much to gain and nothing
                    to lose. That's be....
                  </p>
                  <a href="#">
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="serviceBox mb-2 mb-lg-0">
                <div className="imgSec">
                  <img src={s3} alt="" />
                </div>
                <div className="content">
                  <h4>Bathroom Cleaning</h4>
                  <p>
                    No matter which residential cleaning services fit your
                    budget and cleaning needs, you have much to gain and nothing
                    to lose. That's be....
                  </p>
                  <a href="#">
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="serviceBox mb-2 mb-lg-0">
                <div className="imgSec">
                  <img src={s4} alt="" />
                </div>
                <div className="content">
                  <h4>Carpet Cleaning</h4>
                  <p>
                    No matter which residential cleaning services fit your
                    budget and cleaning needs, you have much to gain and nothing
                    to lose. That's be....
                  </p>
                  <a href="#">
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
