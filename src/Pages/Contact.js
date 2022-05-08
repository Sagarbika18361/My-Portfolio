import React from "react";
import Layout from "../Component/Layout";

const Contact = () => {
  return (
    <>
      <Layout>
        <div className="contact ">
          <div className="letstalk ">
            <div className="blueBox4 talk d-inline-block me-2 mb-1  " style={{ marginLeft: "542px" }}></div>
            <p className="d-inline-block" style={{ fontSize: "35px", fontWeight: "800",marginBottom:"4rem" }} >
              Let's talk
            </p>
            <div className="form letstalkform  ">
              <div className=" d-inline-block fName" style={{marginTop:"4rem"}}>
                <label htmlFor="" className="mb-3" style={{ fontSize:"14px" , color:"#000"}}>
                  First Name <span style={{color:"#0050ff" }}>*</span>
                </label><br/>
                <input type="text"  className="finput"/>
              </div>
              <div className="d-inline-block mt-3 lName">
                <label htmlFor="" className="ms-3 mb-3"  style={{ fontSize:"14px" , color:"#000" }}>
                  Last Name <span style={{color:"#0050ff" }} >*</span>
                </label><br/>
                <input type="text" className="ms-3" style={{width:"251px"}}/>
              </div>
              <div className="d-inline-block email " style={{marginLeft:"55px" , marginTop:"4rem"}}>
                <label htmlFor="" className="ms-3 mb-3"  style={{ fontSize:"14px" , color:"#000" }}>
                  Email <span style={{color:"#0050ff" }} >*</span>
                </label><br/>
                <input type="text" className="ms-3" style={{width:"563px"}}/>
              </div>
              <div className="d-inline-block subject " style={{marginLeft:"55px" , marginTop:"4rem"}}>
                <label htmlFor="" className="ms-3 mb-3"  style={{ fontSize:"14px" ,fontWeight:"600" , color:"#000" }}>
                  Subject <span style={{color:"#0050ff" }} >*</span>
                </label><br/>
                <input type="text" className="ms-3 " style={{width:"563px"}}/>
              </div>
              <div className="d-inline-block subject " style={{marginLeft:"55px" , marginTop:"4rem"}}>
                <label htmlFor="" className="ms-3 mb-3"  style={{ fontSize:"14px" ,fontWeight:"600" , color:"#000" }}>
                  Message <span style={{color:"#0050ff" }} >*</span>
                </label><br/>
                <textarea type="text" rows="4" cols="50" className="ms-3 " style={{width:"563px"}}/>
                <div className="resumeProject pt-5">
                  <a className="btn border resume  btn-sm me-3 ms-3" style={{width:"117px ", height:"38px"}} href="/">Send</a>
               </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
