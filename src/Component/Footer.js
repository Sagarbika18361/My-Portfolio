import React from "react";

const Footer = () => {
  return (
    <>
      <div className="portFooter bg-white position-relative">
        <div className="row h-100  ">
          <div className="col-6 copyRight ">
            <p className="d-inline-block" style={{ fontSize: "13px" }}>
              © 2000-2022,Sagarbika.com,
              <br />
              Inc. or its affiliates
            </p>
          </div>
          <div className="col-6 pt-4 d-flex justify-content-end">
            <div className="d-inline-block pe-5 ">
              <p className="fw-bold ps-4 " style={{ fontSize: "14px" }}>
                Call
              </p>
              <p style={{ fontSize: "12px" }}>+91-8860478612</p>
            </div>
            <div className="d-inline-block ps-3 ">
              <p className="fw-bold ps-5" style={{ fontSize: "14px" }}>Mail </p>
              <p style={{ fontSize: "12px" }}> sagarbika18361@gmail.com</p>
            </div>
            <div className="d-inline-block ps-5 ">
              <p className="fw-bold ps-5 mb-0" style={{ fontSize: "14px" }}>Follow </p>
              <ul class="nav ps-2  "style={{paddingRight:"4rem"}}>
                <li class="nav-item">
                  <a class="nav-link ps-1 " href="/">
                    <img
                      src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"
                      alt="facebook"
                    />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ps-1" href="/">
                    <img
                      src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp"
                      alt="twitter"
                    />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ps-1" href="/">
                    <img
                      src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01/6ea5b4a88f0b4f91945b40499aa0af00.webp"
                      alt="linkdin"
                    />
                  </a>
                </li>
                 <li class="nav-item">
                  <a class="nav-link ps-1" href="/">
                    <img
                      src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"
                      alt="instagram"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
