import React from "react";
import Layout from "../Component/Layout";

const Resume = () => {
  return (
    <>
      <Layout>
        <div className="mainResume">
          <div className="mainrsm">
            <div className="blueBox2  d-inline-block me-2  mt-2" style={{marginLeft:"4rem" }}> </div>
            <div className="rsm d-inline-block">
              <h1 style={{ fontSize: "35px ", fontWeight: "bolder"}}>
                Resume
              </h1>
            </div>
          </div>
          <div className="downloadCv">
            <h1
              className=" education experience d-inline-block text-black "
              style={{ fontSize: "25px ", fontWeight: "bolder" , color:"#000" }}
            >
              Education
            </h1>
            <a href="/" className="btn btn-sm dwnCv float-end">
              Download CV
            </a>
          </div>
          <div className="education">
            <div className="insisdeEdu p-5">
              <div className="row">
                <div className="col-4  h-100">
                  <h3
                    style={{
                      color: "#0050FF",
                      fontSize: "20px",
                      fontWeight: "800",
                    }}
                  >
                    2019 - Present
                  </h3>
                  <p className="" style={{ fontSize: "17px" }}>
                    UNIVERSITY NAME
                  </p>
                  <p className="" style={{ fontSize: "14px" }}>
                    Degree Level
                  </p>
                  <p className="" style={{ fontSize: "14px" }}>
                    University Location
                  </p>
                </div>
                <div className="col-8 h-100 ">
                  <p style={{ fontSize: "17px " }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    quod corporis quisquam. Nemo, odit maxime voluptas molestiae
                    omnis sapiente eaque quia delectus, harum blanditiis
                    voluptatibus consequuntur sint totam consectetur vero. harum
                    omnis fugiat odit recusandae ab repellendus quisquam magnam
                    corrupti vitae, enim porro voluptatem nobis maxime dicta
                    ducimus atque quis! Necessitatibus, doloribus. Atque nulla
                    eaque doloribus in
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="professionalSkill">
            <div className="insisdeEdu p-5">
              <div className="row">
                <div className="col-12  h-100">
                  <h2
                    className="ProfSkill ms-4 mb-5 mt-4 "
                    style={{
                      fontSize: "25px",
                      letterSpacing: "1px",
                      fontWeight: "bolder",
                      textShadow: "0px 0px, 0px 0px, 1px 0px",
                      color: "#000000",
                    }}
                  >
                    Professional skillset
                  </h2>
                  <div className="row" style={{ minHeight: "100px" }}>
                    <div className="blueBox3 ms-5 m-0 p-0"></div>
                    <div
                      className="col-6 ms-2"
                      style={{
                        width: "243px",
                        height: "36px",
                        fontSize: "14px",
                      }}
                    >
                      <p className="d-inline-block">Entrepreneurial Mindset</p>
                    </div>
                    <div className="blueBox3  ms-5 m-0 p-0"></div>
                    <div
                      className=" col-6 ms-2"
                      style={{
                        width: "243px",
                        height: "36px",
                        fontSize: "14px",
                      }}
                    >
                      <p className="d-inline-block">Teamwork & Collaboration</p>
                    </div>
                    <div className="blueBox3  ms-5 m-0 p-0"></div>
                    <div
                      className=" col-6 ms-2"
                      style={{
                        width: "243px",
                        height: "36px",
                        fontSize: "14px",
                      }}
                    >
                      <p className="d-inline-block">Go-to-Market Planning</p>
                    </div>
                    <div className="blueBox3  ms-5 m-0 p-0"></div>
                    <div
                      className=" col-6 ms-2"
                      style={{
                        width: "243px",
                        height: "36px",
                        fontSize: "14px",
                      }}
                    >
                      <p className="d-inline-block">Digital Analytics</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 h-100 ">
                  <h2
                    className="ProfSkill ms-4 mb-5 mt-4 "
                    style={{
                      fontSize: "25px",
                      letterSpacing: "1px",
                      fontWeight: "bolder",
                      textShadow: "0px 0px, 0px 0px, 1px 0px",
                      color: "#000000",
                    }}
                  >
                    Languages
                  </h2>
                  <div className="row" style={{ minHeight: "100px" }}>
                    <div className="blueBox3 ms-5 m-0 p-0"></div>
                    <div
                      className="col-6 ms-2"
                      style={{
                        width: "243px",
                        height: "36px",
                        fontSize: "14px",
                      }}
                    >
                      <p className="d-inline-block">Hindi (native)</p>
                    </div>
                    <div className="blueBox3  ms-5 m-0 p-0"></div>
                    <div
                      className=" col-6 ms-2"
                      style={{
                        width: "243px",
                        height: "36px",
                        fontSize: "14px",
                      }}
                    >
                      <p className="d-inline-block">English</p>
                    </div>
                    <div className="blueBox3  ms-5 m-0 p-0"></div>
                    <div
                      className=" col-6 ms-2"
                      style={{
                        width: "243px",
                        height: "36px",
                        fontSize: "14px",
                      }}
                    >
                      <p className="d-inline-block">Nepali</p>
                    </div>
                    <div className="blueBox3  ms-5 m-0 p-0"></div>
                    <div
                      className=" col-6 ms-2"
                      style={{
                        width: "243px",
                        height: "36px",
                        fontSize: "14px",
                      }}
                    >
                      <p className="d-inline-block">Hindi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Resume;
