// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../Component/bars.svg";




const Header = () => {
  // this is use to add Important css inline style
  // const [imp , setImp] = useState("")
  // const modalOpen2 = () =>{
  //   setImp({
  //     y:"!important"
  //   })
  // }
  
  // this is use for style end
  

  // this is used for nav bars
  const [state, setState] = useState("")
  const modalOpen = () =>{
    
    setState({
      x:"d-block"
    })
  }
  // this is used for nav bars end

  return (
    <>
      {/* <div className="d-inline-block bars position-relative">
        <a className="nav-links insideBars  d-inline-block" to="/contact">
          <img src={img1} alt="bars... " className="h-25 w-25 " />
        </a>
      </div> */}
      

      <div className="portHeader d-block w-100 position-fixed  ">
        <div className="row bg-white h-100 ">
          <div
            className="boxShadow "
            style={{ boxShadow: "0 2px 23px 4px grey", height: "0px" }}
          >
            {" "}
          </div>
          <div className="col-6 sideCol ">
            <div className="nameDesg position-absolute">
              <div className="blueBox d-inline-block me-2  "></div>
              <div className="d-inline-block name fw-bolder  pointertoHome">
                <Link to="/" className="text-decoration-none text-dark">
                  Sagar&nbsp;Bika <span className="text-dark">/</span>
                  <span className="designation fw-normal "> Web Designer </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6   ">
            <div className={" navAbt " + state.x } >
              <ul className="nav   d-flex justify-content-end me-5  ">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "#0050FF" }}
                    to="/"
                  >
                    ABOUT ME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-black-nav " to="/resume">
                    RESUME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-black-nav" to="/project">
                    PROJECTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-black-nav" to="/contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          </div>
        
            <a className="nav-links d-none d-inline-block insideBars position-absolute  d-inline-block" onClick={modalOpen}  >
              <img src={img1} alt="bars... " className="  barss" />
            </a>
          
      </div>
    </>
  );
};

export default Header;
