import React from "react";
import vesselThmd from "../../../images/vessel-thmd.jpg";

const ProjectList = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="list-view mb-4">
          <div
            className="card v-list-lg "
            onclick="location.href='specify.html'"
          >
            <div className="thmb-lg ship-thumb">
              <img src={vesselThmd} alt="" />
            </div>
            <button className="pin link-btn pinned">
              <span className="icon-pin"></span>
            </button>

            <div className="pro-indicators d-flex">
              <div className="priority-ind ">
                <span className="icon-disc high"> </span> High
              </div>
              <div className="phase-ind ms-4">
                <div className="specify">S</div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-12">
                <h5 className="mb-2">Am Ocean Star_DD Project_Drydocking</h5>
                <p>AM Ocean star</p>
                <div className="font-14 my-2">
                  <span className="icon-disc inprogress font-16"> </span>{" "}
                  Inprogress
                </div>
              </div>
              <div className="col-lg-4 col-md-6 gx-5 respo-fix">
                <div className="d-flex justify-content-between">
                  <label for=""> DD Due Date:</label>
                  <div className="value">24/06/2021</div>
                </div>

                <div className="d-flex justify-content-between">
                  <label for=""> Specs:</label>
                  <div className="value">10</div>
                </div>

                <div className="d-flex justify-content-between">
                  <label for=""> Estimated Budget:</label>
                  <div className="value">$34,68932</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 gx-5 respo-fix">
                <div className="d-flex justify-content-between">
                  <label for=""> Offhire Days:</label>
                  <div className="value">--</div>
                </div>

                <div className="d-flex justify-content-between">
                  <label for=""> Yard:</label>
                  <div className="value">--</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card v-list-lg "
            onclick="location.href='specify.html'"
          >
            <div className="thmb-lg ship-thumb">
              <img src={vesselThmd} alt="" />
            </div>
            <button className="pin link-btn ">
              <span className="icon-pin"></span>
            </button>

            <div className="pro-indicators d-flex">
              <div className="priority-ind ">
                <span className="icon-disc medium"> </span> Medium
              </div>
              <div className="phase-ind ms-4">
                <div className="tender">T</div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-12">
                <h5 className="mb-2">Am Ocean Star_DD Project_Drydocking</h5>
                <p>AM Ocean star</p>
                <div className="font-14 my-2">
                  <span className="icon-disc inprogress font-16"> </span>{" "}
                  Inprogress
                </div>
              </div>
              <div className="col-lg-4 col-md-6 gx-5 respo-fix ">
                <div className="d-flex justify-content-between">
                  <label for=""> DD Due Date:</label>
                  <div className="value">24/06/2021</div>
                </div>

                <div className="d-flex justify-content-between">
                  <label for=""> Specs:</label>
                  <div className="value">10</div>
                </div>

                <div className="d-flex justify-content-between">
                  <label for=""> Estimated Budget:</label>
                  <div className="value">$34,68932</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 gx-5 respo-fix">
                <div className="d-flex justify-content-between">
                  <label for=""> Offhire Days:</label>
                  <div className="value">--</div>
                </div>

                <div className="d-flex justify-content-between">
                  <label for=""> Yard:</label>
                  <div className="value">--</div>
                </div>
              </div>
            </div>
          </div>

          <div className="list-ctrl d-flex justify-content-end my-4">
            <div className="d-flex">
              <label for="cars" className="table-view__showing-text">
                Items per page
              </label>
              <select name="" className="select small ms-3" id="">
                <option value="05">05</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectList;
