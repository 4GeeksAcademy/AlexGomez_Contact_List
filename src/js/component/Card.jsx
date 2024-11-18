import React from "react";
import "../../styles/home.css";

export const Card = () => (
 
    <div className="card mb-3 container-fluid" >

<div className="modal" tabindex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Are you sure?</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>If you delete this thing the entire universe will go down!</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
        <button type="button" className="btn btn-secondary">Yes baby!</button>
      </div>
    </div>
  </div>
</div>
      <div className="row g-0">
        <div className="col-md-4 carta-img">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png"
            className=" col-12 rounded"
            alt="..."
          />
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <h5 className="card-title">Mike Anamendolla</h5>
            <p className="card-text"><i className="fa-solid fa-location-dot p-1"></i>5842 Hillcreest Rd </p>
			<p className="card-text"><i className="fa-solid fa-phone-flip p-1"></i>(870) 288-4149</p>
            <p className="card-text"><i className="fa-solid fa-envelope p-1"></i> 
              <small className="text-body-secondary">
                   mike.ana@example.com
              </small>
            </p>
          </div>
        </div>
        <div className="col-md-3  d-grid gap-2  d-md-flex justify-content-md-end align-items-start mt-2 btns ">
          <button className="btn me-md-2 col-sm-2 " type="button">
            <i className= " fs-3 fa-solid fa-pencil"></i>
          </button>
          <button className="btn col-sm-3" type="button"  data-bs-toggle="modal" data-bs-target=".modal">
            <i className="fs-3 fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
);
