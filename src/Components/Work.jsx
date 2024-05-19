import React from "react";
import work from "../assets/images/Work.png";
const Work = () => {
  return (
    <>
      <section className="container-fluid" id="work">
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-12 text-center">
              <h1>Get a Quote is Easy</h1>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-lg-4 col-md-12 mb-5 mb-lg-0">
              <div id="box">
                <h1>01</h1>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-5 mb-lg-0">
              <div id="box">
                <h1>02</h1>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-0 mb-lg-0">
              <div id="box">
                <h1>03</h1>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-6" id="content">
              <h1>
                Impressive & Clean Businesses
                <br /> with CC Commercial Cleaning
              </h1>
              <p>
                Your office should reflect the professionalism and esteem of
                your company. CCC can deliver the impressive results your
                customers, clients, and employees expect when they walk into
                your business. Based in Birmingham, Alabama, we set the bar when
                it comes to commercial janitorial services that are ideal for
                office buildings, warehouses, plants, and factories. Simply put:
                nothing is left out, and no dirt is kept in!
              </p>
              <span>Call us today at:</span>
              <a href="#" className="btn mx-3 " id="btn">
                (205) 484-9624
              </a>
            </div>
            <div className="col-lg-6">
              <img src={work} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
