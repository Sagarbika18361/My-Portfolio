import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Component/Layout.js";
import Img from "../man.png";
const Main = () => {
  return (
    <>
      <Layout>
      
        <div className="mainContainer position-relative ">
          <div className="row main w-100 ">
            <div className="col-6 width535"></div>
            <div className="col-6 width813 " style={{paddingLeft:"95px"}}>
             <div className="helloo">
             <p className="hello " >Hello</p>
             </div>
             <div className="whoiam">
             <p className="whoiamwhatido " style={{fontSize:"25px",fontWeight:"600" }} >Here's who I am & what I do</p>
             </div>
             <div className="resumeProject pt-5">
              <Link className="btn border resume  btn-sm me-3 "  to="/resume">Resume</Link>
              <Link className="btn border project btn-sm "   to="/project">Project</Link>
             </div>
             <div className="bio">
                <p className="pt-5">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font</p>
             </div>
            </div>
          </div>
        </div>

        <div className="main2 main2Profile position-absolute mb-5 " style={{boxShadow:"#D3D3D3 0px 0px 7px 5px , #C8C8C8 -1px -1px 12px -15px"}}>
          <div className="main2Profileimg ">
            <div className="imgDiv m-0  ">
              <img className="img-fluid myImg  " src={Img} alt="sb..." />
            </div>
          </div>
          <div className="name ">
            <h1 className="text-black fw-bolder text-center mb-2 " style={{ marginTop:"41px",fontSize: "27px",letterSpacing:"4px" }}>
              Sagar <br /> <span  className="mt-3"> Bika </span>
              <span className="d-block blueBrd  h-25 text-black"> </span>
            </h1>
            <p className="fw-lighter " style={{fontSize:"17px",marginTop:"25px",marginBottom:"48px" ,paddingLeft:"6rem",letterSpacing: "0.25em"}}>WEBSITE DESIGNER</p>
          </div>
          <div className= " socialHandle m-0 " >
          <ul class="nav " style={{paddingLeft:"7rem"}}>
                <li class="nav-item">
                  <a class="nav-link ps-1 " href="#">
                    <img
                      src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"
                      alt="facebook"
                    />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ps-1" href="#">
                    <img
                      src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp"
                      alt="twitter"
                    />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ps-1" href="#">
                    <img
                      src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01/6ea5b4a88f0b4f91945b40499aa0af00.webp"
                      alt="linkdin"
                    />
                  </a>
                </li>
                 <li class="nav-item">
                  <a class="nav-link ps-1" href="#">
                    <img
                      src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"
                      alt="instagram"
                    />
                  </a>
                </li>
              </ul>
          </div>
        </div>
        {/* <div className=" row position-absolute mobileNav m-0">
          <div className=" col-sm-12 col-xs-12 p-0  ">
          a
          </div>
      </div> */}
      </Layout>
    </>
  );
};

export default Main;
