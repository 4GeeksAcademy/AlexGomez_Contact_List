import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/Contact.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Alert} from "../component/alert.jsx";

export const Card = ({ prop,slug }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  
  let {name, phone, email, address,id} = prop;
    address = address ? address : "No address provided";
    phone = phone ? phone : "No phone provided";
    email = email ? email : "No email provided";




  const handleDeleteContact = (id) => {
    setSelectedContact(id); 
    setShowModal(true);       
  };

  const confirmDelete = () => {
    if (selectedContact) {
      actions.deleteContact(selectedContact);
      setShowModal(false); 
      setShowAlert(true);
      return  navigate("/");
    }
  };

  return (
    <div className="card mb-3 container-fluid">
      {showModal && (
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Are you sure?</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>If you delete this contact, it cannot be undone!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}
                >
                  Yes, delete it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showAlert && <Alert danger={"#exclamation-triangle-fill"} message="Contact deleted successfully!" />}
      <div className="row g-0">
        <div className="col-md-4 carta-img">
          <img
            src={`${store.pictures[Math.floor(Math.random() * store.pictures.length)]}`}
            className="col-12 rounded"
            alt="..."
          />
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <i className="fa-solid fa-location-dot p-1"></i> {address}
            </p>
            <p className="card-text">
              <i className="fa-solid fa-phone-flip p-1"></i> {phone}
            </p>
            <p className="card-text">
              <i className="fa-solid fa-envelope p-1"></i>
              <small className="text-body-secondary">{email}</small>
            </p>
          </div>
        </div>
        <div className="col-md-3 d-grid gap-2 d-md-flex justify-content-md-end align-items-start mt-2 btns">
          <Link className="btn me-md-2 col-sm-2"  to={{ pathname: `/update/${slug}/${id}` }} >
            <i className="fs-3 fa-solid fa-pencil"></i>
          </Link>
          <button
            className="btn col-sm-3"
            type="button"
            onClick={() => handleDeleteContact(id)} 
          >
            <i className="fs-3 fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
