import React from "react";
import Header from "../Header";
import ProjectList from "./ProjectList";

const projectsContainer = () => {
  return (
    <div>
      <div className="header">
        <Header />
        <div className="sub-header">
          <div className="container">
            <div className="row ">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="d-flex">
                  <h2 className="main-head me-5">
                    Projects <span className="bubble">03</span>
                  </h2>
                  <div className="search">
                    <span className="icon-search"></span>
                    <input
                      type="text"
                      className="text-box"
                      placeholder="Search"
                    />
                  </div>
                  <button className="primary-btn ms-4">Create Project</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 d-flex align-items-end justify-content-end col-sm-12">
                <div className="d-flex mt-3 font-14 lineBtn-set ">
                  <button className="link-btn active">Line View </button>

                  <button className="link-btn ms-4">GANNT View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectList />
    </div>
  );
};
export default projectsContainer;
